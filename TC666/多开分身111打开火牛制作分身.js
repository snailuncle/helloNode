// appName="金博棋牌"
// var packageName = getPackageName(appName)
// app.openAppSetting(packageName)

分火牛s=require("./多开分身分火牛")
停止多开分身s=require("./停止多开分身")
无极VPNs=require("./打开VPN2")
停止多开分身s.停止多开分身app()
无极VPNs.无极VPN()
appName="多开分身破解版"
var packageName = getPackageName(appName)
// app.openAppSetting(packageName)
launch(packageName);
toastLog('已经启动多开分身破解版')
sleep(2222)
// text = 登       陆

clickId("iv_btn_create")
sleep(3000)
下滑直到找到火牛()
火牛名字时间戳=分火牛s.分火牛()
sleep(20000)




click('安装')

sleep(20000)

appName=火牛名字时间戳
var packageName = getPackageName(appName)
// app.openAppSetting(packageName)
launch(packageName);

log("已经启动",火牛名字时间戳)






function clickText(textContent){
  var w = text(textContent).findOne(6000);
  //如果找到控件则点击
  if(w != null){
      控件Rect=w.bounds()
      press(控件Rect.centerX(),控件Rect.centerY(),1)
      log('已经点击了---'+textContent)
  }else{
      //否则提示没有找到
      toast("没有找到---"+textContent);
  }
}


function clickId(IdContent){
  var w = id(IdContent).findOne(6000);
  //如果找到控件则点击
  if(w != null){
      控件Rect=w.bounds()
      press(控件Rect.centerX(),控件Rect.centerY(),1)
      log('已经点击了---'+IdContent)
  }else{
      //否则提示没有找到
      toast("没有找到---"+IdContent);
  }
}

function 下滑直到找到火牛(){
  // H的坐标 1046,  741
  var H={"x":1046,"y":741}
  // var w = id("tv_app_name").findOne(500);
  var w = text("选择应用").findOne(6000);
  sleep(1111)
  //如果找到控件则点击
  if(w != null){
    var x=H.x
    var y=H.y
    log("点击H的坐标",x,y)
    press(x,y,1)
    log("已经点击了",H)
    var w = text("火牛视频").findOne(6000);
    //找火牛视频的位置
    if(w != null){
      制作分身在这个框框里面=w.parent().parent().bounds()
      x1=制作分身在这个框框里面.left
      y1=制作分身在这个框框里面.top
      x2=制作分身在这个框框里面.right
      y2=制作分身在这个框框里面.bottom
      var w = text("制作分身").id("tv_btn").boundsInside(x1,y1,x2,y2).findOne(6000);
      if(w != null){
        w.click()
      }else{
        log("没有找到制作分身,脚本停止")
        exit()
      }




    }else{
      log("没找到火牛视频,请查看界面是否异常,脚本停止")
      exit()
    }










  }else{
      //否则提示没有找到
      toastLog("没有找到---"+"H\n"+"多开分身界面异常,脚本停止运行");
      exit()
  }
}

