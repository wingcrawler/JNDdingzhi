import {HOST} from './constants'
// import {saveToken, wxSystem} from './utils'

export default {
  config(opts = {}) {
    let {
      url = '',
      data = {},
      header = {},
    } = opts
    let method = data.method || 'POST'
    url = url.replace(/^\//, '')
    // 如果没有定义请求头的content-type，则默认为 application/x-www-form-urlencoded /application/json
    if (!Object.keys(header).some(key => key.toLowerCase() === 'content-type')) {
      header['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    //   header['cType'] = 'WECHAT'
    //   header['appName'] = 'SJSODR'
    //   header['timer'] = Date.now()
    // }
    }
    return {...opts, data, method, header, url: `${HOST}${url}`}
  },
  success(res) {
    const {data = {}, statusCode} = res

    // const token = data['token']
    // if (token) {
    //   saveToken(token)
    // }
    console.log(res)
    if (statusCode === 200 || statusCode === 201) {
      return data
    }

    return Promise.reject(data)
  },
  fail(e) {
    console.log(e.code)
    return e
  }
}
