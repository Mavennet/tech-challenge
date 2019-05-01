import React, {Component} from 'react';
import PhotoCard from './PhotoCard'

class Photos extends Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left"></div>
                        <div className="right">
                            <PhotoCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photos;
