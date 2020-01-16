import * as type from '../actionTypes';

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case type.SEARCH_FOCUS:
      return { 
        focused: true 
      }
    case type.SEARCH_BLUR:
      return { 
        focused: false
      }
    case type.MOUSE_ENTER:
      return { 
        mouseIn: true 
      }
    case type.MOUSE_LEAVE:
      return { 
        mouseIn: false 
      }
    case type.HOT_LIST:
      const newState = JSON.parse(JSON.stringify(state))
      newState.list = action.data
      newState.totalPage = action.totalPage
      return newState
    default:
      return state
  }
}
