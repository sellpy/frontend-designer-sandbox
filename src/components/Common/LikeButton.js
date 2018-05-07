import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import ReactHoverObserver from 'react-hover-observer';
import colors from './Colors';

const HeartDiv = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const HeartSideText = styled.p`
  position: absolute;
  top: 10px;
  right: -35px;
  opacity: 0;
  color: ${colors.sellpyBlue};
  font-size: 0.9em;
  transition: all 0.3s ease-in-out;
`;


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      showText: false
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      liked: !this.state.liked,
      showText: !this.state.liked
    });
    setTimeout(() => {
      this.setState({ showText: false });
    }, 700);
  }
  render() {
    const heartIcon = this.state.liked? 'ion-android-favorite' : 'ion-android-favorite-outline';
    const heartColor = this.state.liked? colors.red : 'rgba(0,0,0,0.6)';
    const heartSize = this.props.size || '35px';
    const heartStyle = {
      color: heartColor,
      fontSize: heartSize,
      margin: '8px 10px'
    };
    const heartHoverStyle = {
      color: colors.red
    };
    return (
      <div className="like-btn">
        <HeartDiv onClick={this.handleClick} >
            <ReactHoverObserver>
                {({isHovering}) => {
                  if(!isHovering || isMobile ){
                    return (
                        <i className={heartIcon} style={heartStyle}></i>
                    );
                  } else {
                    return (
                        <i className="ion-android-favorite" style={{...heartStyle, ...heartHoverStyle}}></i>
                    );
                  }
                }}
            </ReactHoverObserver>
        </HeartDiv>
        {this.props.hintText &&
          <HeartSideText
            style={{
              opacity: this.state.showText? 1: 0
            }}
            >
            Saved
          </HeartSideText>
        }
      </div>
    )
  }
}

export default LikeButton;
