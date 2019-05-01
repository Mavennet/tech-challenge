import React from 'react';

const PhotoCard = props => {
    return (
        <div>
            <h2 className="h1 text-center text-uppercase font-weight-bold mt-5 mb-3 mt-5">My projects</h2>
            <p className="text-center text-uppercase font-weight-bold">All about my work</p>

            <div className="row ml-3 mr-3 pb-4 pt-1">
                <div className="col-md-12">
                    <div className="mdb-lightbox-ui"></div>

                    <div className="mdb-lightbox">
                        <figure className="col-md-3">
                            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(135).jpg"
                                 className="img-fluid z-depth-1"
                                 alt=""
                            />
                        </figure>
                        <figure className="col-md-3">
                            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(135).jpg"
                                 className="img-fluid z-depth-1"
                                 alt=""
                            />
                        </figure>
                        <figure className="col-md-3">
                            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(135).jpg"
                                 className="img-fluid z-depth-1"
                                 alt=""
                            />
                        </figure>
                        <figure className="col-md-3">
                            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(135).jpg"
                                 className="img-fluid z-depth-1"
                                 alt=""
                            />
                        </figure>
                        <figure className="col-md-3">
                            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(135).jpg"
                                 className="img-fluid z-depth-1"
                                 alt=""
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;