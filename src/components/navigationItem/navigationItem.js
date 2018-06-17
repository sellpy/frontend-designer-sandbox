import React from "react";

import NavigationItemText from './navigationItemText/navigationItemTextContainer';
import NavigationItemImage from './navigationItemImage/navigationItemImageContainer';

const NavigationItem = ( props ) => {
    return (
        <a href = { props.href } className= { props.classes }>
            <NavigationItemImage imageURL = { props.imageURL } />
            <NavigationItemText text = { props.text } />
        </a>
    );
}

export default NavigationItem;
