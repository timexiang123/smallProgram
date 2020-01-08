// pages/person/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   userAvatar:'',
   avatar:'',
   isLogined:false,
   username:'',
   isChooseImageShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userAvatar',
      success:(res)=>{
        this.setData({
          userAvatar:res.data
        });
      }
    });
    this.setData({
      isLogined: getApp().globalData.isLogined,
      avatar: getApp().globalData.avatar,
    });
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
    this.setData({
      username: getApp().globalData.username || '不留名',
      gender: getApp().globalData.gender || '男',
      age: getApp().globalData.age || 24
    });
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
  //获取用户授权信息
  onGetUserInfo(e){
   this.setData({
     userAvatar: e.detail.userInfo.avatarUrl
   })
  wx.setStorage({
    key: 'userAvatar',
    data: this.data.userAvatar
  })
  },
  //去登录
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  //去更改信息
  toEditInfo(){
    wx.navigateTo({
      url: '/pages/editInfo/index',
    })
  },
 showChooseImage(){
   this.setData({
     isChooseImageShow:true
   });
 },
 cancel(e){
   this.setData({
     isChooseImageShow: false
   });
 },
  changeAvatar(e){
   this.setData({
     avatar:e.detail.avatar,
     isChooseImageShow: false
   })
  },
  out(){
    this.setData({
      isLogined:false
    });
  }
})