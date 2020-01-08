// components/common/star/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     score:{
       type:Number,
       value:0
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
     scoreArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  attached(){
   let interger = Math.floor(this.properties.score/2);
   for(let i=0;i<interger;i++){
     this.data.scoreArr.push("actived");
   }
    if ((this.properties.score / 2) - interger>=0.5){
      this.data.scoreArr.push("half_actived");
    }
   while(this.data.scoreArr.length<5){
     this.data.scoreArr.push("unactived");
   }
   this.setData({
     scoreArr:this.data.scoreArr
   });
  }
})
