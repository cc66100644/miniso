// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()//获取用户的openid

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return event.userInfo;
}