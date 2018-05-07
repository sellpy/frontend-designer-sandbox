import React from 'react';
import Button from '../Common/Button';

const CartDropDown = ({display, cartItems}) => {
    let deliveryFee = 0;
    let totalProductFee = 0;
    cartItems.forEach((item) => {
      deliveryFee += item.freightPrice;
      totalProductFee += item.currentValue;
    });
    const hiddenStyle = {
      height: 0,
      overflow: 'hidden'
    };
    return(
      <div
        className="cart-drop-down"
        style={(display && cartItems.length>0)? {}:hiddenStyle}
      >
        <div>
          <ul className="cart-drop-down-list">
            {cartItems.map((item, key) => (
              <li key={key}>
                <img src={item.images[0]} alt="Product in Cart"/>
                <div className="cart-dropdown-list-info">
                  <p>{item.metadata.brand}</p>
                  <p>{item.metadata.type}</p>
                </div>
                <div className="cart-dropdown-list-price">
                  <p>{item.currentValue}<br/><small>Kr</small></p>
                </div>
              </li>
            ))}
            <hr/>
            <li className="cart-dropdown-delivery">
              <div className="cart-dropdown-list-info">
                <p>FreightPrice</p>
              </div>
              <div className="cart-dropdown-list-price">
                <p>{deliveryFee}<br/><small>Kr</small></p>
              </div>
            </li>
            <li className="cart-dropdown-total">
              <div className="cart-dropdown-list-info">
                <p>Total</p>
              </div>
              <div className="cart-dropdown-list-price">
                <p>{deliveryFee+totalProductFee}<br/><small>Kr</small></p>
              </div>
            </li>
            <hr/>
          </ul>
          <Button blue className="cart-dropdown-checkout">
            GÅ TILL VARUKORG
          </Button>
        </div>
      </div>
    );
}

export default CartDropDown;
