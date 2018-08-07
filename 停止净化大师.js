appName="净化大师"

packageName=app.getPackageName(appName)

log(packageName)

// com.kingroot.master

var sh = new Shell(true);

// am force-stop com.kingroot.master

sh.exec("am force-stop com.kingroot.master");

sh.exit();
