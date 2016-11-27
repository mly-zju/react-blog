import {connect} from 'react-redux'
import React from 'react'
import {hashHistory} from 'react-router'
import Manage_component from '../components/managelist.js'
import {delete_action} from '../actions'

const mapStateToProps=(state, ownProps)=>({
  list: state.list
});

const mapDispatchToProps=(dispatch, ownProps)=>({
  handleClick:function(e){
    var dom=e.target;
    if(dom.nodeName.toLowerCase()=='button'){
      if(dom.dataset.type=='delete'){
        let index=dom.dataset.index;
        dispatch(delete_action(index));
      }else{
        let index=dom.dataset.index;
        hashHistory.push('/edit/'+index);
      }
    }
  },
  handleBack:function(){
    hashHistory.push('/');
  }
})

const Manage=connect(mapStateToProps,mapDispatchToProps)(Manage_component);

export default Manage
