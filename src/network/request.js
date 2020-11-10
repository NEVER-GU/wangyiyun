const axios = require('axios')
import { Message } from 'element-ui'
// 请求接口
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://wyy.api.blog8090.com/',
    timeout: 5000
  })
  instance.interceptors.response.use(
    config => {
      const res = config.data
      if (res.code !== 200) {
        Message({
          message: 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        return res
      }
    },
    err => {
      console.log(err)
      Message({
        message: 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    })
  return instance(config)
}
