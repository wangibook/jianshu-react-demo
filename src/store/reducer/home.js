import * as type from '../actionTypes';

const defaultState = {
  topicList: [],
  artList: [],
  artMoreList: [],
  artPage: 1
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case type.CHANGE_HOME_DATA:
      return {
        ...state,
        topicList:action.topicList,
        artList:action.artList
      }
    case type.ADD_ARTICLE_LIST:
      return Object.assign({},state,{
        artList: state.artList.concat(action.artMoreList),
        artPage: action.nextPage
      })
    default:
      return state
  }
}
