// components/books/detail/info/description/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     summary:{
       type:String,
       value:''
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOpenAll: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openOrClose(){
      this.setData({
        isOpenAll:!this.data.isOpenAll
      });
    }
  }
})
