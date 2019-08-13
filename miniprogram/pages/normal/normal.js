import WeCropper from '../../component/we-cropper/we-cropper.js'
const device = wx.getSystemInfoSync()
const db = wx.cloud.database()

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
    this.cropper.getCropperImage(function (path, err) {
      if (err) {
        wx.showModal({
          title: '温馨提示',
          content: err.message
        })
      } else {
        wx.showLoading({
          title: '剪裁中',
        })
        setTimeout(function () {
          wx.hideLoading()
          db.collection('temp').add({
            data:{
              path: path,
              content: that.data.content,
              cursor: that.data.cursor
            }
          })
          .then(res=>{
            wx.redirectTo({
              url: '../uploader/uploader?path=' + path,
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
