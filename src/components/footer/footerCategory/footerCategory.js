import React from "react";

import NavigationItem from '../../navigationItem/navigationItemContainer';

const FooterCategory = ( props ) => {
    const footerCategoryItems = props.categoryItems.map( ( item, index ) => {
        return <NavigationItem { ...item } key = { index }  />;
    } );

    return (
        <div className = { props.classes }>
            <h3>{props.categoryName}</h3>
            {footerCategoryItems}
        </div>
    );
}

export default FooterCategory;
