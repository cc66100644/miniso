// 云数据库
const db = wx.cloud.database();

// 设置轮播图
// const swiperImage = function (index){
//   // console.log(index)
//   return new Promise((resolve, reject)=>{
//     let temparr = []
//     db.collection('swiper')
//       .get()
//       .then(res => {
//         res.data.forEach(val => {
//           if (val.type == index){
//             temparr.push(val)
//           }
//         })
//         // console.log(temparr)
//         resolve(temparr)
//       })
//       .catch(reject)
//   })
// }

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


module.exports = {
  swiperImage
};