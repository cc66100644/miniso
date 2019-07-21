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
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,
      indicatorcolor: "rgba(255, 255, 255, .3)",
      indicatoractivecolor: "#ffffff"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
