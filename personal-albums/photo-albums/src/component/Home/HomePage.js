import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../actions/userActions';

import Albums from '../Albums';
import {getAlbums} from "../../actions/albumActions";

class HomePage extends Component {
    state = {
        albums: [],
        userId: ''
    };

    componentDidMount() {
        this.props.dispatch(auth()).then(response => {
            this.setState({userId: response.payload.currentUser.userId});
            this.props.dispatch(getAlbums(this.state.userId)).then(response => {
                this.setState({albums: response.payload})
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.album) {
            this.setState({albums: nextProps.album.albums})
        }
    }
    render() {
        const {currentUser} = this.props.user;

        const guestContent = (
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Personal Albums
                    </h1>
                    <p className="lead"> Providing lovely albums and photo gallery for you!</p>
                    <hr/>
                    <Link to="/login" className="btn btn-lg btn-info mr-2">Please Login first!</Link>
                </div>
            </div>
        );

        const userContent = (
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4">Personal Albums
                    </h1>
                    <p className="lead">Providing lovely albums and photo gallery for you! </p>
                    <hr/>
                    <Albums albums={this.state.albums}/>
                </div>
            </div>
        );

        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        {currentUser? userContent : guestContent}
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


export default connect(mapStateToProps)(HomePage);