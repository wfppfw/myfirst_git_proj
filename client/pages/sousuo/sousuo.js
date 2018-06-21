// pages/sousuo/sousuo.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ad1:"/images/lajitong.png",
    ad2:"",
    searchValue:"",
    searchStorage: [],
    inputValue:"",
    StorageFlag:false,
    Clear:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var value = wx.getStorageSync('searchData')
    this.setData({
      searchStorage:value
    })
    console.log(value)
    console.log("2")
    this.setData({
      searchValue: "",
      inputValue: ""

    })
    
    
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
      var that = this
      that.setData({
        Clear:true
      })

    
    
      // this.setData({
      //   searchValue: "",
      //   inputValue: ""

      // })
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
    var value = wx.getStorageSync('searchData')
    this.setData({
      searchStorage: value
    })
      // wx.clearStorageSync()
   
  
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

  mytap:function(){
    var that = this
    that.setData({
      ad1:'/images/11.png'
    })
  },
  mytab:function(){
    var that = this
    that.setData({
      ad1: '/images/lajitong.png'
    })
  },


// //搜索输入框输入取值
//   searchInputEvent: function(e)
// {
//     var that = this;
//     request.getBooklist("", function (res) {
//       that.setData({ bookList: res.data.data, count: res.data.count, view_show: true });
//       that.setData({ view_show: true })
//     });
// },



  //搜索按钮点击事件
  sou: function (e) {

    var that = this;
    // if (this.data.inputValue != '')
    //  {
    //   var searchData = that.data.sercherStorage;
    //   searchData.push({
    //     id: searchData.length,
    //     name: that.data.inputValue
    //   })
    //   wx.setStorageSync('searchData', searchData);
      
    //  }
    //  console.log(searchData)









    if (this.data.inputValue != '') {
      //调用API从本地缓存中获取数据  
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(this.data.inputValue)
      wx.setStorageSync('searchData', searchData)
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + this.data.inputValue
      })
      this.setData({
        searchValue: "",
        inputValue: ""

      })

    } else {
      console.log('输入空值')
    }
   
    
    // this.onLoad();  


  },
  clear:function(){
    var that = this
    
    that.setData({
      inputValue:"",
      Clear:false
    })
    wx.clearStorage()
  },



  lishi:function(e){
    var that = this
    var jilu = e.currentTarget.nameHistory
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.nameHistory,
    })
    var searchData = wx.getStorageSync('searchData') || []
    searchData.push(e.currentTarget.dataset.nameHistory)
    wx.setStorageSync('searchData', searchData)
  },
  





  //获取输入框的输入信息
  searchValueInput: function (e) {
    var that=this
    that.setData({
      inputValue:e.detail.value
    }) 
  }
})





































