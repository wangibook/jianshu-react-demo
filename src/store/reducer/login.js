import * as type from '../actionTypes';

const defaultState = {
  loginStatus: false
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case type.CHANGE_LOGIN:
      return {
        ...state,
        loginStatus: action.value
      }
    case type.CHANGE_LOGOUT:
      return {
        ...state,
        loginStatus: action.value
      }
    default:
      return state
  }
}
