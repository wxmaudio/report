import {loadList} from '../../utils/request';
import api from '../../config/api';

const url = api.listAPI;
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
    /*list: [{
      id: 9,
      title: "婴儿沐浴秘诀",
      author: "转载",
      originalAuthor: "2",
      icon: "https://mmbiz.qlogo.cn/mmbiz_png/2rOr1xCIpmvEhdeQXk0HHC0En9rib0p3bTEqGIhLAtBs8nB4yqm1mJ6MedL6pYpibb6CicyCQOa6zpRGY5gHlvnIw/0?wx_fmt=png",
      writeType: 2,
      catId: 2,
      writeTime: "2018-06-25T02:22:52.000+0000",
      updateTime: "2018-06-25T02:23:04.000+0000",
      createdTime: "2018-06-25T02:23:04.000+0000",
      url: "http://mp.weixin.qq.com/s?__biz=MzIxMDE5OTIyOA==&mid=2247483664&idx=8&sn=858221ac0fd897ec8b1e1d3a3f73d76c&chksm=976976c3a01effd5cf4b0c93cf76e1075dc78cb404bda41c8ddfaf668ca6db49ec9f9eb3613a#rd"
      }]*/
  },
  getDetail: function(e){
    /* let url = "/pages/detail/index?id=" + e.currentTarget.dataset.id;
    wx.navigateTo({
      url
    });*/
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    loadList(url, {
      pageNum: 1,
      pageSize: 8,
      catId: 2
    }, this, function(context, res) {
      context.setData({ list: res.data});
      wx.hideLoading();
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