auto()
// 视频ID = "x07e136320200"
function firstRequest(视频ID) {
  // log("请求1开始")
  requestUrl = "http://ilvyou.baidu.com/travel/note/noteview"
  APP_TIME = Math.floor((new Date().getTime()))
  REQUEST_ID = new Date().getTime() * 1000
  ContentLength = ("id" + 视频ID).length.toString()
  Cookie = "TERMINAL=android_AD2AB49DD691FC0B80D5%7C0; APP_VERSION=android_0.2.2; CHANNEL=syw; DEVICE=android; APP_TIME=" + APP_TIME + "; REQUEST_ID=" + REQUEST_ID + "; TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1; BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ"
  var res = http.post(requestUrl, {
      'id': 视频ID
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
      // log("请求1code = " + res.statusCode);
      // log("请求1html = " + res.body.string());
      var html = res.body.string();
      if(html.length()>1000){
        // log("请求1: success 信息长度=",html.length())
      }else{
        // log("请求1: failed 信息长度=",html.length())

      }
    }


  );




  // var html = res.body.string();
  // var obj = eval('(' + html + ')');
  // log("obj=",obj)

  // var pv = 0
  // log("obj.data.info.pv=",obj.data.info.pv)
  // if (obj && obj.hasOwnProperty('data') && obj.data.info && obj.data.info.pv) {
  //   return obj.data.info.pv
  // }
  // return pv


  // log("请求1结束")
}
function firstRequest_pv(视频ID) {
  // log("请求1开始")
  requestUrl = "http://ilvyou.baidu.com/travel/note/noteview"
  APP_TIME = Math.floor((new Date().getTime()))
  REQUEST_ID = new Date().getTime() * 1000
  ContentLength = ("id" + 视频ID).length.toString()
  Cookie = "TERMINAL=android_AD2AB44255DC80B80D5%7C0; APP_VERSION=android_0.2.2; CHANNEL=syw; DEVICE=android; APP_TIME=" + APP_TIME + "; REQUEST_ID=" + REQUEST_ID + "; TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1; BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ"
  var res = http.post(requestUrl, {
      'id': 视频ID
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
    }


    // function(res, err){
    //   if(err){
    //       console.error(err);
    //       return;
    //   }
    //   log("请求1code = " + res.statusCode);
    //   // log("请求1html = " + res.body.string());
    //   var html = res.body.string();
    //   if(html.length()>1000){
    //     log("请求1: success 信息长度=",html.length())
    //   }else{
    //     log("请求1: failed 信息长度=",html.length())

    //   }
    // }


  );




  var html = res.body.string();
  var obj = eval('(' + html + ')');
  log("obj=",obj)

  var pv = 0
  log("obj.data.info.pv=",obj.data.info.pv)
  if (obj && obj.hasOwnProperty('data') && obj.data.info && obj.data.info.pv) {
    return obj.data.info.pv
  }
  return pv


  // log("请求1结束")
}


var circle = {};

circle.req = firstRequest
circle.req_pv = firstRequest_pv

module.exports = circle;



// console.show();
// http.get("www.baidu.com", {}, function(res, err){
//     if(err){
//         console.error(err);
//         return;
//     }
//     log("code = " + res.statusCode);
//     log("html = " + res.body.string());
// });
