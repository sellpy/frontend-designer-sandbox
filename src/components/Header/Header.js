import React from 'react';
import ReactHoverObserver from 'react-hover-observer';
import { isMobile } from 'react-device-detect';
import Swipeable from 'react-swipeable';
import HeaderLink from './HeaderLink';
import CartDropDown from './CartDropDown';
import './header.css';

import sLogo from '../../assets/images/icons/sLogo.svg';
import buy from '../../assets/images/icons/buy.svg';
import sell from '../../assets/images/icons/sell.svg';
import user from '../../assets/images/icons/user.svg';
import cart from '../../assets/images/icons/cart.svg';
import order from '../../assets/images/icons/order.svg';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCartDropDown: false,
      showCartBadge: false,
      cartItems: null
    }
  }
  componentDidMount () {
    this.setState({cartItems: this.props.cartItems});
  }
  displayCartDropDown = (ifDisplay) => {
    if(ifDisplay) {this.setState({ showCartDropDown: true});}
    else {
      if(isMobile){
        this.setState({ showCartDropDown: false});
      } else {
        setTimeout(()=>{
          this.setState({ showCartDropDown: false});
        },1000);
      }
    }
  }
  componentWillReceiveProps (nextProps) {
    if(this.state.cartItems==="null"){
      this.setState({cartItems: nextProps.cartItems})
    }
    else {
      if(nextProps.cartItems.length>this.state.cartItems.length) {
        this.setState({
          showCartDropDown: true,
          showCartBadge: true,
          cartItems: nextProps.cartItems
        });
        setTimeout(()=>{
          this.setState({ showCartDropDown: false });
        }, 2200);
      } else {
        if (nextProps.cartItems.length===0){
          this.setState({ showCartBadge: false });
        }
      }
      this.setState({cartItems: nextProps.cartItems});
    }
  }
  render() {
    return (
      <header>
        <nav className="navbar">
          <a className="navbar-brand">
            <img className="navbar-logo" src={sLogo} alt="Sellpy"/>
          </a>
          <div className="navbar-left">
            <HeaderLink>SÄLJ MED SELLPY</HeaderLink>
            <HeaderLink>HANDLA HOS SELLPY</HeaderLink>
          </div>
          <div className="navbar-right">
            <a className="navbar-sell">
              <img src={sell} alt="Sell"/>
            </a>
            <a className="navbar-buy">
              <img src={buy} alt="Buy"/>
            </a>
            <a className="navbar-user">
              <img src={user} alt="User"/>
            </a>
            <a className="navbar-cart">
              {isMobile?
                <Swipeable
                  onTap={()=>this.displayCartDropDown(!this.state.showCartDropDown)}
                >
                  <img src={cart} alt="Cart"/>
                </Swipeable>
                : <img src={cart} alt="Cart"
                    onMouseEnter={()=>this.displayCartDropDown(true)}
                    onMouseLeave={()=>this.displayCartDropDown(false)}
                  />
              }
              {
                this.state.showCartBadge &&
                  <div className="navbar-cart-badge">
                    {this.props.cartItems.length}
                  </div>
              }
              <ReactHoverObserver>
                {({isHovering}) =>
                  <CartDropDown
                    cartItems={this.props.cartItems}
                    display={this.state.showCartDropDown || isHovering}
                  />
                }
              </ReactHoverObserver>
            </a>
            <a className="navbar-order">
              <img src={order} alt="Order"/>
            </a>
          </div>
        </nav>
      </header>
    )
  }
}
