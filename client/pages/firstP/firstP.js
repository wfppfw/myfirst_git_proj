
Page({

  data:{
    ad1:"",
    ad2:"",
    time:"xbhasb",
    iu: 1,
    a:10,
    Hand: [
      {
        ImagesAdress: "http://img.ui.cn/data/file/2/8/2/908282.gif?imageMogr2/auto-orient/strip",
        WordName: "hello,小主",
        WordMeaning: "当你看到这些文字",


      },
      {
        ImagesAdress: "http://img.ui.cn/data/file/1/8/2/908281.gif?imageMogr2/auto-orient/strip",
        WordName: "说明。。。",
        WordMeaning: "小主的网络断啦",


  },
      {
        ImagesAdress: "http://img.ui.cn/data/file/9/7/2/908279.gif?imageMogr2/auto-orient/strip",
        WordName: "哎，只有这时候",
        WordMeaning: "我才出现",


      },
      {
        ImagesAdress: "http://img.ui.cn/data/file/3/8/2/908283.gif?imageMogr2/auto-orient/strip",
        WordName: "虽然，我不完美",
        WordMeaning: "但我一直在努力",
      }
    ],
    currentIndex:0
      
  },
  tupian:function(){
    wx.navigateTo({
      url: '/pages/sousuo/sousuo',
    })
  },
  onPullDownRefresh:function(){
     
      wx.showToast({
        title: '刷新成功！',
        icon: 'sucess',
        duration: 2000
      })
   

      var num1 = Math.random()
      num1 = Math.ceil(num1 * 2000)
      var num2 = Math.random()
      num2 = Math.ceil(num2 * 2000)
      var num3 = Math.random()
      num3 = Math.ceil(num3 * 2000)
      var num4 = Math.random()
      num4 = Math.ceil(num4 * 2000)
      var that = this
      var up1 = "Hand[" + 1 + "].WordName"
      var down1 = "Hand[" + 1 + "].WordMeaning"
      var up0 = "Hand[" + 0 + "].WordName"
      var down0 = "Hand[" + 0 + "].WordMeaning"
      var up2 = "Hand[" + 2 + "].WordName"
      var down2 = "Hand[" + 2 + "].WordMeaning"
      var up3 = "Hand[" + 3 + "].WordName"
      var down3 = "Hand[" + 3 + "].WordMeaning"
      wx.request({
        url: 'https://983626636.xilihuala.xyz/index.php/suiji/index/' + num1 + "/" + num2 + "/" + num3 + "/" + num4,
        method: "post",
        date: {

        },
        header:
        {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data[0].name)

          that.setData({

            [up0]: res.data[0].name,
            [down0]: res.data[0].meaning,
            [up1]: res.data[1].name,
            [down1]: res.data[1].meaning,
            [up2]: res.data[2].name,
            [down2]: res.data[2].meaning,
            [up3]: res.data[3].name,
            [down3]: res.data[3].meaning,
          })
          wx: wx.hideNavigationBarLoading()

        }


         
      })
      wx.stopPullDownRefresh()
      


  },



  dianji:function(e)
  {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.mySuiji,
    })
  },
  onLoad: function(options)
  {
   
    var num1=Math.random()
    num1 = Math.ceil(num1*2000)
    var num2= Math.random()
    num2 = Math.ceil(num2 * 2000)
    var num3 = Math.random()
    num3 = Math.ceil(num3 * 2000)
    var num4 = Math.random()
    num4 = Math.ceil(num4 * 2000)
    var that = this
        var up1="Hand["+1+"].WordName"
        var down1="Hand["+1+"].WordMeaning"
        var up0 = "Hand[" + 0 + "].WordName"
        var down0 = "Hand[" + 0 + "].WordMeaning"
        var up2 = "Hand[" + 2 + "].WordName"
        var down2 = "Hand[" + 2 + "].WordMeaning"
        var up3= "Hand[" + 3 + "].WordName"
        var down3 = "Hand[" + 3 + "].WordMeaning"
        wx.request({
          url: 'https://983626636.xilihuala.xyz/index.php/suiji/index/' + num1 + "/" + num2 + "/" + num3 + "/" + num4,
        method: "post",
        date: {

        },
        header:
        {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data[0].name)
          
          that.setData({

              [up0]:res.data[0].name,
              [down0]:res.data[0].meaning,
              [up1]: res.data[1].name,
              [down1]: res.data[1].meaning,
              [up2]: res.data[2].name,
              [down2]: res.data[2].meaning,
              [up3]: res.data[3].name,
              [down3]: res.data[3].meaning,
                  })
                  wx: wx.hideNavigationBarLoading()

                }
             

        
      })
   

  }




})