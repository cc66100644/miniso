// component/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,
      indicatorcolor: "rgba(255, 255, 255, .3)",
      indicatoractivecolor: "#ffffff",
      swiperCurrent: 0,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function (e) {
      // console.log(e);
      this.setData({
        swiperCurrent: e.detail.current   //获取当前轮播图片的下标
      })
    }
  }
})
