import baseUrl from './base.js'
console.log(baseUrl);
//实现对wx.request函数的封装
export default function(options){
  if(typeof options !=='object'){
    throw Error("所传options必须为对象");
  }
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl + options.url,
      data: options.data || {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail:reject
    })
  })
}