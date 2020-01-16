import axios from 'axios';

export function getHotListData () {
  return axios({
    url: '/api/hotList.json',
    method: 'get'
  })
}