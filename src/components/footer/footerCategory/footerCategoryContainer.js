import React from 'react';

import FooterCategory from './footerCategory';

export default class FooterContainer extends React.Component{
    render() {
        return (
            <FooterCategory { ...this.props } />
        );
    }
}
