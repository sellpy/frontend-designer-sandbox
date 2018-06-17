import React from 'react';

import HeaderItem from '../navigationItem/navigationItemContainer';
import Hamburger from './hamburger';

import cart from '../../assets/cart.png';
import profile from '../../assets/profile.png';
import logo from '../../assets/logo.png';

export default class Header extends React.Component{
    render() {
        return (
            <nav>
                <HeaderItem
                    href = ''
                    classes = 'header-icon'
                    imageURL = { logo }
                />
                <Hamburger />
                <div className = 'nav-wrapper'>
                    <div className = 'left'>
                        <HeaderItem href = '' text = 'sälj'/>,
                        <HeaderItem
                            href = ''
                            classes = 'active'
                            text = 'handla'
                        />
                    </div>
                    <div className = 'right'>
                        <HeaderItem
                            href = ''
                            classes = 'cart'
                            imageURL = { cart }
                            text = 'korg'
                        />
                        <HeaderItem
                            href = ''
                            classes = 'login'
                            imageURL = { profile }
                            text = 'logga in'
                        />
                    </div>
                </div>
            </nav>
        );
    }
}
