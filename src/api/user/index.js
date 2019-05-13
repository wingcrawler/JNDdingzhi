import request from '@/utils/request'
import uploader from '@/utils/uploader'

// const alert = m => wx.showModal({content: m, showCancel: false})

/**
 *获取用户信息
 * @return {promise}
 */
export const getSelfUser = (data) => {
  return request('/mobileUser/getSelfUser', data, false)
}

/**
 *用户退出登录
 * @return {promise}
 */
export const loginOut = (data) => {
  return request('/userGateway/user/loginOut', data, false)
}

/**
 * 更换绑定手机
 * @return {promise}
 */
export const updatePhone = (data) => {
  return request('/userGateway/user/updateMobilePhone', data)
}

/**
 * 更换绑定邮箱
 * @return {promise}
 */
export const updateEmail = (data) => {
  return request('/userGateway/user/updateEmail', data)
}

/**
 * 更新密码
 * @return {promise}
 */
export const updatePassword = (data) => {
  return request('/userGateway/user/updatePassword', data)
}

/**
 * 更新用户信息
 * @return {promise}
 */
export const updateSelfUser = (data) => {
  return request('/userGateway/user/updateCommonUser', data)
}

/**
 * 上传头像
 * @return {promise}
 */
export const updateHeadPortrait = (data) => {
  return request('/mobileUser/updateHeadPortrait', data)
}

/**
 * 获取调解案件列表
 * @return {promise}
 */
export const getLawCases = (data) => {
  return request('/userGateway/personalCenter/getMediationListPage', data)
}

/**
 * 获取调解案件详情
 * @return {promise}
 */
export const getCase = (data) => {
  return request('/mobileLawCase/getCase', data, null)
}

/**
 * 获取纠纷案件详情
 * @return {promise}
 */
export const getMediationInfo = (data) => {
  return request('/mastiff/mediation/getMediationInfo', data)
}

/**
 * 获取纠纷案件用户未签名文书
 * @return {promise}
 */
export const getMediationWorkbenchs = (data) => {
  return request('/mastiff/mediation/getMediationWorkbenchs', data)
}

/**
 * 案件文书材料查询接口
 * @return {promise}
 */
export const getMediatorDocuments = (data) => {
  return request('/mastiff/mediation/getMediatorDocuments', data)
}

/**
 * 获取咨询案件列表
 * @return {promise}
 */
export const getDisputes = (data) => {
  return request('/userGateway/personalCenter/getConsultationListPage', data)
}

/**
 * 结束某一个咨询案件
 * @return {promise}
 */
export const endDispute = (data) => {
  return request('/panda/disputes/endDispute', data)
}

/**
 * 实名认证
 * @return {promise}
 */
export const verifyUser = (data) => {
  return request('/userGateway/user/setRealNameAuthentication', data, null)
}

/**
 * 人脸认证结果接口
 * @return {promise}
 */
export const faceRecognition = (data) => {
  return request('/userGateway/user/setFacialVerify', data)
}

/**
 * 获取咨询师列表
 * @return {promise}
 */
export const getCounselors = (data) => {
  return request('/userGateway/servicePerson/getCounselorListPage', data)
}

/**
 * 获取调解案件进度
 * @return {promise}
 */
export const getMediationProgress = (data) => {
  return request('/mastiff/mediation/getMediationProgress', data)
}
/**
 * 获取单个咨询师信息
 * @return {promise}
 */
export const getCounselor = (data) => {
  return request('/panda/disputes/getUserSelectCounselor', data)
}
/**
 * 评价咨询师 （有可能废弃）
 * @return {promise}
 */
export const submitComment = (data) => {
  return request('/mobileConsult/submitComments', data)
}
/**
 * 保存用户评价
 * @return {promise}
 */
export const saveUserEvaluate = (data) => {
  return request('/userGateway/userEvaluate/saveUserEvaluate', data)
}

/**
 * 获取我的诉讼列表
 * @return {promise}
 */
export const getSuitInfoListPage = (data) => {
  return request('/userGateway/personalCenter/getSuitInfoListPage', data)
}

/**
 * 获取我的诉讼详情
 * @return {promise}
 */
export const suitDetail = (data) => {
  return request('/arbit/suit/suitDetail', data)
}

/**
 * 获取评估列表
 * @return {promise}
 */
export const applicationAssessment = (data) => {
  return request('/mobileEvaluate/applicationAssessment', data)
}

/**
 * 获取评估列表
 * @return {promise}
 */
export const getDesc = (data) => {
  return request('/mobileEvaluate/getDesc', data)
}

/**
 * 获取司法确认列表
 * @return {promise}
 */
export const getJudicialConfirmListPage = (data) => {
  return request('/userGateway/personalCenter/getJudicialConfirmListPage', data)
}
/**
 * 获取司法确认申请书
 * @return {promise}
 */
export const getJudicialConfirmBook = (data) => {
  return request('/mastiff/judicialConfirm/getJudicialConfirmBook', data)
}
/**
 * 获取司法确认申请书
 * @return {promise}
 */
export const uploadDisputesFile = (data) => {
  return request('/panda/disputes/uploadDisputesFile', data)
}
/**
 * 获取司法确认申请书
 * @return {promise}
 */
export const chooseCounselor = (data) => {
  return request('/panda/disputes/chooseCounselor', data)
}
/**
 * 结束咨询---云律
 * @return {promise}
 */
export const cloudLawEndDispute = (data) => {
  return request('/panda/disputes/cloudLawEndDispute', data)
}
