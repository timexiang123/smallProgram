// components/index/commingSoon/index.js
import request from '../../../network/network.js'
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
    subjects: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData() {
      //发起网络请求
      wx.showLoading({
        title: '数据玩命加载中...',
      })
      request({
        url: 'top250',
        data: {
          start: 1,
          count: 10
        }
      }).then((res) => {
        this.setData({
          subjects: res.data.subjects
        })
        //成功之后设置缓存
        wx.setStorage({
          key: 'top250',
          data: this.data.subjects
        })
        wx.hideLoading()
      }).catch((err => {
        console.log(err)
      }))
    }
  },
  attached() {
    //看缓存里面有没有此数据，如果有就用缓存的，第一次去后端拉取数据，
    //以后就要用缓存的，减轻服务端渲染的压力
    wx.getStorage({
      key: 'top250',
      success: (res) => {
        //就从缓存数据里去取
        this.setData({
          subjects: res.data
        })
      },
      fail: (err) => {
        //没有缓存数据就去服务端拉取数据
        this.getData()
      }
    })
  }
})
