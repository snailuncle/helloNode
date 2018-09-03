// appName="金博棋牌"
// var packageName = getPackageName(appName)
// app.openAppSetting(packageName)



appName="无极"
var packageName = getPackageName(appName)
// app.openAppSetting(packageName)
launch(packageName);
// text = 登       陆

var w = textStartsWith("登       陆").findOne(6000);
//如果找到控件则点击
if(w != null){
    // w.click();
    控件Rect=w.bounds()
    press(控件Rect.centerX(),控件Rect.centerY(),1)
    log('已经点击了---登       陆')
    sleep(5000)
}else{
    //否则提示没有找到
    toast("没有找到---登       陆");
}

var w = text("尚未使用").findOne(6000);
//如果找到控件则点击
if(w != null){
    控件Rect=w.bounds()
    press(控件Rect.centerX(),控件Rect.centerY(),1)
    log('已经点击了---尚未使用')
    sleep(5000)

}else{
    //否则提示没有找到
    toast("没有找到---尚未使用");
}

// text = 确定

// text = 要删除应用数据吗？
var w = text("切换").findOne(6000);
//如果找到控件则点击
if(w != null){
    控件Rect=w.bounds()
    press(控件Rect.centerX(),控件Rect.centerY(),1)
    log('已经点击了---切换')
    sleep(5000)

}else{
    //否则提示没有找到
    toast("没有找到---切换");
}

function clickText(textContent){
  var w = text(textContent).findOne(6000);
  //如果找到控件则点击
  if(w != null){
      控件Rect=w.bounds()
      press(控件Rect.centerX(),控件Rect.centerY(),1)
      log('已经点击了---'+textContent)
      sleep(5000)
  }else{
      //否则提示没有找到
      toast("没有找到---"+textContent);
  }
}
