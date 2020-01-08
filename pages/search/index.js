// pages/search/index.js
import request from '../../network/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getData(query){
    wx.hideLoading("数据玩命加载中...")
    request({
      url: 'search_book',
      data: {
        q: query
      }
    }).then(res => {
      this.setData({
        books:res.data.books
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
    })
  },
  change(e){
    this.setData({
      value:e.detail.value
    });
  },
  //去搜索
  toSearch(e){
    this.setData({
      value:e.detail.value
    })
    this.getData(e.detail.value)
  },
  //取消搜索
  cancelSearch(){
    this.setData({
      value:'',
      books:[]
    });
  }
})