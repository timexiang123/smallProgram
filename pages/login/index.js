// pages/login/index.js
import loginAndReg from '../../network/login.js';
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
  //提交表单
  toSubmit(e){
    console.log(e);
    this.loginAndRegister(e.detail.value)
  },
  //登录注册
  loginAndRegister(param){
    console.log(param);
    loginAndReg({
      url:"loginAndRegister",
      data:{
        username: param.username,
        password: param.password
      }
    }).then(res=>{
      console.log(res);
      if(res.data.status){
        wx.setStorage({
          key:"uuid",
          data:res.data.msg.uuid
        })
        getApp().globalData.username=res.data.msg.username;
        getApp().globalData.password = res.data.msg.password;
        getApp().globalData.avatar = res.data.msg.avatar;
        getApp().globalData.isLogined = true;
        console.log(getApp());
       wx.showToast({
         title: '登陆成功',
         icon: '',
         image: '',
         duration: 2000,
         success:(res)=>{
           console.log("成功");
           wx.reLaunch({
             url: '/pages/person/index',
           })
         }
       })
      }
    }).catch(err=>{
      console.log("请求数据失败",err);
      wx.showToast({
        title: '登陆失败',
        icon: '',
        image: '/static/img/error.png',
        duration: 2000,
      })
    })
  }
  
})