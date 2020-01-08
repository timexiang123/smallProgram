// components/books/classify/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
    tags: [
      '仙侠',
      '言情',
      '玄幻',
      '穿越',
      '异灵',
      '游戏',
      '军事',
      '金融',
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTag(e){
      this.setData({
        currentIndex:e.currentTarget.dataset.index
      });
      this.triggerEvent('changeTag',{value:this.data.tags[this.data.currentIndex]})
    }
  }
})
