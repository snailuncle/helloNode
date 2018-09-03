function 停止多开分身app(){

  appName="多开分身破解版"

  packageName=app.getPackageName(appName)

  log(packageName)

  // com.kingroot.master

  var sh = new Shell(true);

  // am force-stop com.kingroot.master

  sh.exec("am force-stop com.kingroot.master");
  //安装和卸载
  // su -c pm install /sdcard/example.apk
  // su -c pm uninstall com.xxx

  sh.exit();
}




var circle = {};
circle.停止多开分身app = 停止多开分身app
module.exports = circle;
