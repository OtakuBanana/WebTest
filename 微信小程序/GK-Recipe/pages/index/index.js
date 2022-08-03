Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: [
      {
        title: '养生早餐',
        url: 'foodList',
        imgSrc: '/imgs/养生早餐.jpg',
        txt: '共45个食谱 浏览18574 收藏13940'
      },
      {
        title: '特色小炒',
        url: 'foodList2',
        imgSrc: '/imgs/特色小炒.jpg',
        txt: '共76个食谱 浏览16374 收藏12964'
      }
    ]
  },
  go(e) {
    let name = e.currentTarget.dataset.url
    wx.navigateTo({
      url: '/pages/' + name + '/' + name,
    })
  },
  goToDetails_1(){
    console.log
    wx.navigateTo({
      url: '/pages/newFood/newFood',
    })
  },
  goToDetails_2(){
    console.log
    wx.navigateTo({
      url: '/pages/hotFood/hotFood',
    })
  },
  goToDetails_3(){
    console.log
    wx.navigateTo({
      url: '/pages/search/search',
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