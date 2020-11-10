import { request } from '../network/request'
// 获取搜索信息
export function search(params) {
  return request({
    url: '/search',
    params
  })
}
