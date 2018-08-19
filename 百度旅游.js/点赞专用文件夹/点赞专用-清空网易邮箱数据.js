清空百度旅游数据并允许权限()

function 清空百度旅游数据并允许权限(){

  appName="网易邮箱"

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


  click("允许")
  sleep(2000)
  click("允许")
  sleep(6000)

}
