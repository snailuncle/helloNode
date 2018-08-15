
oSession.oRequest.headers.Remove("Cookie"); //移除cookie
oSession.oRequest.headers.Add("Cookie", "username=admin;");  //新建cookies
var nowtimestamp : Date = new Date();
var nowSecond = Math.floor(nowtimestamp/1000)

if (oSession.host.indexOf("ilvyou.baidu.com") > -1) {

 // 删除所有的cookie
 oSession.oRequest.headers.Remove("Cookie");
 // 新建cookie
 oSession.oRequest.headers.Add("Cookie", "TERMINAL=android_AD2AB44255DC86698C9DD691FC0B80D5%7C0;");
 oSession.oRequest.headers.Add("Cookie", "APP_VERSION=android_0.2.2;");
 oSession.oRequest.headers.Add("Cookie", "CHANNEL=syw;");
 oSession.oRequest.headers.Add("Cookie", "DEVICE=android;");
 oSession.oRequest.headers.Add("Cookie", "APP_TIME="+nowSecond+";");
 oSession.oRequest.headers.Add("Cookie", "REQUEST_ID="+nowtimestamp+";");
 oSession.oRequest.headers.Add("Cookie", "TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1;");
 oSession.oRequest.headers.Add("Cookie", "BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TjJQZ2pVWWtrbVVremJzTDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ;");


 // 弹个对话框检查下修改后的body
 FiddlerObject.alert(strBody);


}
