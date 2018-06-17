import React from 'react';

import Item from './item';

export default class ItemContainer extends React.Component{
    render() {
        return (
            <div className = 'item-page'>
                <Item { ...this.props } alt = 'Product' />
            </div>
        );
    }
}
