// components/common/chooseImage/index.js
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
    imgList: ['/static/img/qq.png', '/static/img/weixin.png', '/static/img/weibo.png','/static/img/tencent.png']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(){
      this.triggerEvent('cancel',{},{});
    },
    //选择图片
    chooseImage(){
      wx.chooseImage({
        count: 4,
        sizeType: ['original'],
        sourceType: ['album'],
        success: (res) => {
          this.setData({
            imgList: res.tempFilePaths
          });
          const url = res.tempFilePaths[res.tempFilePaths.length-1];
          wx.uploadFile({
            url: 'https://h5sm.com/uni/users/actionAvatar',
            filePath: url,
            name: 'pic',
            success:(result)=>{
              console.log(JSON.parse(result.data));
              this.triggerEvent('changeAvatar', { avatar: JSON.parse(result.data).msg.avatar},{})
            },
            error(err){
              console.log("上传图片失败",err);
            }
          })
        }
      })
    }
  }
})
