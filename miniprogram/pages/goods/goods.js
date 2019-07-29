// miniprogram/pages/goods/goods.js
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
    indicatorcolor: "rgba(20, 20, 20, .3)",
    indicatoractivecolor: "#ffffff",
    goodsImg:[],
    goodsInfo:{},
    show: false,
    mychoose:{
      price:'',
      src:'',
      choose:'请选择'
    },
    colorChoose:[],
    select:[],
    cookie:false
  },
  // 弹窗
  show(){
    this.setData({ show: true });
    // console.log(this.data.goodsInfo.price)
    // console.log(this.data.goodsInfo.class)
    if(!this.data.cookie){
      // 初始化界面
      db.collection('goods').where({
        type:this.data.goodsInfo.type,
        class: this.data.goodsInfo.class
      }).get({
        success:res => {
          // console.log(res.data)
          let temparr = []

          this.setData({
            colorChoose: res.data,
          })
          for (let i = 0; i < res.data.length;i++){
            temparr.push(false)
          }
          // console.log(temparr)
          this.setData({
            select: temparr
          })
        }
      })
      this.setData({
        mychoose: {
          price: this.data.goodsInfo.price,
          src: this.data.goodsInfo.src,
          choose: '请选择'
        }
      })
    }
  },
  onClose() {
    this.setData({ show: false });
  },
  // 点击选择
  select:function(e){
    let temparr = this.data.select
    let index = e.currentTarget.id
    // 判断是否已经选择货品
    if (!temparr[index]){
      for (let i = 0; i < this.data.select.length; i++){
        temparr[i] = false
      }
      temparr[index] = !temparr[index]
      this.setData({
        select : temparr,
        mychoose: {
          price: this.data.colorChoose[index].price,
          src: this.data.colorChoose[index].src,
          choose: '已选择: ' + this.data.colorChoose[index].name
        },
        cookie:true
      })
    } else {
      temparr[index] = !temparr[index]
      this.setData({
        select: temparr,
        mychoose: {
          price: this.data.goodsInfo.price,
          src: this.data.goodsInfo.src,
          choose: '请选择'
        },
        cookie: false
      })
    }
  //  console.log(this.data.colorChoose[index])
  },
  //
  onskip:function(){
    console.log(1)
    wx.navigateTo({
      url: '/pages/servicenotice/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    db.collection('goods').where({
      _id: options.id
    }).get({
      success:res => {
        // console.log(res.data)
        this.setData({
          goodsImg: [res.data[0].src],
          goodsInfo: res.data[0]
        })
        // console.log(this.data.goodsInfo)
      }
    })
  },
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
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