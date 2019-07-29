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

    navName: [
      '推荐', '新品', '日用品', '娃娃', '餐厨', '背包', '零食', '风扇','香水'
    ],
    selected: [true, false, false, false, false, false, false, false, false],
    swiperarr: [],
    guaranteeText: [
      '名创优品自营', '30天无忧退货', '2个工作日内到货'
    ],
    bestGoods: [],
    bgc: ['bestGoodsItem-green', 'bestGoodsItem-blue', 'bestGoodsItem-blue','bestGoodsItem-green'],
    newGood:[],
    hotRecommend:[],
    goodsInfo:[],
    goodsInfoTitle: ''
  },
  //页签切换页面
  click: function(e) {
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
    //轮播图
    let temparr = []; // 临时数组
    let swiperType = parseInt(index) + 1; //轮播图类型和页面的对应
    let temp = swiperType > 1 ? false : true; //判断是否是第一页推荐页
    // console.log(this.data.swiperarr)
    //获取同类新的轮播图type
    this.data.swiperarr.forEach(val => {
      if (val.type == swiperType) {
        temparr.push(val)
      }
    })
    this.setData({
      imgUrls: temparr,
      indicatorDots: temp
    })

    //切页返回顶部
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
    //各页签的商品
    let goodsType = parseInt(index) + 1;
    switch (goodsType){
      case 1:
        tool.maxClassNum(goodsType).then(res => {
          let arr = []
          for (var i = 0; i < res; i++) {
            db.collection('goods').where({
              recommend: true
            }).get({
              success: xxx => {
                // console.log(xxx.data)
                arr.push(xxx.data)
                this.setData({
                  aaaa: arr,
                  goodsInfoTitle:'猜你喜欢'
                })
              }
            })
          }
        })
        break;
      case 2:
        tool.maxClassNum(goodsType).then(res => {
          let arr = []
          for (var i = 0; i < res; i++) {
            db.collection('goods').where({
              new: true
            }).get({
              success: xxx => {
                arr.push(xxx.data)
                this.setData({
                  aaaa: arr,
                  goodsInfoTitle: '人气新品'
                })
              }
            })
          }
        })
        break;
      default:
        tool.maxClassNum((goodsType-2)).then(res => {
          let arr = []
          for (var i = 0; i < res; i++) {
            db.collection('goods').where({
              type: goodsType - 2,
              class: i + 1
            }).get({
              success: xxx => {
                // console.log(xxx.data)
                arr.push(xxx.data)
                this.setData({
                  aaaa: arr,
                  goodsInfoTitle: this.data.navName[parseInt(index)]
                })
              }
            })
          }
        })
    }
  },
  // 左右滑动
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  //商品页面跳转
  skip:function(e){
    // console.log(e)
    // console.log(e.currentTarget)
    wx.navigateTo({
      url: '../../pages/goods/goods?id=' + e.currentTarget.id ,
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

    //轮播图
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
    // 品牌甄选
    db.collection('goods').where({
      best:true
    }).get({
      success:res => {
        // console.log(res)
        this.setData({
          bestGoods: res.data
        })
      }
    })
    //新品首发
    db.collection('goods').where({
      recommend:true,
      new: true
    }).get({
      success: res => {
        // console.log(res)
       this.setData({
         newGood: res.data
       })
      }
    })
    //人气推荐
    db.collection('goods').where({
      recommend: true,
      hot: true
    }).get({
      success: res => {
        // console.log(res)
        this.setData({
          hotRecommend: res.data
        })
      }
    })
    //推荐页初始商品
    tool.maxClassNum(1).then(res => {
      let arr = []
      for (var i = 0; i < res; i++) {
        db.collection('goods').where({
          recommend: true
        }).get({
          success: xxx => {
            arr.push(xxx.data)
            this.setData({
              aaaa: arr,
              goodsInfoTitle: '猜你喜欢'
            })
          }
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