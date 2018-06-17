import React from "react";

import BreadCrumb from './breadCrumb/breadCrumbsContainer';

const BreadCrumbs = ( props ) => {
    return (
        <div className = 'bread-crumbs'>
            <BreadCrumb { ...props } />
        </div>
    );
}

export default BreadCrumbs;
