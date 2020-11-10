
import { request } from '../network/request'
// 获取所有新歌信息
export function allNewSong(params) {
  return request({
    url: '/album/new' + '?limit=100',
    params
  })
}
