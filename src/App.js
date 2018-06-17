import React, {Component} from 'react';

import {shirt} from './resources/items';

import Header from './components/header/headerContainer';
import BreadCrumbs from './components/breadCrumbs/breadCrumbsContainer';
import ItemDetailedPage from './components/item/itemContainer';
import Footer from './components/footer/footerContainer';

class App extends Component {
    constructor(){
        super();
        this.state = {
            currentProduct: shirt
        }
    }

    switchProduct( product ) {
        this.setState( { currentProduct: product } );
    }

    render() {
        return (
            <div>
                <Header />
                <div className = "main">
                    <BreadCrumbs />
                    <ItemDetailedPage { ...this.state.currentProduct } />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
