// miniprogram/pages/logistics/logistics.js
const db = wx.cloud.database()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      img: '',
      name: '11',
      cardlevel: '普卡',
      erweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/erweima.png',
      yiweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/cnaidc.png'
    },
    latitude: null,
    longitude: null
  },
  click(){
    console.log(this.data.userInfo)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息，头像名称显示
    this.setData({
      userInfo: {
        img: app.globalData.userInfo.avatarUrl,
        name: app.globalData.userInfo.nickName,
        cardlevel: '普卡',
        erweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/erweima.png',
        yiweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/cnaidc.png',
      },
      latitude: app.globalData.latitude,
      longitude: app.globalData.longitude
    })
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