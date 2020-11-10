import { request } from '../network/request'
// 获取所有歌单
export function personalized(params) {
  return request({
    url: '/personalized' + '?limit=100',
    params
  })
}
// http://wyy.api.blog8090.com/personalized
