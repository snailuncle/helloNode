auto()
function thirdRequest(pn,rn){
log("请求3开始")
requestUrl = "http://ilvyou.baidu.com/travel/note/videolistv1"
APP_TIME = Math.floor((new Date().getTime()))
REQUEST_ID = new Date().getTime()*1000
ContentLength = ("pn" + pn +"&rb"+rn).length.toString()
Cookie = "TERMINAL=android_AD2AB44255DC86698C9DD691FC0B80D5%7C0; APP_VERSION=android_0.2.2; CHANNEL=syw; DEVICE=android; APP_TIME=" + APP_TIME + "; REQUEST_ID=" + REQUEST_ID + "; TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1; BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TjJQZ2pVWWtrbVVremJzTDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ"
var res = http.post(requestUrl, {
  'pn': pn,
  'rn': rn
}, {
  headers: {
    'Cookie': Cookie,
    'X-Wap-Proxy-Cookie': 'none',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': ContentLength,
    'Host': 'ilvyou.baidu.com',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'okhttp/3.10.0'
  }
},

function(res, err){
  if(err){
      console.error(err);
      return;
  }
  log("请求3code = " + res.statusCode);
  // log("请求3html = " + res.body.string());
  var html = res.body.string();
  if(html.length()>1000){
    log("请求3: success 信息长度=",html.length())
  }else{
    log("请求3: failed 信息长度=",html.length())

  }
}




);
log("请求3结束")
}

var circle = {};

circle.req = thirdRequest

module.exports = circle;
