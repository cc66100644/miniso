// miniprogram/pages/goods/goods.js
import tool from "../../utils/tool.js";
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
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
      id:'',
      price:'',
      src:'',
      choose:'请选择'
    },
    colorChoose:[],
    select:[],
    cookie:false,
    num:1,
    aftersale:[
      {
        title:'无忧退款',
        text:'呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得'
      },
      {
        title: '无忧退款',
        text: '呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得'
      },
      {
        title: '无忧退款',
        text: '呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得'
      },
      {
        title: '无忧退款',
        text: '呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得得得呜呜呜呜的点点滴滴得得得'
      }
    ],
    hot:[],
    cartnum:0
  },
  // 底部弹窗
  show() {
    this.setData({ show: true });
    // console.log(this.data.goodsInfo.price)
    // console.log(this.data.goodsInfo.class)
    if(!this.data.cookie){
      // 初始化界面,组成select数组
      db.collection('goods').where({
        type:this.data.goodsInfo.type,
        class: this.data.goodsInfo.class
      }).get({
        success:res => {
          let myArray = res.data;
          let val = this.data.mychoose.id;
          let index;
          console.log(res.data)
          let temparr = []
          this.setData({
            colorChoose: myArray,
          })
          for (let i = 0; i < myArray.length;i++){
            temparr.push(false)
          }
          // 遍历
          for (var x in myArray){
            if (myArray[x]._id == val ){
              index = x
            }         
          }
          temparr[index] = true;
          this.setData({
            select: temparr
          })
        }
      })
    }
  },
  onClose() {
    this.setData({ show: false });
  },
  //记录当前购买的数量
  onChange:function(e){
    this.setData({
      num: e.detail
    })
  },
  // 点击选择
  select:function(e) {
    let temparr = this.data.select;
    let index = e.currentTarget.id;
    // 判断是否已经选择货品
    if (!temparr[index]){
      for (let i = 0; i < this.data.select.length; i++){
        temparr[i] = false
      }
      temparr[index] = !temparr[index]
      this.setData({
        select : temparr,
        mychoose: {
          id: this.data.colorChoose[index]._id,
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
          id: this.data.goodsInfo._id,
          price: this.data.goodsInfo.price,
          src: this.data.goodsInfo.src,
          choose: '请选择'
        },
        cookie: false
      })
    }

  },
  //商品服务
  onskip: function() {
    console.log(1)
    wx.navigateTo({
      url: '/pages/servicenotice/index',
    })
  },
  //商品页面跳转
  skip: function(e) {
    // console.log(e)
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: '../../pages/goods/goods?id=' + e.currentTarget.id,
    })
  },

  //加入购物车
  joinCart:function() {
    //当前购物车中的的总数
    // console.log(this.data.cartnum)
    // console.log(this.data.num)
    let sum = this.data.cartnum + this.data.num
    // console.log(sum)
    this.setData({
      cartnum: sum
    })
    //购物车中有的数量叠加，没有的就新增
    db.collection('cart').where({
      _openid: app.globalData.openid,
      goodsid: this.data.mychoose.id
    }).get({
      success:res=>{
        // console.log(res)
        if(res.data.length == 0){
          db.collection('cart').add({
            data: {
              goodsid: this.data.mychoose.id,
              num: this.data.num,
              hide:false,
              choose:true
            },
            success: function (res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              // console.log(res)
            },
          })
        }else{
          db.collection('cart').doc(res.data[0]._id).update({
            data:{
              num: (res.data[0].num + this.data.num)
            },
            success: function (res) {},
            fail: function (res) {}
          })
        }
      }
    })
    this.onClose()
    wx.showToast({
      title: '成功加入购物车',
      icon: 'success',
      duration: 1000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    //获取商品ID
    db.collection('goods').where({
      _id: options.id
    }).get({
      success:res => {
        // console.log( res.data[0])
        this.setData({
          goodsImg: [res.data[0].src],
          goodsInfo: res.data[0],
          mychoose: {
            id: res.data[0]._id,
            price: res.data[0].price,
            src: res.data[0].src,
            choose: '已选择: ' + res.data[0].name
          }
        })
        // console.log(this.data.goodsInfo)
      }
    })
    //大家都在买
    db.collection('goods').where({
      hot:true
    }).get({
      success:res =>{
          // console.log(res.data)
          this.setData({
            hot:res.data
          })
      }
    })
    //获取用户openid
    //获取购物车中的总数
    tool.getOpenid().then(res => {
      // console.log(res)
      let sum = 0;
      db.collection('cart').where({
        _openid:res
      }).get({
        success:arr=>{
          // console.log(arr.data)
          for(let i =0;i<arr.data.length;i++){
            // console.log('第'+i+'个:'+ arr.data[i].num)
            sum += arr.data[i].num
          }
          // console.log('总数'+ sum)
          this.setData({
            cartnum: sum
          })
        }
      })
    })
    
    
  },


  onClickIcon() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  onClickButton() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
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