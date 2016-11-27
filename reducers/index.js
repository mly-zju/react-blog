import {combineReducers} from 'redux'

function item_reducer(state=[],action){
  switch(action.type){
    case 'ADD':
      let len=state.length;
      return [
        ...state,
        {
          title: action.title,
          tags: action.tags,
          content: action.content,
          publishTime: action.publishTime,
          excerpt: action.excerpt,
          id: len
        }
      ];
    case 'DELETE':
      let index=action.id;
      len=state.length;
      var newState=[];
      for(var i=0;i<len;i++){
        if(i<index){
          newState.push(state[i]);
        }else if(i>index){
          let ele=Object.assign({},state[i],{id: state[i].id-1});
          newState.push(ele);
        }
      }
      return newState;
    case 'UPDATE':
      index=action.id;
      var newState=[];
      len=state.length;
      for(var i=0;i<len;i++){
        if(i==index){
          newState.push({
            title: action.title,
            tags: action.tags,
            content: action.content,
            publishTime: state[i].publishTime,
            excerpt: action.excerpt,
            id: action.id
          })
        }else{
          newState.push(state[i]);
        }
      }
      return newState;
    default:
      return state;
  }
}

function first_reducer(state=true,action){
  switch(action.type){
    case 'ADD':
      return false;
    case 'UPDATE':
      return false;
    default:
      return state;
  }
}

var combine_reducer=combineReducers({list: item_reducer, isNew: first_reducer});

export default combine_reducer
