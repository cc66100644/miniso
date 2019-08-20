// miniprogram/pages/community/community.js
const db = wx.cloud.database()
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content: [{
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/风扇/fan2.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户随机用户随机',
        headimg: '../../images/icon/zan.png',
        zan: '1'
      }
    ]
  },
  //照片发布
  publish(e){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.navigateTo({
          url: '../normal/normal?paths=' + tempFilePaths[0] + '&content=&cursor=0',
        })
      }
    })
    // wx.navigateTo({
    //   url: '../normal/normal',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('comment').get({
      success: res => {
        console.log(res.data)
        this.setData({
          content: res.data
        })
      }
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