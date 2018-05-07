/* Product information */
import React from 'react';
import { isMobileOnly } from 'react-device-detect';

import Button from '../Common/Button';
import colors from '../Common/Colors';
import LikeButton from '../Common/LikeButton';

import deliveryIcon from '../../assets/images/icons/delivery.svg';

const ItemStatus = ({item}) => {
  const statusMessage = (item.metadata.condition === 'Normalt')? (
    <span>Varan är i fint begagnat skick.</span>
  ) : (
    <span>
      Varan är i fint begagnat skick.<br/>
      Vissa tecken på användning finns ({item.metadata.defect})
    </span>
  );
  return statusMessage;
}

const ItemInfoBasic = ({item}) => {
  return (
    <p className="item-info-basic">
      {item.metadata.color    &&   <span>Färg: &nbsp;&nbsp; {item.metadata.color.join(', ')} <br /></span> }
      {item.metadata.model    &&   <span>Modell: &nbsp;&nbsp; {item.metadata.model} <br /></span> }
      {item.metadata.material &&   <span>Material: &nbsp;&nbsp; {item.metadata.material.join(', ')} <br /></span>}
      {item.metadata.extra    &&   <span>Extra: &nbsp;&nbsp; {item.metadata.extra} </span>}
    </p>
  )
}

const TraderaButton = () => {
  return(
    <Button yellow className="item-actions-btn">
      VISA AUKTION PÅ TRADERA
    </Button>
  )
}

class AddToCartButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      added: false,
      content: "LÄGG I VARUKORG"
    };
  }
  addToCart = () => {
    if(!this.state.added && !this.props.ifInCart){
      this.setState({
        added: true,
        content: "I VARUKORG, TA BORT"
      });
      this.props.onAddToCart(true);
    }else {
      this.setState({
        added: false,
        content: "LÄGG I VARUKORG"
      })
      this.props.onAddToCart(false);
    }
  }
  render(){
    let buttonText = this.state.content;
    if(this.props.ifInCart) buttonText = "I VARUKORG, TA BORT";
    const addedIcon = <i className="ion-checkmark-circled"></i>;
    return(
        <Button blue
          className="item-actions-btn"
          style={(this.state.added||this.props.ifInCart)?{background: colors.sellpyGreen }: {}}
          onClick={this.addToCart}
          >
          {(this.state.added||this.props.ifInCart) && addedIcon}
          {buttonText}
        </Button>
    );
  }
};

const ItemDelivery = ({item}) => {
  return (
    <div className="flex-container flex-center">
      <div className="w15">
        <img src={deliveryIcon} alt="Delivery" />
      </div>
      <div className="w85">
        <p className="item-info-delivery">
          Frakt: {item.freightPrice} kr by {item.freightCompany}
          <br />
          Retur: 14 dagar - köparen står för returfrakt
        </p>
      </div>
    </div>
  )
}

const ItemInfo = ({item, onAddToCart, cartItems}) => {
  let ifAuctionItem = false;
  if(item.traderaItemId) ifAuctionItem = true;
  let ifInCart = false;
  if(cartItems.filter((cartItem)=> cartItem===item).length>0){
    ifInCart = true;
  }
  return (
    <div className="five columns item-detail-info">
      <p className="item-brand-title">
        {item.metadata.brand}
      </p>
      <div className="flex-container flex-center">
        <div className="w70">
          <p className="item-info-type">
            {item.metadata.type}
          </p>
          {item.metadata.size &&
            <p className="item-info-size">Strl: &nbsp; {item.metadata.size}</p>
          }
        </div>
        <div className="w30">
          <p className="item-info-value">
            {item.currentValue} kr
          </p>
          {ifAuctionItem &&
            <p className="item-info-time">
              {item.nrOfTimesOnTradera} dag kvar
            </p>
          }
        </div>
      </div>
      <ItemInfoBasic item={item}/>
      <p className="item-info-status">
        <ItemStatus item={item}/>
      </p>
      <ItemDelivery item={item}/>
      <div className="flex-container mgt20 item-actions">
        {ifAuctionItem && <TraderaButton />}
        {!ifAuctionItem &&
          <AddToCartButton
            onAddToCart={onAddToCart}
            ifInCart={ifInCart}
          />
        }
        <div className="mgl15 item-like">
          <LikeButton hintText={!isMobileOnly} />
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
