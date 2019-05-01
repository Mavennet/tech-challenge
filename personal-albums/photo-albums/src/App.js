import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Gallary from './component/gallary';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer'
import Home from './component/Home/HomePage'
import Login from './component/auth/Login'

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route exact path="/gallery/:id" component={Gallary}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
