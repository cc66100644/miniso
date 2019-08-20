import WeCropper from '../../component/we-cropper/we-cropper.js'
const device = wx.getSystemInfoSync()
const db = wx.cloud.database()
const app = getApp();

Page({
  data: {
    cropperOpt: {
      id: 'cropper',
      targetId: 'targetCropper',
      pixelRatio: device.pixelRatio, // 传入设备像素比
      width: device.windowWidth,  // 画布宽度
      height: device.windowWidth, // 画布高度
      scale: 2.5,
      zoom: 8
    },
    choose:true,
    content: '',
    cursor: 0
  },
  touchStart (e) {
    this.cropper.touchStart(e)
  },
  touchMove (e) {
    this.cropper.touchMove(e)
  },
  touchEnd (e) {
    this.cropper.touchEnd(e)
  },
  getCropperImage () {
    var that = this
    var num = '0' + Math.floor(Math.random() * 100 + 1) 
    var fileID =''
    this.cropper.getCropperImage(function (path, err) {
      if (err) {
        wx.showModal({
          title: '温馨提示',
          content: err.message
        })
      } else {
        // console.log(that.data.cursor)
        wx.showLoading({
          title: '上传中',
        })
        //上传照片到云存储
        wx.cloud.uploadFile({
          cloudPath: 'upload/' + app.globalData.openid + '/' + num + new Date().getTime() + '.png',
          filePath: path,
          success:res=>{
            // console.log(res)
            fileID = res.fileID
          }
        })
        setTimeout(function () {
          wx.hideLoading()
          db.collection('temp').add({
            data:{
              path: path,
              content: that.data.content,
              cursor: that.data.cursor,
              fileid: fileID
            }
          })
          .then(res=>{
            wx.redirectTo({
              url: '../uploader/uploader?fileID=' + fileID,
            })
          })  
        }, 1000)
      }
    })
  },
  select(){
    this.data.choose = !this.data.choose
    this.data.cropperOpt.height = this.data.choose ? device.windowWidth : device.windowWidth *3 /4
    this.setData({
      choose: this.data.choose,
      cropperOpt: this.data.cropperOpt
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (option) {
    // console.log(option)
    this.setData({
      content: option.content,
      cursor: option.cursor
    })
    const { cropperOpt } = this.data
    // var self = this
    this.cropper = new WeCropper(cropperOpt)
      wx.getImageInfo({
        src: option.paths,
        success:res => {
          // console.log(res)
          const src = res.path
          this.cropper.pushOrign(src)
        }
      })
  }
})
