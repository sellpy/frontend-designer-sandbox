import React from 'react';

/* props: images */
class ImageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      windowWidth: 0
    };
  }
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  updateWidth = () => {
    const windowWidth = window.innerWidth;
    this.setState({ windowWidth: windowWidth });
  }
  changeImage = (index) => {
    this.setState({currentImage: index});
  }
  render() {
    const thumbnailStyle = {
      width: '50px'
    };
    const currentThumbnailStyle = {
      width: '60px'
    };
    let ImageContainerContent;
    if ( this.state.windowWidth > 550 ) {
      // Wide screen: side display the thumbnails
      ImageContainerContent = (
        <div className="flex-container flex-center image-container">
          <ul className="w15 image-container-list">
            {this.props.images.map((image, index) =>
              <li key={'image'+index} onClick={() => this.changeImage(index)}>
                {
                  <img
                      className="image-container-thumb"
                      src= {image}
                      style={(index===this.state.currentImage) ? currentThumbnailStyle : thumbnailStyle}
                      alt='Thumbnail'
                  />
                }
              </li>
            )}
          </ul>
          <div className="w85 center">
            <img
              className="image-container-view"
              src={this.props.images[this.state.currentImage]}
              alt='Product'
            />
         </div>
       </div>
      );
    }
    else {
      // Small screen: bottom display the thumbnails
      ImageContainerContent = (
        <div className="image-container">
          <img
            className="image-container-view"
            src={this.props.images[this.state.currentImage]}
            alt='Product'
          />
          <div className="image-container-thumbs">
              {this.props.images.map((image, index) =>
                <div key={'image'+index} onClick={() => this.changeImage(index)}>
                  {
                    <img
                        className="image-container-thumb"
                        src= {image}
                        style={(index===this.state.currentImage) ? currentThumbnailStyle : thumbnailStyle}
                        alt='Thumbnail'
                    />
                  }
                </div>
              )}
           </div>
         </div>
      );
    }

    return (
      <div className="seven columns">
        {ImageContainerContent}
     </div>
   );
  }

}

export default ImageContainer;
