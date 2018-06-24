// research.js
//获取应用实例
const app = getApp();
const RESEARCH_URL = "http://47.104.85.144/article?pageNum=1&pageSize=2&catId=1";
function loadList(url, params, context, callback) {
  wx.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {   
      console.log(res, res.data); 
      context.setData({ list: res.data.data});
      callback();
    }
  });
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []/*[
      {
        "id": 2,
        "title": "发到手",
        "author": "发送到",
        "originalAuthor": "反倒是",
        "icon": "http://ljljljkjkjljkj",
        "writeType": 2,
        "catId": 123,
        "writeTime": "2018-06-23T11:24:04.000+0000",
        "updateTime": "2018-06-23T11:24:26.000+0000",
        "createdTime": "2018-06-23T11:24:26.000+0000"
      },
      {
        id: "http://www.lovelycn.cn/stwm/detail/image/20180517/1000600000015041526520960129422207_1.html",
        title: "废弃物装扮美丽乡村废弃物装扮美丽乡村废弃物装扮美丽乡村废弃物装扮美丽乡村废弃物装扮美丽乡村",
        description: "",
        icon: "http://img1.daguan.com/group1/M00/18/70/CgrZE1r83H-Ad_tqAAMNerH8VKw419.jpg",
        originalAuthor: "浙江在线",
        time: "2018-05-17 09:36:00",
        duration: "",
        letvUrl: null,
        leshidianbo: null,
        type: "3",
        newsType: "5",
        tag: "浙江,农村,美丽乡村,装饰",
        url: "http://m.lovelycn.cn/app_detail.html?id=8E4A912C54052FC52A33AF5038F3330B054543FD7F3F732806F7DD57A0621A31A2E12D9B2EB4A57176B072BBE24AEA92B0E7A13519A9A50836D6A1B734F531AD8C5B33C452AFE3CEB66CC52E94AD0506BE2D6952A5F72D404BB069FF93F945EC",
        videoUrl: ""
      }, {
        id: "http://www.lovelycn.cn/stwm/detail/image/20180517/1000600000015041526520960129422207_1.html",
        videoApi: null,
        title: "废弃物装扮美丽乡村666",
        description: "",
        icon: "http://img1.daguan.com/group1/M00/18/70/CgrZE1r83H-Ad_tqAAMNerH8VKw419.jpg",
        originalAuthor: "浙江在线",
        time: "2018-05-17 09:36:00",
        type: "3",
        newsType: "5",
        url: "http://m.lovelycn.cn/app_detail.html?id=8E4A912C54052FC52A33AF5038F3330B054543FD7F3F732806F7DD57A0621A31A2E12D9B2EB4A57176B072BBE24AEA92B0E7A13519A9A50836D6A1B734F531AD8C5B33C452AFE3CEB66CC52E94AD0506BE2D6952A5F72D404BB069FF93F945EC"
      }
    ]*/
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    loadList(RESEARCH_URL, {
      pageNum: 1,
      pageSize: 2,
      catId: 1
    }, this, function() {
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