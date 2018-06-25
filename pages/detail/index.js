// pages/detail/index.js
import WxParse from '../../lib/wxParse/wxParse.js';
import {loadList} from '../../utils/request';
import api from '../../config/api';
const url = api.listAPI;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
    /*
    article: { 
      id: 1,
      title: "快充电动汽车全面分析——百亿市场，小快充崛起",
      author: "史晨星",
      originalAuthor: "史晨星",
      icon: "https://mmbiz.qlogo.cn/mmbiz_jpg/Mw08flibRhVcmyZp1yZ1hib9lSt7wlGzUf0oibPficHKZxNcFiccCIaEw64yaQJGojgia3q6VqibhlX8AnDt9HolZsptA/0?wx_fmt=jpeg",
      writeType: 1,
      catId: 1,
      writeTime: "2018-06-23T10:53:12.000+0000",
      updateTime: "2018-06-25T02:29:33.000+0000",
      createdTime: "2018-06-23T10:53:17.000+0000",
      url: "http://mp.weixin.qq.com/s?__biz=MzUzNDU5MDQxNg==&mid=2247484907&idx=1&sn=a03e1317ae964a7cd5be154b62623613&chksm=fa932354cde4aa42074fd90062b86a995b0f1ee082a403b413f041ae25fb86d47cedb485cd3e#rd"
    }
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log('options:', options);
    wx.showLoading({
      title: '加载中'
    });
    loadList(url + '/'+ options.id,
    {}, 
    this, 
    function(context, res) {
      context.setData({article: res.data});
      // let content = '<p>werewrwerewcontent</p><div><img src="http://n1.map.pg0.cn/T1zMYQB7Ev1RCvBVdK-321-192-3.jpg"/></a></div>'
      // WxParse.wxParse('content', 'html', content, that, 5);
      wx.hideLoading();
    })
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