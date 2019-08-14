//index.js
//获取应用实例
const app = getApp();
const db = wx.cloud.database()
Page({
    data: {
        uploaderList: [],
        uploaderNum:0,
        showUpload:true,
        getpage:0,
        content:'',
        cursor:0,
        pathslist:[]
    },
  // 删除图片
  clearImg:function(e){
      var nowList = [];//新数据
      var uploaderList = this.data.uploaderList;//原数据
      var pathslist = this.data.pathslist;
      var target = uploaderList[e.currentTarget.dataset.index]; //目标数据
      var file = pathslist[e.currentTarget.dataset.index]; //目标文件名
      //数据库中删除目标数据
      db.collection('temp').where({
        path: target
      }).get({
        success:res => {
          // console.log(res.data[0]._id)
          db.collection('temp').doc(res.data[0]._id).remove()
        }
      })
      wx.cloud.deleteFile({
        fileList: [file],
        success: res => {}
      })
      //删除后的页面显示
      for (let i = 0; i < uploaderList.length;i++){
          if (i == e.currentTarget.dataset.index){
              continue;
          }else{
              nowList.push(uploaderList[i])
          }
      }
      this.setData({
          uploaderNum: this.data.uploaderNum - 1,
          uploaderList: nowList,
          showUpload: true
      })
      //删除最后张照片后返回初始夜
    if (nowList.length == 0){
        wx.navigateBack({
          delta:this.data.getpage
        })
      }
  },
  //展示图片
  showImg:function(e){
      var that=this;
      wx.previewImage({
          urls: that.data.uploaderList,
          current: that.data.uploaderList[e.currentTarget.dataset.index]
      })
  },
  //文本输入
  input(e){
    this.setData({
      content:e.detail.value,
      cursor: e.detail.cursor
    })
  },
  //选择要上传的图片
  upload: function(e) {
      var that = this;
      wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: res=> {
              // tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths
              wx.navigateTo({
                url: '../normal/normal?paths=' + tempFilePaths[0] + '&content=' + this.data.content + '&cursor=' + this.data.cursor,
              })
          }
      })
  },
  // 上传提交
  click: function(e) {
    // console.log(this.data.uploaderList)
    var url = this.data.uploaderList
    var userinfo = app.globalData.userInfo
    var pathslist= []
    var time = new Date().getTime()
    // console.log(num)
    if(this.data.content != ''){
      wx.showLoading({
        title: '上传中',
      })
    console.log(this.data.pathslist)
      db.collection("comment").add({
        data: {
          url: this.data.pathslist,
          text: this.data.content,
          userinfo: userinfo,
          time: time,
          zan:0,
          other:[]
        }
      })
      setTimeout(function () {
        wx.hideLoading()
        // console.log(time)
        wx.redirectTo({
          url: '../article/article?time=' + time,
        })
      }, 2000)
    } else{
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '请说点什么吧',
        success(res) {}
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
      // 初始刷新相关图片
      db.collection('temp').where({
        _openid: app.globalData.openid
      }).get({
        success:res=>{
          // console.log(res.data)
          res.data.forEach(val =>{
            this.data.uploaderList.push(val.path)
            this.data.pathslist.push(val.fileid)
          })
          this.setData({
            uploaderList: this.data.uploaderList,
            content: res.data[res.data.length-1].content,
            cursor: res.data[res.data.length-1].cursor
          })
        }
      })
      // 当前的上传图片的数量
      db.collection('temp').where({
        _openid: app.globalData.openid
      }).count({
        success: res => {
          this.setData({
            uploaderNum: res.total
          })
        }
      })
      // 获取当前的页面栈
      // console.log(getCurrentPages())
      this.setData({
        getpage: getCurrentPages().length
      })
      //判断是否显示添加图片按钮
      if (this.data.uploaderNum >= 10){
        this.setData({
          showUpload:false
        })
      }
  },
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
    db.collection('temp').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        res.data.forEach(val=>{
          db.collection('temp').doc(val._id).remove()
        })
      }
    })
  }


})