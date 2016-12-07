import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import combine_reducer from './reducers'
import Itemlist from './containers/itemlist.js'
import Editor from './containers/editor.js'
import Manage from './containers/managelist.js'
import Read from './containers/read.js'
import App from './containers'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {add_action} from './actions'

const store=createStore(combine_reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Itemlist} onEnter={()=>{
          var flag=store.getState().isNew;
          if(flag){
            store.dispatch(add_action('hello',['hello'],
            'hhhhhhhhhhhhhh',new Date().toLocaleString(), 'hhh'))
          }
        }}/>
        <Route path="/manage" component={Manage}/>
        <Route path="/read/:id" component={Read}/>
      </Route>
      <Route path="/create" component={Editor}/>
      <Route path="/edit/:id" component={Editor}/>
    </Router>
  </Provider>, document.getElementById('app')
)
