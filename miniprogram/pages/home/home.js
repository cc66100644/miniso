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
    navMenu: [
      {
        src: '../../images/icon/shegnxian.png',
        name: "生鲜",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/yinliao.png',
        name: "饮料",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/shuiguo.png',
        name: "水果",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/jinkou.png',
        name: "进口食品",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/tiandian.png',
        name: "零食甜点",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/shucai.png',
        name: "蔬菜",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/jiulei.png',
        name: "酒水",
        url: "/test/test?title=test"
      },
      {
        src: '../../images/icon/rulei.png',
        name: "乳类",
        url: "/test/test?title=test"
      }
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