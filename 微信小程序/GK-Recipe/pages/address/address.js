// pages/address/address.js
Page({
data:{addressInfo:null},
chooseAddress(){
  wx.chooseAddress({
    success: (result) => {
      this.setData({
        addressInfo:res
      })
    },
    fail:function(err){
      console.log(err)
    }
  })
}

})