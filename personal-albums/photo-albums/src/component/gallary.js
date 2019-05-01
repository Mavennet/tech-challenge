import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {connect} from 'react-redux';
import {getPhotos} from '../actions/albumActions';

class Gallary extends Component{
     state = {
         photos: [
             // { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
             // { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
             // { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
             // { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
             // { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
         ],
         currentImage: 0,
         lightboxIsOpen: false,
     };

     componentDidMount() {
         const id = window.location.href.split('/')[4];
         this.props.dispatch(getPhotos(id));
     }

    componentWillReceiveProps(nextProps) {
        if (this.props.album !== nextProps.album) {
            const newPhotos = [];
            nextProps.album.photos.map(item => {
                newPhotos.push({
                    src: item.url,
                    width: 4,
                    height: 3,
                    id: item.id
                })
            });
            this.setState({
                photos: newPhotos
            })
        }
    }

    openLightbox = (event, obj) => {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    };

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    };

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    };

    render() {
        return (
            <div>
                <Gallery photos={this.state.photos} onClick={this.openLightbox} />
                <Lightbox images={this.state.photos}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        album: state.album
    }
};

export default connect(mapStateToProps)(Gallary);
