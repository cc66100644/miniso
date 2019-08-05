// 云数据库
const db = wx.cloud.database();

const swiperImage = function () {
  // console.log(index)
  return new Promise((resolve, reject) => {
    let temparr = []
    db.collection('swiper')
      .get()
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

//通过排序获取同种物品有多少类
const maxClassNum = function (num) {
  return new Promise((resolve, reject) => {
    db.collection('goods').where({
      type: num
    }).orderBy('class', 'desc')
      .get()
      .then(res => {
        // console.log(res)
        resolve(res.data[0].class)
      })
  })
}

const getOpenid = function () {
  return new Promise((resolve, reject) =>{
    var openid = ''
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        // console.log('云函数获取到的openid: ', res.result.openId)
        openid = res.result.openId;
        resolve(openid)
      }
    }) 
  })
}





module.exports = {
  swiperImage,
  maxClassNum,
  getOpenid,
};