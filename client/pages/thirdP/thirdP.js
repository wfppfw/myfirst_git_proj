//js
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    headimages:"",
    userName:"",
    Isuser:false
  },
  onLoad: function () {
    var that = this
    // 查看是否授权
    wx.getSetting({
      
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
        
          that.setData({
                Isuser:true
            
          })
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.setData({
              
                headimages: res.userInfo.avatarUrl,
                userName: res.userInfo.nickName


              })
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  }
,

mess:function(){
    
}

})