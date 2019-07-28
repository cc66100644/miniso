// miniprogram/pages/logistics/logistics.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaaa: []
  },
  zzz:function(){
    console.log(this.data.aaaa)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var maxClassNum = function (num) {
      return new Promise((resolve, reject) => {
        db.collection('goods').where({
          type: num
        }).orderBy('class', 'desc')
          .get()
          .then(res => {
            console.log(res)
            resolve(res.data[0])
          })
      })
    }
    maxClassNum(3).then(res => {
      let arr = []
      for (var i = 0; i < res; i++) {
        db.collection('goods').where({
          type: num,
          class: i + 1
        }).get({
          success: xxx => {
            // console.log(xxx.data)
            arr.push(xxx.data)
            this.setData({
              aaaa: arr
            })
          }
        })
      }
    })

 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})