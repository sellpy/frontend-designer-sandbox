import React from 'react';
import { isMobileOnly } from 'react-device-detect';
import OnImagesLoaded from 'react-on-images-loaded';

import Loader from '../Common/Loader';
import ImageContainer from './ImageContainer';
import ImageContainerMobile from './ImageContainerMobile';
import ItemInfo from './ItemInfo';
import RelatedItems from './RelatedItems';
import ItemExplore from './ItemExplore';
import ExtraPackage from './ExtraPackage';

import './itemDetailPage.css';
import { categories } from '../../resources/TraderaCategories';


class ItemDetailPage extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true,
      loadingImages: true
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 4500);
  }
  getCategory = (id) => {
    const fullCategoryList = categories[id].split(' > ');
    let result = 'Hem';
    fullCategoryList.slice(0, 3).forEach(category => {
      result += ' > ' + category
    });
    return result;
  }
  render() {
    const item = this.props.item;
    const category = this.getCategory(item.traderaCategoryId);
    const hiddenStyle = {height: 0, overflow: 'hidden'};
    const loading = this.state.loading || this.state.loadingImages;
    return(
      <OnImagesLoaded
        onLoaded={() => this.setState({loadingImages: false})}
        onTimeout={() => this.setState({loadingImages: false})}
        timeout={8000}
      >
      {loading ? <Loader style={loading? {}: hiddenStyle}/> :
        <div className="item-detail-page" style={loading? hiddenStyle : {}}>
          {!isMobileOnly && <p className="item-detail-category">{category}</p> }
          <div className="container clearfix item-detail-top">
            {isMobileOnly?
              <ImageContainerMobile images={item.images} />
              : <ImageContainer images={item.images} />
            }
            <ItemInfo
              item={item}
              onAddToCart={this.props.onAddToCart}
              cartItems={this.props.cartItems}
            />
          </div>
          <RelatedItems item={item} />
          <ItemExplore item={item} />
          <ExtraPackage />
        </div>
      }
      </OnImagesLoaded>
    );
  }
}
export default ItemDetailPage;
