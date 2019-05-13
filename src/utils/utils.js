import * as storage from './storage'
import {KEYS, FILE_MAX_SIZE} from './constants'

// 用户缓存，避免重复读取缓存
const CACHED = {}

// 设置缓存
const setCache = (key, val) => {
  CACHED[key] = val

  return storage.setItem(key, val)
}

// 获取缓存
const getCache = key => {
  if (CACHED[key]) {
    return CACHED[key]
  }

  CACHED[key] = storage.getItemSync(key)

  return CACHED[key]
}

// 移除缓存
const removeCache = key => {
  delete CACHED[key]

  return storage.removeItem(key)
}

/**
 * 日期格式化
 * @param  {date} date   要格式化的日期对象
 * @param  {String} format 格式字符串
 * @return {string}        格式化后的字符串
 */
export const dateformat = (date, format = 'yyyy-MM-dd') => {
  if (!(date instanceof Date)) return ''

  const o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(),    // day
    'h+': date.getHours(),   // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3),  // quarter
    'S': date.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }

  return format
}

/**
 * 防反跳(函数防抖)。func函数在最后一次调用时刻的wait毫秒之后执行！
 * @param {Function} func 执行函数
 * @param {Number} wait 时间间隔, 单位ms
 * @param {Boolean} immediate 为true，debounce会在wai 时间间隔的开始调用这个函数
 * @returns {Function}
 */
