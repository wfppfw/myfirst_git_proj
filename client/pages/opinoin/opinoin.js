var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    tan:false,
    InputVaule:""
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
  
  },
  bindFormSubmit: function (e) {

    console.log(e.detail.value.search)
    var that = this;
    that.setData({
      InputVaule: e.detail.value.search
    })
    wx.request({
      url:'https://983626636.xilihuala.xyz/calculate/index/'+e.detail.value.search,
      method: "post",
      date: {

      },
      header:
      {
        'content-type': 'application/json'
      },
      success: function (res) {
          
      }
    })
  },
  showok:function(){
    wx.showToast({
      title: '提交成功',
      icon:'/images/sucess.png',
      duration: 2000
    })  
  }
  
  
})








// Page({
//   data: {
//     height: 20,
//     focus: false
//   },
//   bindButtonTap: function () {
//     this.setData({
//       focus: true
//     })
//   },
//   bindTextAreaBlur: function (e) {
//     console.log(e.detail.value)
//   },
//   bindFormSubmit: function (e) {
//     console.log(e.detail.value.textarea)
//   }
// })