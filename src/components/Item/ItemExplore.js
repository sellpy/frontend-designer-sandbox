import React from 'react';
import ReactHoverObserver from 'react-hover-observer';
import ProductCardsList from '../Common/ProductCardsList';

import colors from '../Common/Colors';
import * as OtherItems from '../../resources/otherItems'

const CheckItOutLink = ({text, link, isHovering}) => {
  const decorationStyle = {
    left: isHovering? '8px': 0
  }
  return(
    <p className="check-it-out-link">
      <span
        className="check-it-out-decoration"
        style={decorationStyle}
        role="img"
        aria-label="PointRight"
      >
        &#x1F449;
      </span>
      <span className="check-it-out-text">
        {text}&nbsp;
        <a>{link.display}</a>
      </span>
    </p>
  );
}

/* Explore option for same brand: popular and on sales */
class ItemExplore extends React.Component {
  constructor() {
    super();
    this.state = {
      exploreOption: 'popular',
      sameBrandItems: []
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      sameBrandItems: findSameBrand(nextProps.item.metadata.type, 'popular')
    });
  }
  componentDidMount(){
    this.findItems('popular');
  }
  setOption = (option) => {
    this.setState({exploreOption: option});
    this.findItems(option);
  }
  findItems = (option) => {
    const item = this.props.item;
    this.setState({
      sameBrandItems: findSameBrand(item.metadata.type, option)
    });
  }
  render() {
    const item = this.props.item;
    const sameBrandLink = {
      display: item.metadata.brand,
      target: ''
    };
    const sameTypeLink = {
      display: item.metadata.type,
      target: ''
    };
    const sameSellerLink = {
      display: 'samma säljare',
      target: ''
    };
    return(
      <div className="item-explore">
        <h2 className="item-explore-title">
          Mer av {item.metadata.brand}
        </h2>
        <div className="item-explore-option">
          <button
            onClick={()=>this.setOption('popular')}
            style={(this.state.exploreOption==='popular')? {color:colors.sellpyBlueGrey}:{}}
          >
            Populär
          </button> /
          <button
            onClick={()=>this.setOption('onSale')}
            style={(this.state.exploreOption==='onSale')? {color:colors.sellpyBlueGrey}:{}}
          >
            On Sale
          </button>
        </div>
        <div className="item-explore-items">
          <ProductCardsList items={this.state.sameBrandItems} />
        </div>
        <div className="item-explore-more">
          <h2>Vill Upptäcka mer?</h2>
          <div className="item-explore-links">
            <ReactHoverObserver>
              {({isHovering}) => (
                <CheckItOutLink text={'Sök allt av märke'} link={sameBrandLink} isHovering={isHovering}/>
              )}
            </ReactHoverObserver>
            <ReactHoverObserver>
              {({isHovering}) => (
                <CheckItOutLink text={'Sök allt typ'} link={sameTypeLink} isHovering={isHovering}/>
              )}
            </ReactHoverObserver>
            <ReactHoverObserver>
              {({isHovering}) => (
                <CheckItOutLink text={'Från'} link={sameSellerLink} isHovering={isHovering}/>
              )}
            </ReactHoverObserver>
          </div>
        </div>
      </div>
    );
  }
}

/*  Helper function to find items from resources/otherItems.js  */
const findSameBrand = (type, option) => {
  let sameBrandItems;
  switch(type) {
    case 'Skjorta':
      if (option==='popular')
        sameBrandItems = OtherItems.sameBrandShirtsPopular;
      else
        sameBrandItems = OtherItems.sameBrandShirtsDiscount;
      break;
    case 'Boots':
      if (option==='popular')
        sameBrandItems = OtherItems.sameBrandShoesPopular;
      else
        sameBrandItems = OtherItems.sameBrandShoesDiscount;
      break;
    case 'iPhone 6':
      if (option==='popular')
        sameBrandItems = OtherItems.sameBrandPhonePopular;
      else
        sameBrandItems = OtherItems.sameBrandPhoneDiscount;
      break;
    default:
      if (option==='popular')
        sameBrandItems = OtherItems.sameBrandShirtsPopular;
      else
        sameBrandItems = OtherItems.sameBrandShirtsDiscount;
      break;
  };
  return sameBrandItems;
};

export default ItemExplore;
