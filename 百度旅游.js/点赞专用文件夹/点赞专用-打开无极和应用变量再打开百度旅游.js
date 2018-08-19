
appName="无极VPN"
packageName=app.getPackageName(appName)
log(packageName)
app.launch(packageName)
sleep(2000)
var w = 切换VPN是否存在()
//如果找到控件则点击
if(w != null){
  w.click()
  log("已经点击切换vpn")
  sleep(5000)
}else{
    //否则提示没有找到
    log("没有找到切换VPN");
}


appName="应用变量"
packageName=app.getPackageName(appName)
log(packageName)
app.launch(packageName)
sleep(2000)


if(text("吾爱破解").findOne() && text("预言家").findOne()){
  w=text("嘻游").findOne()
  x=w.bounds().centerX()
  y=w.bounds().centerY()
  press(x,y,1)
  sleep(1000)
  w=详细伪装是否存在()
  log(w)
if(w != null){
  desc("更多选项").findOne().click()
  sleep(1000)
  // desc("全部随机").findOne().click()
  // w=desc("全部随机").findOne()
  press(528,123,1)
  sleep(1000)
  // x=w.bounds().centerX()
  // y=w.bounds().centerY()
  // press(x,y,1)
  // sleep(1000)
  log("已经点击全部随机")
}else{
    //否则提示没有找到
    log("没有找到详细伪装");
}
}else{
  log("没有找到应用变量主界面")
}
sleep(1000)
清空百度旅游数据并允许权限()


function 详细伪装是否存在(){
  var w = textMatches(/详细伪装/).findOne(6000);
  //如果找到控件则点击
  if(w != null){
    log("找到了详细伪装")
    return true
  }else{
      //否则提示没有找到
      log("没有找到详细伪装");
      return false
  }
}

function 报警(){
  //震动两秒
  device.vibrate(2000);
  sleep(1000)
  device.vibrate(2000);
  sleep(1000)
  device.vibrate(2000);
  sleep(1000)
  log('红心点不了')
  exit()
}
function 切换VPN是否存在(){
    var w = textMatches(/切换VPN/).findOne(6000);
    //如果找到控件则点击
    if(w != null){
      log("找到了切换VPN")
      return w
    }else{
        //否则提示没有找到
        log("没有找到切换VPN");
        return false
    }
}


function 清空百度旅游数据并允许权限(){

  appName="嘻游"

  packageName=app.getPackageName(appName)

  log(packageName)



  app.openAppSetting(packageName)
  if(textMatches(/流量使用情况/).findOne(3000)){

    click("强行停止")
    sleep(555)
    click("确定")
    sleep(1555)
    // id('title').text('存储').findOne(1500).parent().parent().click()
    id('android:id/title').text('存储').findOne(500).parent().parent().click()

    // click("存储")
    sleep(1555)
  }

  click("清除数据")
  sleep(555)
  click("确定")
  sleep(555)

  app.launch(packageName)
  sleep(5000)


  click("下一步")
  sleep(2000)
  click("允许")
  sleep(2000)
  click("允许")
  sleep(6000)
  click("允许")
  sleep(5000)
}
