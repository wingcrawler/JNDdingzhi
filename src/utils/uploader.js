import {HOST} from './constants'
// import {clearUserStorage} from './utils'

export default function(options = {}) {
  let {
    url = '',
    filePath = '',
    name = '',
    header = {},
    formData = {}
  } = options

  url = url.replace(/^\/+/, '')
  // header['osVersion'] = wxSystem.system
  // header['deviceModel'] = wxSystem.model
  header['Content-Type'] = 'application/x-www-form-urlencoded'
  // header['Content-Type'] = 'multipart/form-data'
  // header['jwtToken'] = getToken()
  // header['cType'] = 'WECHAT'
  // header['appName'] = 'SJSODR'
  // header['timer'] = Date.now()

  return new Promise((resolve, reject) => {
    console.log(formData)
    wx.uploadFile({
      name,
      filePath,
      header,
      formData,
      url: `${HOST}${url}`,
      success: ({statusCode, data, errMsg}) => {
        if (statusCode === 200) {
          const res = JSON.parse(data)
          if (res.code === 200) {
            return resolve(res.data)
          }
          return reject(res.message)
        }

        reject(errMsg)
      },
      fail: reject
    })
  })
}
