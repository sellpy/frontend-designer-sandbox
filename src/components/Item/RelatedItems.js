import React from 'react';
import ProductCardsList from '../Common/ProductCardsList';
import starIcon from '../../assets/images/icons/sellpy-star.svg';
import * as OtherItems from '../../resources/otherItems';

/* Props: item  */
const RelatedItems = ({item}) => {
  const relatedItems = findRelated(item.metadata.type);
  return(
    <div className="item-related">
      <div className="item-related-title">
        <img src={starIcon} alt="Star"/>
        <h2>
          Du kanske också gillar
        </h2>
        <hr className="section-hr"/>
        <ProductCardsList items={relatedItems}/>
      </div>
    </div>
  );
};

/*  Helper function to find items from resources/otherItems.js  */
const findRelated = (type) => {
  let relatedItems;
  switch(type) {
    case 'Skjorta':
      relatedItems = OtherItems.relatedShirts;
      break;
    case 'Boots':
      relatedItems = OtherItems.relatedShoes;
      break;
    case 'iPhone 6':
      relatedItems = OtherItems.relatedPhone;
      break;
    default:
      relatedItems = OtherItems.relatedShirts;
      break;
  };
  return relatedItems;
}

export default RelatedItems;
