// pages/secondP/secondP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changyonglist: [
      {
        Istrue:false,
        name:"字母",
        id:11

      }
    ]

  
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

  XianQing: function(event)
  {
    var wordName = event.currentTarget.dataset.wordName
    console.log(wordName)
      wx.navigateTo({
        url: '/pages/detail2/detail2?id='+ wordName,
      })
    
  }
})




