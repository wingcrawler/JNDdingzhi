import wepy from 'wepy'
import {clearUserStorage} from './utils'

const codeMap = {
  '200': '成功',
  9999: '网络状况不好,请稍后重试.',
  1009: '用户已经在其他地方重新登录',
  1008: '用户退出登录',
}

const toast = msg => {
  wx.showToast({title: msg, icon: 'none', duration: 3e3})
}

const promiseToast = (m, handler) => {
  return new Promise((resolve, reject) => {
    let promise

    if (typeof handler === 'function') {
      promise = handler(m)
    }

    if (promise && typeof promise.then === 'function') {
      return promise.then(resolve).catch(reject)
    }

    if (promise === false) {
      return reject(promise)
    }

    resolve(promise)
  })
}

/**
 * 统一请求接口处理
 * @params {String} url 接口地址
 * @params {object} data 请求参数
 * @params {boolean} modal 是否弹窗提示。弹窗: true, 吐司: false
 * @returns {*|Promise<T>}
 */
export default function(url, data, handler = toast, header) {
  return wepy.request({
    data,
    header,
    url: url
  })
  .catch((data = {}) => {
    if (data.code) {
      // console.log(data)
      let msg = data.message
      switch (data.code) {
      case 1002:
      case 1001:
      case 1008:
      case 1009:
        clearUserStorage()
        msg = '登录已过期，请重新登录'
        promiseToast(msg, handler).then(() => {
          // eslint-disable-next-line
          let currentPage = getCurrentPages().pop()
          if (currentPage.route !== 'pages/sign/signin') {
            wx.navigateTo({url: '/pages/sign/signin?back=1'})
          }
        })
        return Promise.reject(data)
      }

      if (data.code in codeMap) {
        msg = codeMap[data.code]
      }

      promiseToast(msg, handler)
    }

    return Promise.reject(data)
  })
}
