import Vue from "vue";
import { post, get, del, put, upload, exportExcel, code } from "./index";
const _baseUrl = process.env.VUE_APP_URL;
/* eslint-disable */
Vue.prototype.$code = code
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del
Vue.prototype.$put = put
Vue.prototype.$upload = upload
Vue.prototype.$exportExcel = exportExcel

// 获取登录验证码
// const getCodeURL =  `${_baseUrl}/pub/api/getcode`
// export const getCodeApi = function (json) {
//   return Vue.prototype.$code(getCodeURL,json)
// }
// 登录
const loginInURL = `${_baseUrl}/pub/api/login`
export const loginInApi = function (json) {
  return Vue.prototype.$post(loginInURL, json)
}
// 获取材料类型
const materTypeURL = `${_baseUrl}/secret/api/gettypes`
export const materTypeApi = function (json) {
  return Vue.prototype.$post(materTypeURL, json)
}
  // 根据材料类型获取上传列表
const stepbyTypeURL = `${_baseUrl}/secret/api/getstepbytype`
export const stepbyTypeApi = function (json) {
  return Vue.prototype.$post(stepbyTypeURL, json)
}
// 获取七牛云上传token
const getupTokenURL = `${_baseUrl}/auth/api/getupToken`
export const getupTokenApi = function (json) {
  return Vue.prototype.$post(getupTokenURL, json)
}
// 获取通知公告列表
const getnewsListURL = `${_baseUrl}/secret/api/getnews`
export const getnewsListApi = function (json) {
  return Vue.prototype.$post(getnewsListURL, json)
}
// 获取通知公告详情

const getnewInfoURL = `${_baseUrl}/secret/api/getnewinfo`
export const getnewInfoApi = function (json) {
  return Vue.prototype.$post(getnewInfoURL, json)
}
// 确认信息模块
// 获取手机验证码
const sendPhonecodeURL =  `${_baseUrl}/secret/api/sendcode`
export const sendPhonecodeApi = function (json) {
  return Vue.prototype.$post(sendPhonecodeURL,json)
}
// 验证手机验证码
const verifyPhonecodeURL =  `${_baseUrl}/secret/api/checkphone`
export const verifyPhonecodeApi = function (json) {
  return Vue.prototype.$post(verifyPhonecodeURL,json)
}

// 获取审核记录
const getprocessURL =  `${_baseUrl}/secret/api/getprocess`
export const getprocessApi = function (json) {
  return Vue.prototype.$post(getprocessURL,json)
}
// 获取用户信息
const getuserinfoURL =  `${_baseUrl}/secret/api/getuserinfo`
export const getuserinfoApi = function (json) {
  return Vue.prototype.$post(getuserinfoURL,json)
}

// 提交资料
const inittypeURL =  `${_baseUrl}/secret/api/inittype`
export const inittypeApi = function (json) {
  return Vue.prototype.$post(inittypeURL,json)
}

// 获取审核详情
const getdatuminfoURL =  `${_baseUrl}/secret/api/getdatuminfo`
export const getdatuminfoApi = function (json) {
  return Vue.prototype.$post(getdatuminfoURL,json)
}
// 获取错误图示
const geterrimgURL =  `${_baseUrl}/secret/api/geterrimg`
export const geterrimgApi = function (json) {
  return Vue.prototype.$post(geterrimgURL,json)
}