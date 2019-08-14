// miniprogram/pages/article/article.js
const app = getApp();
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    indicatorcolor: "rgba(255, 255, 255, .3)",
    indicatoractivecolor: "#ffffff",
    
    userinfo:[],
    url:[],
    content:'',
    zan:0,
    other: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('comment').where({
      time: +(options.time)
    }).get({
      success:res => {
        console.log(res.data)
        this.setData({
          url: res.data[0].url,
          content: res.data[0].text,
          zan: res.data[0].zan,
          other: res.data[0].other
        })
      }
    })
    this.setData({
      userinfo: app.globalData.userInfo
    })
    // console.log(app.globalData.userInfo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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