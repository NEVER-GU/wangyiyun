import { request } from '../network/request'
// 获取榜单信息
export function playlist(params) {
  return request({
    url: '/top/list',
    params
  })
}
