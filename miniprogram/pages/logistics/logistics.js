// miniprogram/pages/logistics/logistics.js
// import tool from "../../utils/tool.js";
const db = wx.cloud.database()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      img: '',
      name: '11',
      cardlevel: '普卡',
      erweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/erweima.png',
      yiweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/cnaidc.png'
    },
    latitude: null,
    longitude: null,
    guaranteeText: [
      '名创优品自营', '30天无忧退货', '2个工作日内到货'
    ],
    navName: [
    '日用品', '娃娃', '餐厨', '背包', '零食', '风扇', '香水'
    ],
    selected: [true, false, false, false, false, false, false],
    goodsinfo:[],
  },
  click: function (e) {
    //页签切换
    let index = e.target.id
    let selected = this.data.selected
    for (let i = 0; i < selected.length; i++) {
      selected[i] = false
    }
    selected[index] = !selected[index]
    this.setData({
      selected: selected
    })
    db.collection('goods').where({
      type: +(index) + 1
    }).get({
      success:res => {
        this.setData({
          goodsinfo: res.data
        })
      }
    })
  },
  //商品页面跳转
  skip: function (e) {
    // console.log(e)
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: '../../pages/goods/goods?id=' + e.currentTarget.id,
    })
  },
  // 购物车跳转
  cart(){
    wx.navigateTo({
      url: '../cart/index',
    })
  },
  // 购物车加1
  add(e){
    db.collection('cart').where({
      _openid:app.globalData.openid,
      goodsid:e.currentTarget.id
    }).get({
      success:res=>{
        // console.log(res.data)
        if(res.data.length == 0){
          db.collection('cart').add({
            data: {
              goodsid: e.currentTarget.id,
              num: 1,
              hide: false,
              choose: true
            },
            success: function (res) {
              wx.showToast({
                title: '购物车+1',
                duration:1000
              })        
            }
          })
        } else {
          db.collection('cart').doc(res.data[0]._id).update({
            data: {
              num: (res.data[0].num + 1)
            },
            success: function (res) { 
              wx.showToast({
                title: '购物车+1',
                duration: 1000
              })     
            },
            fail: function (res) { }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息，头像名称显示
    this.setData({
      userInfo: {
        img: app.globalData.userInfo.avatarUrl,
        name: app.globalData.userInfo.nickName,
        cardlevel: '普卡',
        erweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/erweima.png',
        yiweima: 'cloud://apptest-z7eyd.6170-apptest-z7eyd-1259660366/icon/cnaidc.png',
      },
      latitude: app.globalData.latitude,
      longitude: app.globalData.longitude
    })

    // let goodsType = parseInt(index) + 1
    db.collection('goods').where({
      type:1
    }).get({
      success:res=>{
        this.setData({
          goodsinfo:res.data
        })
      }
    })

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