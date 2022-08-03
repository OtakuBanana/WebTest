// pages/foodList/foodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: [
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
        title: '小炒牛肉',
        imgSrc: '/imgs/food7.jpg',
        txt: '里脊牛肉250克、二青椒8根、小米椒3根、3个独蒜、郫县豆瓣、老抽、花椒、料酒、嫩肉粉、五香粉、盐、味精'
      },
      {
        title: '小炒肉',
        imgSrc: '/imgs/food8.jpg',
        txt: '五花肉 1块（约300g），杭椒 200g，洋葱 1个（约100g），朝天椒 3只，蒜 2瓣，绍酒 1汤匙（15ml），生抽 4茶匙（20ml），白砂糖 1茶匙（5g），盐 1茶匙（5g），油 1汤匙（15ml）'
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