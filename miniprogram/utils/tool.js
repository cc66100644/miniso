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
var maxClassNum = function (num) {
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

module.exports = {
  swiperImage,
  maxClassNum
};