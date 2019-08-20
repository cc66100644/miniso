// miniprogram/pages/article/article.js
const app = getApp();
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
    
    userinfo:[],
    url:[],
    content:'',
    zan:0,
    other: [],
    cursor:'',

    hide:true,
    scactive: false,
    dzactive:false,
    sc: 'https://6170-apptest-z7eyd-1259660366.tcb.qcloud.la/icon/shoucang.png?sign=c833bf76aab7df26d4059e50873aa835&t=1565886116',
    scon:'https://6170-apptest-z7eyd-1259660366.tcb.qcloud.la/icon/shoucangon.png?sign=9631c542479f4f19223e41285f4fb2a0&t=1565886175',
    dzon:'https://6170-apptest-z7eyd-1259660366.tcb.qcloud.la/icon/dianon.png?sign=3af98cca88595748939f7f93a6388d44&t=1565886190',
    dz: 'https://6170-apptest-z7eyd-1259660366.tcb.qcloud.la/icon/dian.png?sign=d56d2b3b8b6815f7fc8557504c36f849&t=1565886204'         
   
  },
  click(e){
    console.log(e)
    this.hide = !this.hide
    this.setData({
      hide:this.hide
    })
  },
  zan(){
    var dz = this.data.dzactive
    dz = !dz

    // console.log(dz)
    if (dz){
      this.setData({
        zan: this.data.zan + 1
      })
    } else {
      this.setData({
        zan: this.data.zan - 1
      })
    }
    this.setData({
      dzactive: dz
    })

  },
  sc() {
    //点击变色
    this.data.scactive = !this.data.scactive
    this.setData({
      scactive: this.data.scactive
    })
    //加入收藏或者移除收藏
    if (this.data.scactive){
      db.collection('mysc').add({
        data:{
          articleID: this.data.articleID
        }
      })
    } else{
      db.collection('mysc').where({
        articleID: this.data.articleID,
        _openid: app.globalData._openid
      }).get({
        success:res =>{
          db.collection('myse').doc(res.data[0]._id).remove()
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('comment').where({
      time: +(options.time)
      // time: 1566305880566
    }).get({
      success:res => {
        var temparr = []
        console.log(res.data[0]._id)
        if (res.data[0].other.length > 5){
          for (let i = res.data[0].other.length-1 ; i > res.data[0].other.length - 6; i--){
            temparr.push(res.data[0].other[i])
            this.setData({
              other: temparr
            })
          }
        } else {
          for (let i = res.data[0].other.length-1 ; i >= 0; i-- ){
            temparr.push(res.data[0].other[i])
            this.setData({
              other: temparr
            })
          }
        }
        // 获取图片的零食地址 用于图片的显示
        wx.cloud.getTempFileURL({
          fileList: res.data[0].url,
          success: res => {
            console.log(res.fileList)
            let temp= []
            res.fileList.forEach(val=>{
              temp.push(val.tempFileURL)
              this.setData({
                url: temp
              })
            })
          }
        })
        console.log(1)
        this.setData({
          url:res.data[0].url,
          content:res.data[0].text,
          zan: res.data[0].zan,
          userinfo: res.data[0].userinfo,
          cursor: res.data[0].cursor
        })
        this.setData({
          

          
        })
      }
    })
    // console.log(app.globalData.userInfo)
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