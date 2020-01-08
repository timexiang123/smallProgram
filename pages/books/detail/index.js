// pages/books/detail/index.js
import request from '../../../network/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataByStorage(options.id);
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
    return {
      title: '文祥影院',
      path: '/pages/index/index',
      imageUrl:"/static/img/meinv.jpg"
    }
  },
  getDataByRequest(id){
    wx.showLoading({
      title: '数据玩命加载中...',
    })
    request({
      url:"book_subject",
      data:{
        id
      }
    }).then(res=>{
      res.data.isOpenAll = false;
      this.setData({
        bookDetail:res.data
      })
      wx.setStorage({
        key: res.data.id,
        data: res.data,
      })
      wx.hideLoading();
    }).catch(err=>{
      console.log("数据请求出错，详情请见:",err);
    })
  },
  getDataByStorage(id){
    wx.getStorage({
      key: id,
      success:(res)=>{
        this.setData({
          bookDetail: res.data
        })
      },
      fail:(err)=>{
        this.getDataByRequest(id);
      }
    })
  }
})