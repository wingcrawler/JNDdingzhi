/**
 *
 * @param  {string} key
 * @return {Promise}
 */
export const getItem = (key) => {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success: resolve,
      fail: reject
    })
  })
}

/**
 *
 * @param  {string} key
 * @param  {Object|string} data
 * @return {Promise}
 */
export const setItem = (key, data) => {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      success: resolve,
      fail: reject
    })
  })
}

/**
 *
 * @param  {string}
 * @return {Object|string}
 */
export const getItemSync = (key) => {
  try {
    return wx.getStorageSync(key)
  } catch(e) {
    return null
  }
}

/**
 *
 * @param  {string} key
 * @param  {Object|string} data
 * @return {boolean}
 */
export const setItemSync = (key, data) => {
  try {
    wx.setStorageSync(key, data)
    return true
  } catch(e) {
    return false
  }
}

/**
 * removeItem
 * @param  {string} key
 * @return {promise}
 */
export const removeItem = (key) => {
  return new Promise((resolve, reject) => {
    wx.removeStorage({
      key,
      success: resolve,
      fail: reject
    })
  })
}

/**
 * removeItemSync
 * @param  {string} key
 * @return {promise}
 */
export const removeItemSync = (key) => {
  try {
    wx.removeStorageSync(key)
    return true
  } catch(e) {
    return false
  }
}

/**
 * clear
 * @return {promise}
 */
export const clear = () => {
  return new Promise((resolve, reject) => {
    wx.clearStorage({
      success: resolve,
      fail: reject
    })
  })
}

/**
 * clearSync
 * @return {promise}
 */
export const clearSync = () => {
  try {
    wx.clearStorageSync
    return true
  } catch(e) {
    return false
  }
}
