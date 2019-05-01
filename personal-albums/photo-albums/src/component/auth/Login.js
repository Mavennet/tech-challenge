import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {loginUser} from '../../actions/userActions';
import TextFieldGroup from '../common/TextFileldGroup';

class Login extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.currentUser) {
            this.props.history.push('/');
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.dispatch(loginUser(userData));
    };

    render() {
        const errors = this.state.errors;

        return (
            <div>
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Log In</h1>
                                <p className="lead text-center">Sign in to your DevConnector account</p>
                                <form onSubmit={this.onSubmit}>
                                    <TextFieldGroup
                                        placeholder="Email Address"
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextFieldGroup
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                    />
                                    <input type="submit" className="btn btn-info btn-block mt-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(withRouter(Login));