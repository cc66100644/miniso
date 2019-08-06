// miniprogram/pages/image/index.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    width: 300,//宽度
    height: 300,//高度
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options
    //获取到image-cropper对象
    this.cropper = this.selectComponent("#image-cropper");
    //开始裁剪
    this.setData({
      src: "https://6170-apptest-z7eyd-1259660366.tcb.qcloud.la/images/advert/170f0d86df327d64.jpg?sign=26098933be32f9ba4f18716465511698&t=1565098021",
    });
  },
  cropperload(e) {
    console.log("cropper初始化完成");
  },
  loadimage(e) {
    console.log("图片加载完成", e.detail);
    wx.hideLoading();
    //重置图片角度、缩放、位置
    this.cropper.imgReset();
  },
  clickcut(e) {
    console.log(e.detail);
    //点击裁剪框阅览图片
    wx.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
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