
import { combineReducers } from 'redux';
import header from './header';
import home from './home';
import login from './login';


// 组合成一个 rootReducer
const rootReducer = combineReducers({
  header,
  home,
  login
})

export default rootReducer;