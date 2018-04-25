import React, {Component} from 'react'
import {shirt} from './resources/items'

const columnStyle = {
  flexBasis: '40%',
  minWidth: '300px'
}

const ImageContainer = ({images}) => {
  const imageStyle = {
    width: '100%'
  }
  return <div
      style={columnStyle}
    >
      <img 
      src={images[0]}
      alt='Product'
      style={imageStyle}
    />
  </div>
}

const ItemInfo = ({item}) => {
  const style = {
    ...columnStyle,
    display: 'flex',
    flexDirection: 'column'
  }
  return <div
    style={style}
  >
    <p>{item.metadata.brand}</p>
    <p>{item.metadata.type}</p>
    <p>{item.currentValue}</p>
  </div>
}

const ItemDetailPage = ({item}) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
  return <div style={style}>
    <ImageContainer
      images={item.images}
    />
    <ItemInfo
      item={item}
    />
  </div>
}

class App extends Component {
  render() {
    return <ItemDetailPage
      item={shirt}
    />
  }
}

export default App;
