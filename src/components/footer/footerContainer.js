import React from 'react';
import * as footerData from '../../resources/footer';

import Footer from './footer';

export default class FooterContainer extends React.Component{
    render() {
        return (
            <Footer { ...footerData } />
        );
    }
}
