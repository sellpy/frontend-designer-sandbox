/*
 *  A responsive horizontal list container for product cards
 *
 *  It automatically calculate the total pages
 *  according to the total number of items, and
 *  automatically adjust when resizing the window
 *
 *  Props: items
 *  Four items per page slider for wide screen
 *  Horizontal scrollable for mobile
 */

import React from 'react';
import ProductCard from './ProductCard';
import colors from './Colors';

const LeftButton = ({clickEvent, disabled}) => (
  <div
    className="horizontal-list-arrow-left"
    onClick={clickEvent}
    style={disabled ? { color: colors.disabledGrey} : {} }
  >
    <i className="icon ion-ios-arrow-left"></i>
  </div>
);
const RightButton = ({clickEvent, disabled}) => (
  <div
    className="horizontal-list-arrow-right"
    onClick={clickEvent}
    style={disabled ? { color: colors.disabledGrey} : {} }
  >
    <i className="icon ion-ios-arrow-right"></i>
  </div>
);

class ProductCardsList extends React.Component {
  constructor(props){
    super(props);
    this.listRef = React.createRef();
    this.state = {
      totalPage: 0,
      currentPage: 0,
      width: 0,
      items: []
    }
  }
  componentDidMount() {
    let totalPage = Math.ceil(this.props.items.length/4);
    this.setState({
      totalPage: totalPage,
      items: this.props.items
    });
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }
  componentWillReceiveProps(nextProps) {
    if(this.state.items && nextProps.items !== this.state.items){
      let totalPage = Math.floor(nextProps.items.length/4);
      if (totalPage === 0 ) totalPage = 1;
      this.setState({
        totalPage: totalPage,
        currentPage: 0,
        items: nextProps.items
      });
      this.updateWidth();
    }
  }
  slideLeft = (e) => {
    e.preventDefault();
    if(this.state.currentPage > 0) {
      this.setState({currentPage : this.state.currentPage-1});
    }
  }
  slideRight = (e) => {
    e.preventDefault();
    if(this.state.currentPage < this.state.totalPage-1) {
      this.setState({currentPage : this.state.currentPage+1});
    }
  }
  /* Get the width of the current card list */
  updateWidth = () => {
    const width = this.listRef.current.clientWidth;
    this.setState({ width: width });
  }
  render() {
    const leftPosition = -this.state.currentPage * this.state.width;
    const listWidth = this.state.totalPage*100+'%';
    const cardWidthInPercent = 100.0/4/this.state.totalPage;
    const listStyle = {
      left: leftPosition,
      width: listWidth
    };
    const leftDisabled = this.state.currentPage === 0 ;
    const rightDisabled = this.state.currentPage === this.state.totalPage - 1;

    return(
      <div className="container horizontal-list">
        <div className="horizontal-list-viewbox" ref={this.listRef}>
          <div className="horizontal-list-items" style={listStyle}>
            {this.props.items.map((item, key) =>
                <ProductCard
                  item={item}
                  percentWidth={cardWidthInPercent}
                  key={key}
                />
            )}
          </div>
        </div>
        <LeftButton
          clickEvent={this.slideLeft}
          disabled={leftDisabled}
        />
        <RightButton
          clickEvent={this.slideRight}
          disabled={rightDisabled}
        />
      </div>
    );
  }
}

export default ProductCardsList;
