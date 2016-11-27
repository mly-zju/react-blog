import React from 'react'
import Item_component from './item.js'

class Itemlist_component extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {list}=this.props;
    var style={
      listStyleType: 'none'
    }
    return (
      <ul style={style}>
        {list.map((item,index)=>(
          <Item_component title={item.title} publishTime={item.publishTime} excerpt={item.excerpt} id={item.id} key={index} />
        ))}
      </ul>
    )
  }
}

export default Itemlist_component
