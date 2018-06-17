import React from 'react';

import Button from './button';

export default class ButtonContainer extends React.Component{
    render() {
        return (
            <Button { ...this.props } />
        );
    }
}
