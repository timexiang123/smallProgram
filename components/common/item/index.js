// components/common/item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemObj:{
      type:Object,
      value:{}
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
    //去详情页
    toDetail(e){
      wx.navigateTo({
        url: '/pages/detail/index?id='+e.currentTarget.dataset.id
      })
    }
  }
})
