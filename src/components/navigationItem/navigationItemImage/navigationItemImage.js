import React from "react";

const NavigationItemImage = ( props ) => {
    return (
        <img src = { props.imageURL } alt = { props.text } />
    );
}

export default NavigationItemImage;
