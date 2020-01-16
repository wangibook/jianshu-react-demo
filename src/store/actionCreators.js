import * as type from './actionTypes';
import {getHomeInfoData} from '../api/home';
import {getHotListData} from '../api/header';
import axios from 'axios';

const hotListAction = (data) => ({
  type: type.HOT_LIST,
  data,
	totalPage: Math.ceil(data.length / 10)
})

const homeDataAction = (data) => ({
  type: type.CHANGE_HOME_DATA,
  topicList: data.topicList,
  artList: data.articleList
})

const artMoreListAction = (data,nextPage) => ({
  type: type.ADD_ARTICLE_LIST,
  artMoreList: data.moreList,
  nextPage
})

const changeLogin = () => ({
  type: type.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
	type: type.CHANGE_LOGOUT,
	value: false
})

export const searchFocus = () => ({
  type: type.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: type.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: type.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: type.MOUSE_LEAVE
})

export const changePage = (page) => ({
	type: type.CHANGE_PAGE,
	page
})

export const getHotList = () => {
  return (dispatch) => {
    getHotListData().then(res => {
      const data = res.data.data
      const action = hotListAction(data)
      dispatch(action)
    })
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    getHomeInfoData().then(res => {
      const data = res.data.data
      const action = homeDataAction(data)
      dispatch(action)
    })
  }
}

export const getMoreList = (artPage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + artPage).then(res => {
      const data = res.data.data
      const action = artMoreListAction(data, artPage+1)
      dispatch(action)
    })
  }
}

export const login = (account,password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
      const result = res.data.data
			if (result) {
				dispatch(changeLogin())
			} else {
				alert('登陆失败')
      }
    })
  }
}