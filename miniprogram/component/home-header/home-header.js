// component/home-header/home-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    user:{
      type:Object,
      value:[],
    },
    white:{
      type:Boolean,
      value:false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pophiden:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openpop: function (e) {
      this.setData({
        pophiden: 0
      })
    },
    closepop: function (e) {
      this.setData({
        pophiden: 1
      })
    },
  }
})
