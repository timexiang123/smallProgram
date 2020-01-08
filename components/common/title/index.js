// components/index/title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String
    },
    channelName:{
      type:String
    },
    isHidden:{
      type:Boolean,
      value:false
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
    toMore(){
      wx.navigateTo({
        url: '/pages/more/index?title='+this.properties.channelName
      })
    }
  }
})
