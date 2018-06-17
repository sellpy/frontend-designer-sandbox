import React, {Component} from 'react';
import {shirt} from './resources/items';

import Header from './components/header/headerContainer';
import BreadCrumbs from './components/breadCrumbs/breadCrumbsContainer';
import ItemDetailedPage from './components/item/itemContainer';
import Footer from './components/footer/footerContainer';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <div className = "main">
                <BreadCrumbs />
                <ItemDetailedPage { ...shirt } />
            </div>
            <Footer />
        </div>
    )
  }
}

export default App;
