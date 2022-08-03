// pages/detail/detail.js
Page({
data:{
  gender:'女',
  username:'吴捷',
  imgUrl:'/imgs/个人头像.jpg'
},
changeAvatar:function(e){
  wx.chooseImage({
    count: 1,
    sizeType:['original','compressed'],
    sourceType:['album','camera'],
    success(res){
      var tempFilePaths=res.tempFilePaths
      this.setData({
        imgUrl:tempFilePaths
      })
    }
  })
},
jump:function(e){
  wx.navigateTo({
    url: '/pages/modify/modify?username'+encodeURIComponent(this.data.username)+'&gender='+encodeURIComponent(this.data.gender),
  })
}

})