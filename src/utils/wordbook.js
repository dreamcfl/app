/*
 * 使用方法
 * 数组对象 用于下拉选择项
 * 对象 用于 表格内容过滤
 */
// import { } from '@u/wordbook'

//用户状态
export const USERSTATUS = {
  "1": "正常",
  "2": "禁用"
};
export const USERSTATUSLIST = [
  {
    id: 1,
    value: "正常"
  },
  {
    id: 2,
    value: "禁用"
  }
];
// tab类型
export const TABTYPE = {
  "0": "/home",
  "1": "/about",
  "2": "/mine",
  "/home": 0,
  "/about": 1,
  "/mine": 2
};
// 审核颜色状态
export const SHCOLORTYPE = {
  "3": "#1989fa",
  "2": "#ff976a",
  "1": "#ee0a24",
  "0": "#07c160",
  "-1": "#07c160"
};
// 审核状态
export const SHTYPE = {
  "3": "已通过",
  "2": "未通过",
  "1": "审核中",
  "0": "可编辑",
  "-1": "未上传"
};
// 审核颜色状态
export const SEX = {
  "2": "女",
  "1": "男"
};
// 证件类型
export const CARDTYPE = {
  1: "居民身份证",
  2: "军官证、文职干部或士兵证",
  3: "台湾身份证",
  4: "外籍护照",
  5: "未知"
};
