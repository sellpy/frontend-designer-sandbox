import React from "react";

const BreadCrumb = ( props ) => {
    return (
        <div className = 'bread-crumb'>
            <a href = ''>{ props.text }</a>
        </div>
    );
}

export default BreadCrumb;
