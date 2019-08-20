// miniprogram/pages/home/home.js
const db = wx.cloud.database()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    userInfo: {
        img: '',
        name: '11',
        cardlevel: '普卡',
        erweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/erweima.png',
        yiweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/cnaidc.png'
    },
    scrollTop: 100,
    hotCommodities: [],
    navName: [
      '推荐', '新品', '背包', '餐厨', '零食', '风扇', '水杯', '娃娃', '香水'
    ],
    content: [{
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/风扇/fan2.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户随机用户随机',
        headimg: '../../images/icon/zan.png',
        zan: '1'
      }
    ],
    pophiden: 1
  },
  // 左右滑动条移动
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  //商品页面跳转
  skip: function (e) {
    // console.log(e)
    console.log(this.data.userInfo)

    // wx.navigateTo({
    //   url: '../../pages/goods/goods?id=' + e.currentTarget.id,
    // })
  },
  //照片发布
  publish(e) {
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取用户信息，头像名称显示
    wx.getUserInfo({
      success: res => {
        // console.log(res)
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: {
            img: res.userInfo.avatarUrl,
            name: res.userInfo.nickName,
            cardlevel: '普卡',
            erweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/erweima.png',
            yiweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/cnaidc.png'
          }
        })
      }
    }),
    db.collection('comment').get({
      success:res=>{
        // console.log(res.data)
        this.setData({
          content:res.data
        })
      }
    }),
    //获取热门商品
    db.collection('goods')
      .where({
        hot: true
      }).get().then(res => {
        this.setData({
          hotCommodities: res.data
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 获取地理位置
    wx.getLocation({
        type: 'gcj02',
        success(res) {
          app.globalData.latitude = res.latitude
          app.globalData.longitude = res.longitude
        }
      }),
    //数据库读取轮播图内容
    db.collection('swiper')
    .get()
    .then(res => {
      let temparr = []
      res.data.forEach(val => {
          if (val.type == 1){
            temparr.push(val)
          }
        })
      // console.log(res)
      this.setData({
        imgUrls: temparr
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})