
import { combineReducers } from 'redux';
import header from './reducer/header';
import * as type from './actionTypes';

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
  topicList: [],
  artList: [],
  artMoreList: [],
  artPage: 1,
  loginStatus: false
}

// export default (state = defaultState,action) => {
//   switch(action.type) {
//     case type.SEARCH_FOCUS:
//       return { 
//         focused: true 
//       }
//     case type.SEARCH_BLUR:
//       return { 
//         focused: false
//       }
//     case type.MOUSE_ENTER:
//       return { 
//         mouseIn: true 
//       }
//     case type.MOUSE_LEAVE:
//       return { 
//         mouseIn: false 
//       }
//     case type.HOT_LIST:
//       const newState = JSON.parse(JSON.stringify(state))
//       newState.list = action.data
//       newState.totalPage = action.totalPage
//       return newState
//     case type.CHANGE_HOME_DATA:
//       const newOne = Object.assign({},state)
//       newOne.topicList = action.topicList
//       newOne.artList = action.artList
//       return newOne
//     case type.ADD_ARTICLE_LIST:
//       return Object.assign({},state,{
//         artList: state.artList.concat(action.artMoreList),
//         artPage: action.nextPage
//       })
//     case type.CHANGE_LOGIN:
//       const newOne1 = Object.assign({},state)
//       newOne1.loginStatus = action.value
//       return newOne1
//     default:
//       return state
//   }
// }


// 组合成一个 rootReducer
const rootReducer = combineReducers({
  header,
  home,
  detail,
  login
})

export default rootReducer;