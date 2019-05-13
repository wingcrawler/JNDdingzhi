// 开发环境
/* @if ENV='dev' **
var HOST = exports.HOST = 'https://wx.bjinternetcourt.gov.cn/' // 接口地址
var FXH5URL = exports.FXH5URL = 'https://wxfxpg.susong51.com/' // 诉讼风险智能评估H5地址
var RZH5URL = exports.RZH5URL = 'https://devsjsodr2.odrcloud.net/' // 人工咨询地址
var RZH5URL = exports.FLH5URL = 'https://lawsearch.odrcloud.cn/' // 法律法规H5地址
var EWMLAH5 = exports.EWMLAH5 = 'https://wsf.ixueike.net/weisufuv2/lian/sysdata/' // 二维码立案H5地址
var KSLAH5 = exports.KSLAH5 = 'https://ksla.huangleilei.top/index/sign/sysdata/' // 快速立案H5地址
var MEETINGH5URL = exports.MEETINGH5URL = 'https://doc.weiyicloud.com/' // 加入会议H5地址
var Platform = exports.Platform = 'sjsODR-dev' // 来源参数
var SOCKET_URL = exports.SOCKET_URL = 'wss://devapi.shilongmaoyi.com/' // socket 地址
var DOWN_URL = exports.DOWN_URL = 'https://devdownload.bjsjsadr.com/' // 下载模板地址

var SOCKET_PREFIX = exports.SOCKET_PREFIX = 'ODRDxVx' // 推流前缀

var ROBOT_URL = exports.ROBOT_URL = 'https://sjs.robot.odrcloud.cn/' // 接口地址

var ROBOT_SOCKET_URL = exports.ROBOT_SOCKET_URL = 'wss://sjs.robot.odrcloud.cn/websocket'   //智能咨询socket地址
/* @endif */

// 测试环境
/* @if ENV='test' **
var HOST = exports.HOST = 'https://wx.bjinternetcourt.gov.cn/' // 接口地址
var FXH5URL = exports.FXH5URL = 'https://wxfxpg.susong51.com/' // 诉讼风险智能评估H5地址
var RZH5URL = exports.RZH5URL = 'https://devsjsodr2.odrcloud.net/' // 人工咨询地址
var RZH5URL = exports.FLH5URL = 'https://lawsearch.odrcloud.cn/' // 法律法规H5地址
var EWMLAH5 = exports.EWMLAH5 = 'https://wsf.ixueike.net/weisufuv2/lian/sysdata/' // 二维码立案H5地址
var KSLAH5 = exports.KSLAH5 = 'https://ksla.huangleilei.top/index/sign/sysdata/' // 快速立案H5地址
var MEETINGH5URL = exports.MEETINGH5URL = 'https://doc.weiyicloud.com/' // 加入会议H5地址
var Platform = exports.Platform = 'sjsODR-dev' // 来源参数
var SOCKET_URL = exports.SOCKET_URL = 'wss://devapi.shilongmaoyi.com/' // socket 地址
var DOWN_URL = exports.DOWN_URL = 'https://devdownload.bjsjsadr.com/' // 下载模板地址

var SOCKET_PREFIX = exports.SOCKET_PREFIX = 'ODRDxVx' // 推流前缀

var ROBOT_URL = exports.ROBOT_URL = 'https://sjs.robot.odrcloud.cn/' // 接口地址

var ROBOT_SOCKET_URL = exports.ROBOT_SOCKET_URL = 'wss://sjs.robot.odrcloud.cn/websocket'  //智能咨询socket地址
/* @endif  */

// 生产环境
/* @if ENV='prod' **
var HOST = exports.HOST = 'https://wx.bjinternetcourt.gov.cn/' // 接口地址
var FXH5URL = exports.FXH5URL = 'https://wxfxpg.susong51.com/' // 诉讼风险智能评估H5地址
var RZH5URL = exports.RZH5URL = 'https://devsjsodr2.odrcloud.net/' // 人工咨询地址
var RZH5URL = exports.FLH5URL = 'https://lawsearch.odrcloud.cn/' // 法律法规H5地址
var EWMLAH5 = exports.EWMLAH5 = 'https://wsf.ixueike.net/weisufuv2/lian/sysdata/' // 二维码立案H5地址
var KSLAH5 = exports.KSLAH5 = 'https://ksla.huangleilei.top/index/sign/sysdata/' // 快速立案H5地址
var MEETINGH5URL = exports.MEETINGH5URL = 'https://doc.weiyicloud.com/' // 加入会议H5地址
var Platform = exports.Platform = 'sjsODR-dev' // 来源参数
var SOCKET_URL = exports.SOCKET_URL = 'wss://devapi.shilongmaoyi.com/' // socket 地址
var DOWN_URL = exports.DOWN_URL = 'https://devdownload.bjsjsadr.com/' // 下载模板地址

var SOCKET_PREFIX = exports.SOCKET_PREFIX = 'ODRDxVx' // 推流前缀

var ROBOT_URL = exports.ROBOT_URL = 'https://sjs.robot.odrcloud.cn/' // 接口地址

var ROBOT_SOCKET_URL = exports.ROBOT_SOCKET_URL = 'wss://sjs.robot.odrcloud.cn/websocket'   //智能咨询socket地址

/* @endif */

// 上传文件最大尺寸 单位：B
export const FILE_MAX_SIZE = 10 * 1024 * 1024

// 用户缓存的key
export const KEYS = {
  // 存取token的key
  TOKEN_KEY: 'token',
  // 存储视频会议数据的key
  UUID_VALUE: 'uuid_value',
  // 存取用户信息的key
  USER_INFO_KEY: 'userInfo',
  // 存储微信用户信息key
  WX_USER_INFO_KEY: 'wxUserInfo'
}
