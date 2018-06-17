import React from "react";

import NavigationItem from './navigationItem';

const navigationItemContainer = ( props ) => {
    return(
        <NavigationItem { ...props } />
    );
}

export default navigationItemContainer;