export const debounce = (func, wait, immediate) => {
  let timeout, args, context, timestamp, result

  const later = function() {
    const last = Date.now() - timestamp // timestamp会实时更新

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  const fn = function(...ags) {
    context = this
    args = ags
    timestamp = Date.now()

    const callNow = immediate && !timeout

    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
  fn.abort = function() {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return fn
}

/**
 * 节流函数
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数
 * @param {Function} func 执行函数
 * @param {Number} wait 时间间隔, 单位ms
 * @param {Object} options 可选
 *                         {Boolean} leading 禁用首次执行
 *                         {Boolean} trailing 禁用最后一次执行
 * @returns {Function}
 */
export const throttle = (func, wait, options = {}) => {
  let context, args, result
  let timeout = null
  let previous = 0

  const later = function() {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  const fn = function(...ags) {
    const now = Date.now()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    context = this
    args = ags

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }

    return result
  }
  fn.abort = function() {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return fn
}

/**
 * 获取url链接中参数
 * @param  {String} url
 * @param  [String] key 参数名。可选
 * @return {String|Object}
 */
export const getQueryString = (url = '', key) => {
  const search = url.split('?').pop()

  if (search && search.length) {
    const result = {}
    const items = search.split('&')

    for (let item of items) {
      const entry = item.split('=')
      const name = decodeURIComponent(entry[0])

      if (name) {
        result[name] = decodeURIComponent(entry[1])
      }
    }

    return key ? result[key] : result
  }

  return null
}

/**
 * 获取缓存中的token（同步）
 * @return {string} token
 */
export const getToken = () => getCache(KEYS.TOKEN_KEY)

/**
 * 将token保存到缓存中(同步)
 * @param  {string} token
 * @return {undefined}
 */
export const saveToken = val => setCache(KEYS.TOKEN_KEY, val)

/**
 * 移除缓存中的token（异步）
 * @return {promise]}
 */
export const removeToken = () => removeCache(KEYS.TOKEN_KEY)

/**
 * 判断是否有token
 * @return {boolean}
 */
export const hasToken = () => !!getCache(KEYS.TOKEN_KEY)

/**
 * 获取缓存中的token（同步）
 * @return {string} token
 */
export const getUuid = () => getCache(KEYS.UUID_VALUE)

/**
 * 将token保存到缓存中(同步)
 * @param  {string} token
 * @return {undefined}
 */
export const saveUuid = val => setCache(KEYS.UUID_VALUE, val)

/**
 * 移除缓存中的token（异步）
 * @return {promise]}
 */
export const removeUuid = () => removeCache(KEYS.UUID_VALUE)

/**
 * 判断是否有token
 * @return {boolean}
 */
export const hasUuid = () => !!getCache(KEYS.UUID_VALUE)

/**
 * 获取缓存中的用户信息
 * @return {object}
 */
export const getUserInfo = () => getCache(KEYS.USER_INFO_KEY)

/**
 * 存储用户信息
 */
export const saveUserInfo = info => setCache(KEYS.USER_INFO_KEY, {...info})

/**
 * 删除用户信息
 */
export const removeUserInfo = () => removeCache(KEYS.USER_INFO_KEY)

/**
 * 获取视频会议数据
 * @return {Object}
 */
export const getLiveData = () => getCache(KEYS.LIVEDATA_KEY)

/**
 * 保存视频会议数据
 * @param  {Object}
 * @return {promise}
 */
export const setLiveData = data => setCache(KEYS.LIVEDATA_KEY, {...data})

/**
 * 删除视频会议数据
 */
export const removeLiveData = () => removeCache(KEYS.LIVEDATA_KEY)

/**
 * 清除用户相关的缓存
 */
export const clearUserStorage = () => {
  // 删除用户token
  removeToken()

  // 删除用户信息
  removeUserInfo()

  // 删除用户视频会议数据
  removeLiveData()
}

/**
 * 检验上传的图片类型
 * @param  {Array}  files
 * @return {Boolean}
 */
export const validateImgFile = (imgs = [], maxSize = FILE_MAX_SIZE) => {
  const reg = /\.(jpe?g|png|gif)$/i

  return imgs.every(({path, size}) => {
    if (!reg.test(path)) {
      wx.showModal({content: `不支持的文件类型：${path}`})
      return false
    }

    if (size > maxSize) {
      wx.showModal({content: `图片大小超出限制：${path}；总大小：${(size / 1024 / 1024).toFixed(2)}M`})
      return false
    }

    return true
  })
}

/**
 * 检验上传的文件类型
 * @param  {Array}  files
 * @return {Boolean}
 */
export const validateFile = (files = [], maxSize = FILE_MAX_SIZE) => {
  const reg = /\.((doc|xls|ppt)x?|pdf|txt|jpe?g|png|gif)$/i

  return files.every(({path, size}) => {
    if (!reg.test(path)) {
      wx.showModal({content: `不支持的文件类型：${path}`})
      return false
    }

    if (size > maxSize) {
      wx.showModal({content: `文件大小超出限制：${path}；总大小：${(size / 1024 / 1024).toFixed(2)}M`})
      return false
    }

    return true
  })
}

/**
 * 获取微信授权设置
 * @param  {Array}  scopes 权限列表
 * @return {promise}
 */
export const getSetting = (scopes = []) => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: ({authSetting}) => {
        let result = scopes.filter(scope => !authSetting[scope])

        if (result.length === 0) {
          return resolve()
        }

        reject(result)
      },
      fail: reject
    })
  })
}

/**
 * 调起小程序权限设置界面，返回用户设置的操作结果。
 * @param  {Array}  scopes 权限列表
 * @return {promise}
 */
export const openSetting = (scopes = []) => {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: ({authSetting}) => {
        let result = scopes.filter(scope => !authSetting[scope])

        if (result.length === 0) {
          return resolve()
        }

        reject(result)
      },
      fail: reject
    })
  })
}

/**
 * 获取用户授权
 * @param  {Array}  scopes 权限列表
 * @return {promise}
 */
export const wxAuthorize = (scopes = []) => {
  return Promise.all(scopes.map(scope => {
    return new Promise((resolve, reject) => {
      getSetting([scope])
      .then(resolve)
      .catch(e => {
        wx.authorize({
          scope,
          success: resolve,
          fail: reject
        })
      })
    })
  }))
}
/**
 * 获取手机系统信息
 * @return {promise}
 */
let wxSystem = wx.getSystemInfoSync()
export {wxSystem}
