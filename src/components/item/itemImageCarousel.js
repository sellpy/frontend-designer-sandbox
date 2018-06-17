import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class ItemImageCarousel extends React.Component {

    render() {
        const images = this.props.images.map( ( image ) => {
            return (
                {
                original: image,
                thumbnail: image,
                }
            );
        } );

        return (
            <ImageGallery
                showPlayButton = { false }
                items={ images }
                showFullscreenButton = { false }
            />
        );
    }
}
