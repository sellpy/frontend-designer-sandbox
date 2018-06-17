import React from "react";

import NavigationItemImage from './navigationItemImage';

const navigationItemImageContainer = ( props ) => {
    if ( typeof props.imageURL !== 'undefined'  && props.imageURL !== '') {
        return(
            <NavigationItemImage imageURL = { props.imageURL } />
        );
    } else {
        return ( null );
    }
}

export default navigationItemImageContainer;
