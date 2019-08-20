// component/community/community.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:Object,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(e){
      wx.navigateTo({
        url: '../article/article?time=' +  e.currentTarget.id,
      })
    }
  }
})
