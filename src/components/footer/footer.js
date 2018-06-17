import React from 'react';

import FooterCategory from './footerCategory/footerCategoryContainer';

export default class Footer extends React.Component{
    render() {
        const footerCategories = this.props.categories.map( ( category, index ) => {
                return <FooterCategory { ...category } key = { index } />;
            }
        )

        return (
            <footer>
                <div className = 'footerContainer'>
                    { footerCategories }
                </div>
            </footer>
        );
    }
}
