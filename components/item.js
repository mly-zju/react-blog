import React from 'react'
import {Link} from 'react-router'

class Item_component extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var style={
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray'
    }
    const {title, publishTime, excerpt, id}=this.props;
    return (
      <li data-index={id} style={style}>
        <h3><Link to={"/read/"+id}>{title}</Link></h3>
        <h4>{publishTime}</h4>
        <p>{excerpt}...</p>
      </li>
    )
  }
}

export default Item_component
