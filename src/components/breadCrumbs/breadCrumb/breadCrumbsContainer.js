import React from 'react';

import BreadCrumb from './breadCrumb';

export default class BreadCrumbContainer extends React.Component{
    render() {

        const breadCrumbsData = this.props.breadCrumbs;

        const breadCrumbs = breadCrumbsData.map( ( crumb, index ) => {
            const lastChild = index === breadCrumbsData.length - 1;

            if ( lastChild ) {
                return (
                    <div key = { index } className = 'bread-crumb'>
                        <BreadCrumb  text = { crumb } />
                    </div>
                );
            } else {
                return (
                    <div key = { index } className = 'bread-crumb'>
                        <BreadCrumb text = { crumb } />
                        <p>></p>
                    </div>
                );
            }
        } );

        return (
            <div>
                { breadCrumbs }
            </div>
        );
    }
}
