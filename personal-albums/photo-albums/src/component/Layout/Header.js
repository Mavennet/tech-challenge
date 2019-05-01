import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/userActions';

class Header extends Component{
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.dispatch(logoutUser());
    };

    render() {
        const {currentUser} = this.props.user;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Albums</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" onClick={this.onLogoutClick} className="nav-link">
                        Logout
                    </Link>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Personal Albums</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">

                        {currentUser? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps)(Header);