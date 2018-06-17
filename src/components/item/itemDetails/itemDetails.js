import React from "react";

import ItemTitle from './itemTitle';
import Button from '../../button/buttonContainer';

const ItemDetails = ( props ) => {
    return (
        <div className = 'item-details'>
            <ItemTitle { ...props.metadata } />
            <Button buttonText = 'lägg i varukorg' className='button button-primary' />
            <br />
            <Button buttonText = 'spara som favorit' className='button button-secondary' />
            <div className = 'item-data'>
                <p>{ 'Märke: ' + props.metadata.brand }</p>
                <p>{ 'Typ: ' + props.metadata.type }</p>
                <p>{ 'Strl: ' + props.metadata.size }</p>
                <p>{ 'Färg: ' + props.metadata.color }</p>
                <p>{ 'Artikelnummer: ' + props.objectId }</p>
            </div>
        </div>
    );
}

export default ItemDetails;
