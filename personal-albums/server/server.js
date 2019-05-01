const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');

const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/albums', option).then((client, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB connected!')
    }
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Models
const { User } = require('./models/user');

// Middlewares
const { auth } = require('./middleware/auth');

app.get('/api/users', (req, res) => {
    User.find({}).then((err, users) => {
        if(err) res.status(400).json(err);
        res.status(200).json(users);
    })
});

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true
        })
    })
});

app.post('/api/users/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false,message:'Auth failed, email not found'});

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false,message:'Wrong password'});

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth',user.token).status(200).json({
                    loginSuccess: true,
                    currentUser: user
                })
            })
        })
    })
});


app.get('/api/users/logout',auth,(req,res)=>{
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true
            })
        }
    )
});

app.get('/api/users/auth',auth,(req,res)=>{
    res.status(200).json({
        isAuth: true,
        currentUser: req.user
    })
});


const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Server Running at ${port}`)
});