import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Albums extends Component{

    render() {
        console.log(this.props.albums);
        const showAlbums = () => (
            this.props.albums ?
                (
                    this.props.albums.map((item, i) => (
                        <p key={i}>
                            <Link to={`/gallery/${item.id}`} className="btn btn-lg btn-info mr-2" >{item.title}</Link>
                        </p>
                    ))
                )
                : null
        );
        return (
            <div>
                {showAlbums()}
            </div>

        )
    }
}

export default connect()(Albums);