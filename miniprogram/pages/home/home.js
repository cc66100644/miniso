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
      cardlevel: '普卡'
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
      '背包', '餐厨', '零食', '风扇', '水杯', '娃娃', '香水'
    ]
  },
   // 左右滑动条移动
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
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