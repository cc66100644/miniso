// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {url:'../../images/banner/swiper_1.jpg'},
      {url:'../../images/banner/swiper_2.jpg'},
      {url:'../../images/banner/swiper_3.jpg'}
    ],
    userInfo:{
      img: '../../images/head.png',
      name: '我身上的花朵12123123123',
      cardlevel: '普卡',
      erweima: '../../images/erweima.png',
      yiweima: '../../images/cnaidc.png'
    },
    scrollTop: 100,
    hotCommodities: [
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/背包/bag1.jpg',
        name: "流行学生双肩背包",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/杯子/cup1.jpg',
        name: "钢铁侠水杯",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/杯子/cup4.jpg',
        name: "美国队长水杯",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/风扇/fan3.jpg',
        name: "迷你电风扇",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/other/other1.png',
        name: "纸巾",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/娃娃/wawa1.jpg',
        name: "可爱娃娃",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/香水/xiangshui1.jpg',
        name: "香水",
        url: "/merchandise/merchandise?title=merchandise"
      },
      {
        src: 'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/零食/lingshi1.jpg',
        name: "美味零食",
        url: "/merchandise/merchandise?title=merchandise"
      }
    ],
    navName:[
      '推荐', '新品','背包', '餐厨', '零食', '风扇', '水杯', '娃娃', '香水'
    ],
    content:[
      {
        url:'cloud://apptest-z7eyd.6170-apptest-z7eyd/images/风扇/fan2.jpg',
        text:'非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好非常好',
        user:'随机用户随机用户随机',
        headimg:'../../images/icon/zan.png',
        zan:'1'
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
    pophiden:1
  },
   // 左右滑动条移动
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  openpop: function (e) {
    this.setData({
      pophiden: 0
    })
  },
  closepop: function (e) {
    this.setData({
      pophiden : 1
    })
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
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(res)
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