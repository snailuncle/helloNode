
function 清空百度旅游数据并允许权限(){

    appName="百度旅游"

    packageName=app.getPackageName(appName)

    log(packageName)



    app.openAppSetting(packageName)

    click("强行停止")
    sleep(555)
    click("确定")
    sleep(555)

    click("内部存储空间")
    sleep(555)
    click("清除数据")
    sleep(555)
    click("确定")
    sleep(555)

    app.launch(packageName)
    sleep(5000)


    // click("内部存储空间")
    // sleep(555)
    // click("清除数据")
    // sleep(555)
    // click("确定")
    // sleep(555)

}


// com.kingroot.master

// var sh = new Shell(true);

// // am force-stop com.kingroot.master

// sh.exec("am force-stop "+packageName);
// sleep(1000)
// sh.exec("pm clear "+packageName);
// sleep(1000)
// //安装和卸载
// // su -c pm install /sdcard/example.apk
// // su -c pm uninstall com.xxx

// sh.exit();

