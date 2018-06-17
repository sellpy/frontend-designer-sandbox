import React from "react";

import ItemDetails from './itemDetails/itemDetailsContainer';
import ItemImageCarousel from './itemImageCarousel';

const Item = ( props ) => {
    return (
        <div className = 'item'>
            <ItemImageCarousel { ...props } />
            <ItemDetails { ...props } />
        </div>
    );
}

export default Item;
