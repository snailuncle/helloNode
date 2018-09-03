// appName="金博棋牌"
// var packageName = getPackageName(appName)
// app.openAppSetting(packageName)

function 无极VPN(){


  appName="无极"
  var packageName = getPackageName(appName)
  // app.openAppSetting(packageName)
  launch(packageName);
  // text = 登       陆



  var w = text("切换").findOne(6000);
  //如果找到控件则点击
  if(w != null){
    clickText("切换")
    clickText("申请失败")
  }else{
      //否则提示没有找到
      toast("没有找到---"+"切换");
      clickText("登       陆")
      clickText("尚未使用")
      clickText("切换")
      clickText("申请失败")
  }
  sleep(5555)
}




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


var circle = {};
circle.无极VPN = 无极VPN
module.exports = circle;
