// miniprogram/pages/cart/index.js
import tool from "../../utils/tool.js";
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    checked: true,
    cartgoods:[],
    totalprice:0
  },

  //购物车的删除
  onClose(e){
    let arr = this.data.cartgoods
    let index = e.currentTarget.id
    arr[index].hide = true
    this.setData({
      cartgoods: arr
    })
    db.collection('cart').doc(arr[index]._id).remove()
  },

  //单选
  oncheck(e) {
    let index = e.currentTarget.id
    //没选中的价格
    let price1 = (parseInt(this.data.totalprice) / 100 - this.data.cartgoods[index].price * this.data.cartgoods[index].num) * 100
    //选中的价格
    let price2 = (parseInt(this.data.totalprice) / 100 + this.data.cartgoods[index].price * this.data.cartgoods[index].num) * 100
    this.data.cartgoods[index].choose = e.detail
    this.setData({
      cartgoods: this.data.cartgoods,
      totalprice: this.data.cartgoods[index].choose ? price2 : price1
    })
    db.collection('cart').doc(this.data.cartgoods[index]._id).update({
      data: {
        choose: e.detail
      },
      success:res=>{
        //判断全选按钮状态
        db.collection('cart').where({
          choose: false
        }).get({
          success: res => {
            console.log(res.data)
            if (res.data.length != 0) {
              this.setData({
                checked: false
              })
            } else {
              this.setData({
                checked: true
              })
            }
          }
        })
      }
    })  
  },

  //全选
  allcheck(e) {
    let temp = 0;
    this.data.cartgoods.forEach(val => {
      val.choose = e.detail
      let price = !val.choose ? 0 : parseInt(val.price) * val.num
      temp += price
    })
    this.setData({
      cartgoods: this.data.cartgoods,
      checked: e.detail,
      totalprice: temp*100
    });
  },
  
  //商品数量计数
  onchange(e) {
    let price = this.data.totalprice / 100;
    let cartgood = this.data.cartgoods;
    let index = e.currentTarget.id;
    //通过调用服务器上的点击类的商品数量计算数量差价
    db.collection('cart').where({
      _id: cartgood[index]._id
    }).get({
      success:res=>{
        let shucha = e.detail - res.data[0].num; //前后次的数量差距
        let cj = shucha * cartgood[index].price; //差价
        console.log(cj)
        this.setData({
          totalprice: (price + cj)*100
        })
        //保存数量的变化
        db.collection('cart').doc(cartgood[index]._id).update({
          data: {
            num: e.detail
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取openID
    tool.getOpenid().then(res => {
      var temparr =[];
      var temp = 0;
      //查询购物车有没有内容
      db.collection('cart').where({
        _openid:res
      }).get({
        success:x=>{
          //查询货物的详细内容
          x.data.forEach(val =>{
            //合并货物和购物车的数据
            db.collection('goods').where({
              _id: val.goodsid
            }).get({
              success:res=>{
                var obj1 = val            //购物车
                var obj2 =res.data[0]     //商品
                var price = parseInt(obj2.price) * obj1.num
                //购物车和货物标的数据合并
                for (var key in obj1){
                  if (obj1.hasOwnProperty(key) === true) {
                    obj2[key] = obj1[key];
                  }
                }
                temparr.push(obj2)
                //判断选择状态
                if(!obj1.choose){
                  price = 0
                }
                //默认购物车中的所有商品的总价格
                temp += price
                this.setData({
                  cartgoods: temparr,
                  totalprice: temp * 100
                })
              }
            })
          })
        }
      })
      //判断全选按钮状态
      db.collection('cart').where({
        choose: false
      }).get({
        success: res => {
          if (res.data.length != 0) {
            this.setData({
              checked: false
            })
          }
        }
      })
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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