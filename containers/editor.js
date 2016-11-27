import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {add_action,update_action} from '../actions'
import Editor_component from '../components/editor.js'

const mapStateToProps=(state, ownProps)=>{
  var path=hashHistory.getCurrentLocation().pathname;
  if(path=='/create'){
    return {
      isNew: true
    }
  }else{
    var id=parseInt(hashHistory.getCurrentLocation().pathname.split('/')[2],10);
    return {
      item: state.list[id],
      isNew: false
    }
  }
}

const mapDispatchToProps=(dispatch,ownProps)=>({
  handleSubmit: function(){
    var title=this.refs.myInput.value;
    var tags=[];
    tags.push(this.refs.myTag.value);
    var content=this.refs.textarea.value;
    var publishTime=new Date().toLocaleString();
    var excerpt=content.substring(0,5);
    if(hashHistory.getCurrentLocation().pathname=='/create'){
      dispatch(add_action(title, tags, content, publishTime, excerpt));
    }else{
      var id=parseInt(hashHistory.getCurrentLocation().pathname.split('/')[2],10);
      dispatch(update_action(title, tags, content, excerpt, id))
    }

    hashHistory.push('/');
  },
  handleCancel: function(){
    hashHistory.push('/');
  }
})

const Editor=connect(mapStateToProps,mapDispatchToProps)(Editor_component)

export default Editor
