// pages/editInfo/index.js
import login from '../../network/login.js'
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
  //更改个人信息
  toUpdateInfo(e){
    const {nickname,gender,age} = e.detail.value;
    wx.showModal({
      title: '更改个人信息',
      content: '确认修改',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success:(res)=>{
        if(res.confirm){
          getApp().globalData.username = nickname;
          getApp().globalData.gender = gender;
          getApp().globalData.age = age;
          wx.navigateBack({
            
          })
        }
      }
    })
  }
})