export const loadList = function (url, params, context, callback) {
  wx.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {   
      console.log(res, res.data); 
      // context.setData({ data: res.data.data});
      callback(context, res.data);
    }
  });
}
