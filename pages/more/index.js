// pages/more/index.js
import request from '../../network/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    url:'',
    subjects:[],
    start:1,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = ''
    switch(options.title){
      case "即将上映":
        url = 'coming_soon'; break;
      case "top250排行榜":
        url = 'top250'; break;
      case "正在热映":
        url = "in_theaters"; break;
      default: break;
    }
    this.setData({
      title:options.title,
      url
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: '全部列表---'+this.data.title,
      success: (res) =>{
        wx.hideNavigationBarLoading()
        this.getData()
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
       this.setData({
         subjects:[],
         start:1
       })
       this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     this.data.start++
     this.getData(this.data.start)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getData(start = 1,count = 10){
    if (this.data.total && (start>Math.floor(this.data.total/10))){
     wx.showToast({
       title: '没有更多数据了',
       image: '/static/img/error.png',
       duration:2000
     })
    }else{
      wx.showLoading({
        title: '数据拼命加载中...',
      })
      //向后端发送请求数据
      request({ url: this.data.url, data: { start, count } }).then(res => {
        this.data.subjects = this.data.subjects.concat(res.data.subjects)
        this.setData({
          subjects: this.data.subjects,
          total: res.data.total
        })
        wx.hideLoading()
      }).catch(err => {
        console.log(err)
      })
    }
 
  }
})