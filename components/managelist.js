import React from 'react'

class Manage_component extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {list, handleClick, handleBack}=this.props;
    var style={
      listStyleType: 'none'
    }
    return(
      <div>
        <ul style={style} onClick={handleClick}>
          {list.map((item,index)=>(
            <li key={index}>
              <p>{item.title}</p>
              <button data-index={index} data-type="edit">编辑</button>
              <button data-index={index} data-type="delete">删除</button>
            </li>
          ))}
        </ul>
        <button onClick={handleBack}>返回</button>
      </div>
    )
  }
}

export default Manage_component
