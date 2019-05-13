import request from '@/utils/request'
import uploader from '@/utils/uploader'

const alert = m => wx.showModal({content: m, showCancel: false})
const header = {}
header['Content-Type'] = 'application/json'

/**
 * @params {String} url 接口地址
 * @params {object} data 请求参数
 * @params {boolean} mdal 是否弹窗提示。弹窗: true, 吐司: false
 */
/**
 * 用户登录
 * @return {promise}
 */
export const userSignin = (data) => {
  return request('/cas/v3/tickets', data)
}
/**
 * 获取短信验证码
 * @return {promise}
 */
export const sendSMSVerificationCode = (data) => {
  return request('/cas/zcdl/sendSMSVerificationCode', data)
}

/**
 * 用户登录
 * @return {promise}
 */
export const tickets = (data) => {
  return request('/cas/v3/tickets', data)
}

/**
 * 用户注册
 * @return {promise}
 */
export const saveUserInfo = (data) => {
  return request('/cas/zcdl/saveUserInfo', data, alert, header)
}

/**
 * 用户上传证件照片
 * @param  {Object} opts 请求参数
 * @return {promise}
 */
export const uploadImg = (opts = {}) => {
  opts.url = '/file-server/upload/bmsoft/2'
  return uploader(opts)
}
/**
 * 获取公钥加密
 * @return {promise}
 */
export const getPublicKey = (data) => {
  return request('/userGateway/user/getPublicKey', data, null)
}

/**
 * 用户注册
 * @return {promise}
 */
export const searchCommonUser = (data) => {
  return request('/userGateway/user/searchCommonUser', data, alert)
}

/**
 * 检测手机号 是否存在
 * @return {promise}
 */
export const checkUserIsRegister = (data) => {
  return request('/userGateway/user/checkUserByMobile', data, null)
}
/**
 * 检测验证码正确
 * @return {promise}
 */
export const checkVerifyCode = (data) => {
  return request('/userGateway/user/resetUserPassWordValidate', data, alert)
}

/**
 * 忘记密码
 * @return {promise}
 */
export const forgetPassword = (data) => {
  return request('/cas/zcdl/forgetPassword', data, alert)
}
/**
 * 获取事件数量 本次调用用于检测 token 是否过期
 * @return {promise}
 */
export const getHomeData = (data) => {
  return request('/mobileLogin/home', data, null)
}
