// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favList: [
      {
        title: '家常小炒',
        imgSrc: '/imgs/food5.jpg',
        txt: '猪肉一小块、木耳两朵、豆干3~4块、红萝卜一小块、金针菇1包、葱1根、酱油1大匙、米酒少许、醋少许、香油少许'
      },
      {
        title: '小炒咖喱牛肉土豆',
        imgSrc: '/imgs/food6.jpg',
        txt: '主料：牛肉100克，长土豆1个，洋葱1/2个。\n辅料：蒜茸1小匙，姜茸1小匙，辣椒屑1小匙，红椒1只。\n腌肉调料：玉米淀粉1小匙，生抽1大匙，白糖1/4小匙，胡椒粉1/3小匙，苏打粉1/4小匙，料酒1大匙，菜油1大匙。\n上锅调料：咖喱块约8克，生抽1大匙，精盐1/4小匙，白糖1/2大匙，胡椒粉1/3小匙，玉米淀粉1小匙、麻油1/2小匙。-2g、油：适量、酱油：适量、葱花：适量'
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