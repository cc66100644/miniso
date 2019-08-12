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
    choose:true
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
    this.cropper.getCropperImage(function (path, err) {
      if (err) {
        wx.showModal({
          title: '温馨提示',
          content: err.message
        })
      } else {
        // wx.previewImage({
        //   current: '', // 当前显示图片的http链接
        //   urls: [path] // 需要预览的图片http链接列表
        // })
        // console.log(path)
        db.collection('temp').add({
          data:{
            path: path
          }
        })
        wx.navigateTo({
          url: '../uploader/uploader',
        })
        
      }
    })
  },
  select(){
    this.data.choose = !this.data.choose
    // this.data.cropperOpt.width = device.windowWidth * 3 / 4
    this.data.cropperOpt.height = this.data.choose ? device.windowWidth : device.windowWidth *3 /4
    this.setData({
      choose: this.data.choose,
      cropperOpt: this.data.cropperOpt
    })
  },
  // uploadTap () {
  //   const self = this

  //   wx.chooseImage({
  //     count: 1, // 默认9
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //     success (res) {
  //       const src = res.tempFilePaths[0]
  //       console.log(src)
  //       self.cropper.pushOrign(src)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (option) {
    // console.log(this.data)
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
