// appName="金博棋牌"
// var packageName = getPackageName(appName)
// app.openAppSetting(packageName)



appName="金博棋牌"
var packageName = getPackageName(appName)
app.openAppSetting(packageName)

var w = textStartsWith("内部存储空间已使用").findOne(2000);
//如果找到控件则点击
if(w != null){
    // w.click();
    控件Rect=w.bounds()
    press(控件Rect.centerX(),控件Rect.centerY(),1)
    log('已经点击了---内部存储空间已使用')
}else{
    //否则提示没有找到
    toast("没有找到---内部存储空间已使用");
}

var w = text("清除数据").findOne(2000);
//如果找到控件则点击
if(w != null){
    控件Rect=w.bounds()
    press(控件Rect.centerX(),控件Rect.centerY(),1)
    log('已经点击了---清除数据')
}else{
    //否则提示没有找到
    toast("没有找到---清除数据");
}

// text = 确定

// text = 要删除应用数据吗？
var w = text("要删除应用数据吗？").findOne(2000);
//如果找到控件则点击
if(w != null){
    w = text("确定").findOne(2000);

    if(w != null){
      控件Rect=w.bounds()
      press(控件Rect.centerX(),控件Rect.centerY(),1)
      log('已经点击了---确定')
    }else{
      //否则提示没有找到
      toast("没有找到---确定");
  }




}else{
    //否则提示没有找到
    toast("没有找到---要删除应用数据吗？");
}
