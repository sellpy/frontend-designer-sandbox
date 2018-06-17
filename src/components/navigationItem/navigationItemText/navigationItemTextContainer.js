import React from "react";

import NavigationItemText from './navigationItemText';

const navigationItemTextContainer = ( props ) => {
    if ( typeof props.text !== 'undefined' && props.text !== '' ) {
        return(
            <NavigationItemText text = { props.text } />
        );
    } else {
        return ( null );
    }
}

export default navigationItemTextContainer;
