import React from 'react'
import remarkable from 'remarkable'

class Editor_component extends React.Component {
  constructor(props){
    super(props);
    this.md=new remarkable();
    this.state={value:'',title:''};

    this.handleChange=this.handleChange.bind(this);
    //this.getRawMarkup=this.getRawMarkup.bind(this);
    this.handleTitleChange=this.handleTitleChange.bind(this);
  }
  handleTitleChange(e){
    this.setState({title: this.refs.myInput.value});
  }
  handleChange(e){
    this.setState({value: this.refs.textarea.value});
  }
  getRawMarkup(){
    return {__html: this.md.render(this.state.value)}
  }
  render(){
    if(this.props.isNew){
      var {isNew, handleSubmit, handleCancel}=this.props;
    }else{
      var {item, isNew, handleSubmit, handleCancel}=this.props;
    }
    var mySubmit=handleSubmit.bind(this);
    return (
      <div>
        <h3>题目</h3>
        <input ref="myInput"
        defaultValue={isNew?'':item.title}/>
        <h3>正文</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={isNew?'':item.content} />
        <h3>预览</h3>
        <div dangerouslySetInnerHTML={this.getRawMarkup()}></div>
        <h3>标签</h3>
        <input ref="myTag" defaultValue={isNew?'':item.tags[0]}/><br/><br/>
        <button onClick={mySubmit}>提交</button>
        <button onClick={handleCancel}>取消</button>
      </div>
    )

  }
}

export default Editor_component
