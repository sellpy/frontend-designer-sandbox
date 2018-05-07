import React from 'react';
import Swipeable from 'react-swipeable';

/* The slider for mobile image container
 * props: currentImage
 */
class ImageContainerSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.currentImage
    };
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.currentImage !== this.state.currentImage){
      this.setState({currentImage: nextProps.currentImage});
    }
  }
  slideTo = (index) => {
    this.setState({currentImage: index});
    this.props.onDotClick(index);
  }
  render() {
    const currentDotStyle = {
      width: '15px',
      height: '15px',
      margin: '10px 6px',
      borderColor: 'white',
      background: 'rgba(0,0,0,0.6)'
    }
    let dots=[];
    for(let i=0; i<5; i++){
      let dot;
      if(i===this.state.currentImage){
        dot = (
          <span
            className="slider-dot"
            style={currentDotStyle} key={i}
            onClick={this.slideTo.bind(this,i)}
            >
          </span>
        );
      }else {
        dot = (
          <span
            className="slider-dot"
            onClick={this.slideTo.bind(this,i)}
            key={i}>
          </span>
        );
      }
      dots.push(dot);
    }
    return(
      <div className="slider-dot-list">
        {dots}
      </div>
    );
  }
}


/* props: images */
class ImageContainerMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0
    };
  }
  slideTo = (index) => {
    if( index>=0 && index <=4 ) {
      this.setState({currentImage: index});
    }
  }
  render() {
    const leftPosition = - this.state.currentImage * window.innerWidth;
    return (
      <Swipeable
        onSwipedRight={this.slideTo.bind(this, this.state.currentImage-1)}
        onSwipedLeft={this.slideTo.bind(this, this.state.currentImage+1)}
        >
        <div className="image-container">
          <div className="image-container-mobile-view">
            <div
              className="image-container-mobile-images"
              style={{left: leftPosition}}
              >
              {
                this.props.images.map((image, key) => (
                  <img src={image} key={key} alt="Product"/>
                ))
              }
            </div>
          </div>
            <div className="image-container-mobile-slider">
              <ImageContainerSlider
                currentImage={this.state.currentImage}
                onDotClick={this.slideTo}
              />
            </div>
         </div>
       </Swipeable>
    );
  }

}

export default ImageContainerMobile;
