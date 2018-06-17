import React from 'react';

import BreadCrumbs from './breadCrumbs';

export default class BreadCrumbsContainer extends React.Component{
    render() {
        const breadCrumbs = [ 'Hem', 'Kläder', 'Herrkläder', 'Skjortor' ];

        return (
            <BreadCrumbs breadCrumbs = { breadCrumbs } />
        );
    }
}
