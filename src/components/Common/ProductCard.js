/* The card component for a single product
 * image, brand, type, price, link
 */
import React from 'react';
import ReactHoverObserver from 'react-hover-observer';
import styled from 'styled-components';
import Button from './Button';
import LikeButton from './LikeButton';

const ProductCardImage = ({images, isHovering}) => {
  const imageStyle = {
    width: '100%'
  }
  let imagePath = isHovering? images[1] : images[0];
  // const imageToShow = require(`../../assets/images/shirts/${imagePath}.jpg`);
  return(
    <img
      src={imagePath}
      style={imageStyle}
      alt="Card Product"
    />
  );
};

const CardDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: ${props => 0.9 * props.percentWidth + '%'};
  margin: 10px ${props => 0.05 * props.percentWidth + '%'};
  min-width: 100px;
  padding: 20px 10px;
  text-align: center;
  background: white;
  display: inline-block;
  transition: width .3s;
  &:hover {
    box-shadow: 0px 6px 16px rgba(0,0,0,0.06);
    width: ${props => 0.915 * props.percentWidth + '%'};
    .product-card-discount-badge {
      display: block;
    }
    .product-card-like {
      display: block;
    }
  }
  @media (max-width: 550px) {
    width: 150px;
    margin: 10px;
    box-shadow: 0px 6px 16px rgba(0,0,0,0.06);
    &:hover {
      width: 152px;
    }
  }
`;

/* item: images, brand, type, currentValue, size */
const ProductCard = ({item, isHovering, percentWidth}) => {
  return(
    <CardDiv percentWidth={percentWidth}>
      <ReactHoverObserver>
        {({isHovering}) => (
          <ProductCardImage images={item.images} isHovering={isHovering}/>
        )}
      </ReactHoverObserver>
      <div className="product-card-text">
        <p className="product-card-title">
          {item.brand}
        </p>
        <p className="product-card-description">
          {item.type}
          {item.size && ', '+item.size}
        </p>
        {item.discount?
          (<p className="product-card-price">
            <span className="product-card-price-original">
              {item.currentValue}
            </span>
            {item.currentValue * item.discount/100 } kr
          </p>)
          :(<p className="product-card-price">
            {item.currentValue} kr
           </p>)
        }
      </div>
      {item.discount &&
        <div className="product-card-discount-badge">
          <p>{item.discount} %</p>
        </div>
      }
      <div className="product-card-like">
        <LikeButton size="27px"/>
      </div>
      <Button blue outlined small style={{maxWidth: '100%'}}>KÖP</Button>
    </CardDiv>
  );
};

export default ProductCard;
