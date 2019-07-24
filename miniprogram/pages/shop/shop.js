// miniprogram/pages/shop/shop.js
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
    swiperCurrent: 0,
    navName: [
      '推荐', '新品', '背包', '餐厨', '零食', '风扇', '水杯', '娃娃', '香水'
    ],
    selected: [true, false, false, false, false, false, false, false, false]
  },
  click:function(e){
    let index = e.target.id
    let selected = this.data.selected
    let temparr = []
    for (let i = 0; i < selected.length;i++){
      selected[i] = false
    }
    selected[index] = !selected[index] 
    this.setData({
      selected: selected
    })
    console.log('现' + selected)
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
    db.collection('swiper')
      .get()
      .then(res => {
        // console.log(res)
        this.setData({
          imgUrls: res.data
        })
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