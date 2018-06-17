import React from 'react';

export default class Hamburger extends React.Component{

    toggleMenu( e ) {
        let navdrawer;
        let hambuger;
        const target = e.target;

        if ( target.parentElement.className.includes( 'nav-wrapper') ) {
            navdrawer = target.parentElement;

            target.parentElement.parentElement.childNodes.forEach( ( e ) => {
                if ( e.className.includes( 'burger-wrapper' ) ) {
                    hambuger = e;
                }
            } );
        } else {
            target.parentElement.childNodes.forEach( ( e ) => {
                if ( e.className.includes( 'nav-wrapper' ) ) {
                    navdrawer = e;
                }
                else if ( e.className.includes( 'burger-wrapper' ) ) {
                    hambuger = e;
                }
            } );
        }

        navdrawer.classList.toggle('open');

        hambuger.classList.toggle( 'french-fry' );
    }

    render() {
        return (
            <div className="burger-wrapper" onClick={ this.toggleMenu.bind( this ) }>
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
            </div>
        );
    }
}
