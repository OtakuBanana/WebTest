Page({
  data: {
    src: '/video/video1.mp4',
    danmuList: [
      {
        text: '第1s出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第3s出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],
    movieList: [{
      create_time: 1532519754589,
      title: 'video1',
      src: '/video/video1.mp4'
    }, {
      create_time: 1532519777690,
      title: 'video2',
      src: '/video/video1.mp4'
    }]
  },
  videoContext: null,
  inputValue: '',
  onReady: function() {
    this.videoContext = wx.createVideoContext('myVideo')

    const TxvContext = requirePlugin('tencentvideo')
    var txvContext = TxvContext.getTxvContext('txv1')
    txvContext.play()
    txvContext.pause()
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: '#f90'
    })
  },
  bindButtonTap: function() {
    wx.chooseVideo({
      camera: 'back',
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      success: res => {
        this.setData({
          src: res.tempFilePath
        })
      }
    })
  }
})