// pages/third/third.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: [],
    windowHeight: 0,//获取屏幕高度  
    refreshHeight: 0,//获取高度  
    refreshing: false,//是否在刷新中  
    refreshAnimation: {}, //加载更多旋转动画数据  
    clientY: 0,//触摸时Y轴坐标 


      Istrue:true,
      dictory:[],
      shouyu:[],
      sy:[],
      inputValue:""
  },


  //下拉刷新
  onPullDownRefresh: function () {
    wx.showToast({
      title: '刷新成功！',
      icon: 'sucess',
      duration: 2000
    })
    wx.stopPullDownRefresh()

        console.log("SB")
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
   



    if(options.id[0] !="*"&&options.id.length<=2){
      console.log(options.id.length)
    wx.request({
      url: "https://983626636.xilihuala.xyz/index.php/tt/index/"+options.id,
      method: "post",
      date: {
        
      },
      header:
      {
        'content-type': 'application/json'
      },
      success: function (res) {
          that.setData({
            shouyu:res.data
          })
          that.setData({
            Istrue: false
          })
          wx:wx.hideNavigationBarLoading()
         
      },
      fail: function () {
        console.log("2")



      },
      complete: function () {

      }




    })


    }
    
      
        
      

 
    else
    {
      
      wx.request({
        url: "https://983626636.xilihuala.xyz/index.php/danci/juzi/" + options.id,
        method: "post",
        date: {

        },
        header:
        {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            shouyu: res.data
          })
        
          that.setData({
            Istrue: false
          })
          wx: wx.hideNavigationBarLoading()

        },
        fail: function () {
          console.log("2")



        },
        complete: function () {

        }




      })


    }
    wx:wx.showNavigationBarLoading()
   
    




  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   Istrue:true
    // })
        
  },

  detail3:function(event){
    console.log(event)
    var add = JSON.stringify(event.currentTarget.dataset.myUser);
    console
    wx.navigateTo({
      url: '/pages/detail3/detail3?id=' + add,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },


  clearInput: function () {
    var that = this

    that.setData({
      inputValue: "",
      Istrue: false
    })
  },
  searchInputValue1: function (e) {
    var that = this

    that.setData({
      inputValue: e.detail.value
    })
    if (that.data.inputValue != "") {
      that.setData({
        Istrue: true
      })
    }
  },
  showInput: function () {
    var that = this
    console.log(this.data.inputValue)
    that.setData({
      String: this.data.inputValue

    })


    wx.request({
      url: "https://983626636.xilihuala.xyz/index.php/danci/juzi/" + that.data.String,
      method: "post",
      date: {

      },
      header:
      {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          shouyu: res.data
        })
        
        // wx: wx.hideNavigationBarLoading()

      },
      fail: function () {
        console.log("2")



      },
      complete: function () {

      }
    })






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

    return {
      title:"向你介绍手语--"
    }
  
  }

})