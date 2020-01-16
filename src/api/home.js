import axios from 'axios';

export function getHomeInfoData () {
  return axios({
    url: '/api/home.json',
    method: 'get'
  })
}