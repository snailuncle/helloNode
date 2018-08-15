appName="净化大师"

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
