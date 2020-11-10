import { request } from '../network/request'
// 获取头部轮播图
export function banner(params) {
  return request({
    url: '/banner',
    params
  })
}
