// pages/detail/index.js
var WxParse = require('../../lib/wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    title: '汽车节能对比',
    time: '2018-4-23',
    content: '<p>werewrwerewcontent</p><div><img src="http://n1.map.pg0.cn/T1zMYQB7Ev1RCvBVdK-321-192-3.jpg"/></div>',
    author:'beart'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    WxParse.wxParse('content', 'html', that.data.content, that, 5);
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
  
  }
})