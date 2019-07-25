// miniprogram/pages/home/home.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    userInfo: {
      img: '../../images/icon/zan.png',
      name: '普卡',
      cardlevel: '普卡',
      erweima: '../../images/erweima.png',
      yiweima: '../../images/cnaidc.png'
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
      },
      {
        url: 'http://img.mp.itc.cn/upload/20160816/03730864b6a545ccae5bdce4e199a3a1_th.png',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户2',
        headimg: '../../images/icon/zan.png',
        zan: '2'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other3.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户3',
        headimg: '../../images/icon/zan.png',
        zan: '3'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other3.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户3',
        headimg: '../../images/icon/zan.png',
        zan: '4'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/风扇/fan2.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户随机用户随机',
        headimg: '../../images/icon/zan.png',
        zan: '5'
      },
      {
        url: 'http://img.mp.itc.cn/upload/20160816/03730864b6a545ccae5bdce4e199a3a1_th.png',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户2',
        headimg: '../../images/icon/zan.png',
        zan: '6'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other3.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户3',
        headimg: '../../images/icon/zan.png',
        zan: '7'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other3.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户3',
        headimg: '../../images/icon/zan.png',
        zan: '8'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/风扇/fan2.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户随机用户随机',
        headimg: '../../images/icon/zan.png',
        zan: '9'
      },
      {
        url: 'http://img.mp.itc.cn/upload/20160816/03730864b6a545ccae5bdce4e199a3a1_th.png',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户2',
        headimg: '../../images/icon/zan.png',
        zan: '10'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other3.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户3',
        headimg: '../../images/icon/zan.png',
        zan: '11'
      },
      {
        url: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other3.jpg',
        text: '非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user: '随机用户3',
        headimg: '../../images/icon/zan.png',
        zan: '12'
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
  openpop: function(e) {
    this.setData({
      pophiden: 0
    })
  },
  closepop: function(e) {
    this.setData({
      pophiden: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获取地理位置
    // wx.getLocation({
    //     type: 'wgs84',
    //     success(res) {
    //       const latitude = res.latitude
    //       const longitude = res.longitude
    //       const speed = res.speed
    //       const accuracy = res.accuracy
    //       // console.log(res)
    //     }
    //   }),
    //获取用户信息，头像名称显示
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: {
            img: res.userInfo.avatarUrl,
            name: res.userInfo.nickName,
            cardlevel: '普卡',
            erweima: '../../images/erweima.png',
            yiweima: '../../images/cnaidc.png'
          }
        })
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