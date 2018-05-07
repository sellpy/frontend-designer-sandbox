import React, {Component} from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ItemDetailPage from './components/Item/ItemDetailPage';
import AppIntro from './components/AppIntro';
import {shirt, shoes, iphone} from './resources/items';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cartItems: [],
      currentProduct: shoes,
      showIntro: true
    }
  }
  componentDidMount(){
    window.addEventListener("keypress", (e) => {
      const keyCode = e.code;
      this.switchProduct(keyCode);
    });
  }
  componentWillUnMount(){
    window.removeEventListener("keypress");
  }
  enterApp = () => {
    this.setState({showIntro: false});
  }
  switchProduct = (keyCode) => {
    if(keyCode === 'Digit1') this.setState({currentProduct: shirt});
    else if(keyCode === 'Digit2') this.setState({currentProduct: shoes});
    else if(keyCode === 'Digit3') this.setState({currentProduct: iphone});
  }
  handleCart = (added) => {
    if(added){
      this.setState({
        cartItems: [
          ...this.state.cartItems.filter((item) => item!==this.state.currentProduct),
          this.state.currentProduct
        ]
      });

    } else {
      this.setState ({
        cartItems: this.state.cartItems.filter((item) => item!==this.state.currentProduct)
      });
    }
  }
  render() {
    if(this.state.showIntro) {
      return <AppIntro onEnterApp={this.enterApp}/>
    } else {
      return (
        <div className="app-wrapper">
          <Header cartItems={this.state.cartItems}/>
          <ItemDetailPage
            item={this.state.currentProduct}
            onAddToCart={this.handleCart}
            cartItems={this.state.cartItems}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
