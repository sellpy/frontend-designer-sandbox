import React from "react";

const ItemTitle = ( props ) => {
    return (
        <div className = 'item-title'>
            <h1>{ props.brand }</h1>
            <div className = 'item-info'>
                <p>{ props.type }</p>
                <p>{ 'Srtl: ' + props.size }</p>
            </div>
        </div>
    );
}

export default ItemTitle;
