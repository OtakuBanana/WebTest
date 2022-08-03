// pages/foodList/foodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: [
      {
        title: '营养早餐',
        imgSrc: '/imgs/food1.jpg',
        txt: '大米，玉米粒，胡萝卜，香菇，火腿'
      },
      {
        title: '嫩滑蒸水蛋',
        imgSrc: '/imgs/food2.jpg',
        txt: '鸡蛋：3个、温水：300ml、盐：1-2g、油：适量、酱油：适量、葱花：适量'
      },
      {
        title: '花生酱西士多',
        imgSrc: '/imgs/food3.jpg',
        txt: '甜吐司2片、鸡蛋1个、去皮干花生20g、糖适量、盐适量'
      },
      {
        title: '苦荞红豆包',
        imgSrc: '/imgs/food4.jpg',
        txt: '雁门清高有机纯苦荞粉60克、面粉150克、红豆馅200克、干酵母粉4克'
      }
    ]
  },
  goFood(e) {
    let name = e.currentTarget.dataset.foodname
    console.log(name);
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