import React from 'react';

import ItemDetails from './itemDetails';

export default class ItemDetailsContainer extends React.Component{
    render() {
        return (
            <ItemDetails { ...this.props } />
        );
    }
}
