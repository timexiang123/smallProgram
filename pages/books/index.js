// pages/books/index.js
import request from '../../network/network.js'
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
    this.getDataByStorage('仙侠');
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
  onShareAppMessage: function (res) {
    console.log(123)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '文祥影院',
      path: '/page/index/index',
      imageUrl:"http://img2.imgtn.bdimg.com/it/u=4167880625,1742766913&fm=26&gp=0.jpg"
    }
  },
  //发起网络请求获取数据
  getDataByRequest(tag){
    wx.showLoading({
      title: "数据玩命加载中..."
    });
    request({
      url:"search_book",
      data:{
        tag
      }
    }).then(res=>{
      console.log(res);
      this.setData({
        booksList:res.data.books
      })
      wx.hideLoading();
      //请求数据成功后设置数据缓存
      wx.setStorage({
        key:tag,
        data:res.data.books
      })
    }).catch(err=>{
      console.log(err);
    })
  },
  changeTag(e){
    this.getDataByStorage(e.detail.value);
  },
  //从缓存中获取数据
  getDataByStorage(tag){
    wx.getStorage({
      key: tag,
      success: (res) => {
        this.setData({
          booksList: res.data
        });
      },
      fail: () => {
        this.getDataByRequest(tag);
      }
    })
  },
  //去图书详情页
  toBookDetail(e){
    wx.navigateTo({
      url: './detail/index?id=' + e.currentTarget.dataset.id,
    })
  }
})