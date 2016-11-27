import {connect} from 'react-redux'
import React from 'react'
import Itemlist_component from '../components/itemlist.js'

const mapStateToProps = (state)=>({
  list: state.list
});

const Itemlist=connect(mapStateToProps)(Itemlist_component);

export default Itemlist
