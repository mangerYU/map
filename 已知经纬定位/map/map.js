// pages/map/map.js
var app = getApp()
var amapFile = require('../../../utils/amap-wx.js');
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    that.setData({
      latitude: options.lat,
      longitude: options.lng,
    });


    var myAmapFun = new amapFile.AMapWX({ key: "a793709c8f319cdd8bc4d3c82639a70c" });
    wx.getSystemInfo({
      success: function (data) {
        var height = data.windowHeight;
        var width = data.windowWidth;
        var size = width + "*" + height;
        var location = that.data.longitude + "," + that.data.latitude
        myAmapFun.getRegeo({
          iconPath: "https://mp.jsyyph.com/attachment/images/global/marker.png",
          iconWidth: 22,
          iconHeight: 32,
          location: location,
          success: function (data) {
            console.log(data)
            var marker = [{
              id: data[0].id,
              latitude: data[0].latitude,
              longitude: data[0].longitude,
              iconPath: data[0].iconPath,
              width: data[0].width,
              height: data[0].height
            }]
            that.setData({
              markers: marker
            });
            that.setData({
              latitude: data[0].latitude
            });
            that.setData({
              longitude: data[0].longitude
            });
            that.setData({
              textData: {
                name: data[0].name,
                desc: data[0].desc
              }
            })
          },
          fail: function (info) {
            // wx.showModal({title:info.errMsg})
          }
        })

      }
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