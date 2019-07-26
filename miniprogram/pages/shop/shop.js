// miniprogram/pages/shop/shop.js
import tool from "../../utils/tool.js";
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
    selected: [true, false, false, false, false, false, false, false, false],
    swiperarr: [],
    guaranteeText: [
      '名创优品自营', '30天无忧退货', '2个工作日内到货'
    ],
    bestGoods: [],
    bgc: ['bestGoodsItem-green', 'bestGoodsItem-blue', 'bestGoodsItem-blue','bestGoodsItem-green']
  },
  click: function(e) {
    // console.log("123", this.data.swiperarr)
    let index = e.target.id
    // console.log(typeof index)
    let selected = this.data.selected
    for (let i = 0; i < selected.length; i++) {
      selected[i] = false
    }
    selected[index] = !selected[index]
    this.setData({
      selected: selected
    })
    // //控制当前的轮播图
    // let num = parseInt(index) + 1;
    // let temp = num > 1 ? false : true;
    // console.log(num)
    // tool.swiperImage(num).then(res => {
    //   console.log(res)
    //     this.setData({
    //       imgUrls: res,
    //       indicatorDots: temp
    //     })     
    // })
    let temparr = [];
    let num = parseInt(index) + 1;
    let temp = num > 1 ? false : true;
    this.data.swiperarr.forEach(val => {
      if (val.type == num) {
        temparr.push(val)
      }
    })
    this.setData({
      imgUrls: temparr,
      indicatorDots: temp
    })
    // console.log(temparr)
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
    // 外部调用控制轮播图
    // tool.swiperImage(1).then(res =>{
    //   this.setData({
    //     imgUrls:res
    //   })
    // })
    tool.swiperImage().then(res => {
      let temparr = [];
      res.forEach(val => {
        if (val.type == 1) {
          temparr.push(val)
        }
      })
      // console.log(temparr)
      this.setData({
        swiperarr: res,
        imgUrls: temparr
      })
    })
    db.collection('goods').where({
      best:true
    }).get({
      success:res => {
        console.log(res.data)
        this.setData({
          bestGoods: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // this.onLoad()
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