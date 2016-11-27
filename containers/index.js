import React from 'react'
import {Link} from 'react-router'
import Editor from './editor.js'
import Itemlist from './itemlist.js'

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>Blog</h1>
        <Link to="/create">写文章 </Link>
        <Link to="/manage">管理文章</Link>
        {this.props.children}
      </div>
    )
  }
}

export default App
