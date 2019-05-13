
/*!
 * 校验工具
 */

// 默认错误提示
const handleError = msg => {
  wx.showToast({title: msg, icon: 'none', duration: 3e3})
}

const trim = (s = '') => {
  return s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

// 获取Obj的val
const getValue = (keys, thisObj) => {
  if (keys.indexOf('.') > 0) {
    keys = keys.split('.').reverse()

    while (keys.length) {
      thisObj = thisObj[keys.pop()]
    }

    return thisObj
  }

  return thisObj[keys]
}

// 校验val是否有效
const validateVal = (val) => {
  let valid = val !== null && typeof val !== 'undefined' && val !== ''

  if (valid && typeof val === 'string') {
    valid = trim(val) !== ''
  }

  return valid
}

// 单个校验
const eachValidator = (item, key, thisObj, noMessage) => {
  let val = getValue(key, thisObj)
  let {required, pattern, message} = item

  if (typeof item === 'string') {
    required = item
  }

  if (required && !validateVal(val)) {
    if (typeof required === 'string') {
      message = required
    }
    noMessage || handleError(message, key)
    return false
  }

  let valid = true

  if (typeof pattern === 'function') {
    valid = pattern(val)
  }

  if (pattern && typeof pattern.test === 'function') {
    valid = pattern.test(val)
  }

  if (!valid && !noMessage) {
    handleError(message, key)
  }

  return valid
}

// 处理规则
const eachPatterns = (list, key, thisObj, noMessage) => {
  for (let i = 0, len = list.length; i < len; i++) {
    if (!eachValidator(list[i], key, thisObj, noMessage)) {
      return false
    }
  }
  return true
}

const getRequired = item => {
  let {required} = item

  if (typeof item === 'string') {
    required = item
  }

  return !!required
}

// 入口方法
// 执行校验
export const validate = (rules, thisObj, noMessage = false) => {
  let keys = Object.keys(rules)

  for (let i = 0, len = keys.length; i < len; i++) {
    let key = keys[i]
    let item = rules[key]

    // 非必填项且没有输入时跳过本次校验
    const required = getRequired(item)
    if (!required && !validateVal(getValue(key, thisObj))) {
      continue
    }

    if (!eachValidator(item, key, thisObj, noMessage)) {
      return false
    }

    let {patterns} = item
    if (patterns && patterns.length && !eachPatterns(patterns, key, thisObj, noMessage)) {
      return false
    }
  }
  return true
}

export const patterns = {
  phone: /^1[3-9][0-9]{9}$/, // 11位手机号码非严格校验
  idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 身份号码格式校验
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, // 邮箱格式校验
  // 密码8-20位，小写字母+数字
  passwd: /^[A-Za-z0-9]{8,20}$/,
  vcode: /^[0-9]{4}$/ // 4位纯数字验证码校验
}

export default validate
