// miniprogram/pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checked: false
  },
  check:function(e){
    var checked = this.data.checked
    this.setData({
      checked: !checked
    })
  },
  login(e){
    // 判断勾选用户协议
    if(!this.data.checked){
      wx.showModal({
        title:'提示',
        content:'请同意《XXX协议》和《用户守则》',
        showCancel: false
      })
    }else{
      wx.getSetting({
        success(res){
          console.log(res.authSetting)
          if (res.authSetting['scope.userInfo']){
              wx.switchTab({
                url: '/pages/home/home'
              })
          }else{
            // console.log('failed')
            wx.showToast({
              title: '请授权',
              icon: 'none',
            })
          }
        }
      })
    }
  },
  singin:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.getSetting({
    //   success(res) {
        
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.switchTab({
    //         url: '/pages/home/home'
    //       })
    //     }
    //   }
    // })
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