// components/common/share/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true 
  },
  properties: {
    openType:{
      type:String,
      value:''
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
    onGetUserInfo(e){
      this.triggerEvent('getUserInfo',{userInfo:e.detail.userInfo},{});
    }
    
  }
})
