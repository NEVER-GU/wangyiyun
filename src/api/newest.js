import { request } from '../network/request'
// 获取新歌
export function newest(params) {
  return request({
    url: '/album/newest',
    params
  })
}
