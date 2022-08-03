// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifFlag: false,
    favList: []
  },
  go(e) {
    let name = e.currentTarget.dataset.foodtitle
    wx.navigateTo({
      url: '/pages/food/food?foodtitle=' + name,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let that = this
    wx.getStorage({
      key: 'favList',
      success(res) {
        if(res.data.length > 0) {
          that.setData({
            ifFlag: true,
            favList: res.data
          })
          console.log('触发成功');
        }
        else {
          console.log('失败');
        }
      },
      fail() {
        that.setData({
          ifFlag: false
        })
      }
    })
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