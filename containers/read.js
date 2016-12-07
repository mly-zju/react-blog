import {connect} from 'react-redux'
import React from 'react'
import {hashHistory} from 'react-router'

class Read_component extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const item=this.props.item;
    return (
      <div>
        <h3>{item.title}</h3>
        <h4>{item.publishTime}</h4>
        <h4>标签：<span>{item.tags}</span></h4>
        <div>
          {item.content}
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state, ownProps)=>({
  item: state.list[parseInt(hashHistory.getCurrentLocation().pathname.split('/')[2],10)],
});

const Read=connect(mapStateToProps)(Read_component);

export default Read
