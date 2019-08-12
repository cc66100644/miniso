//app.js
App({
  onLaunch: function () {
    
    globalData:{
      openid:null
      userInfo:null
    }

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env:'apptest-z7eyd'
      })
    }

    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        // console.log('云函数获取到的openid: ', res.result.openId)
        this.globalData.openid = res.result.openId;
      } 
    }) 


    this.globalData = {
      openid : null,
      userInfo: null
    }
  }
})
