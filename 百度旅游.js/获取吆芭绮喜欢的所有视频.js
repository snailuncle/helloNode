// 第一页   uid=x53d93033613a&behavior_type=1&rn=10&pn=0
// 最后一页 uid=x53d93033613a&behavior_type=1&rn=10&pn=65

// 请求头有两个地方不一样: contentLength和Cookie不一样
// Content-Length: 44/45

// cookie有两个地方不一样:时间戳和VSIGN
// 时间戳:计算当前时间戳就可以了
// VSIGN:是什么鬼?


// 5cf18a95f70a54f0a3f75f8c8233f8f4
// 24ac78170815e720c385b6c5659fc939

// VSIGN=24ac78170815e720c385b6c5659fc939
// VSIGN=1a74d6ec80055e2508a14aa9b3468c8f
// VSIGN=b446e153bbd968f1ed3ddd29448dcd76
// VSIGN=c2ca4c6744bc1f8edd524f0542b8d063
// VSIGN=36263e79b79612ab463426a50016bb3a
// VSIGN=3b9c65b5e8758343aa7c6c99e906582e
// VSIGN=33c7010b0315bf01fc90f0b9496ab0df
// VSIGN=4c43ece109bf3e4cc7361c2fc9a9c480
// VSIGN=8bf37474c39385d13718e0251a638e7b
// VSIGN=49a0bac2c06274c42145bf0bac1bf2b1
// VSIGN=d894cae5272443d8c14332f34cbf7d2d




// VSIGN=70bb735fcfb1b7b54532cf3e849544b3
// VSIGN=4695ee854f12c87bd5eb3fc94d98f280
// VSIGN=7047b85b3813c4482464f45833e63820



auto()
function secondRequest(视频ID){
log("请求视频列表开始")
requestUrl = "http://ilvyou.baidu.com/usercenter/userinfo/getusernote"
APP_TIME = Math.floor((new Date().getTime()))
REQUEST_ID = new Date().getTime()*1000
ContentLength = ("note_id" + 视频ID).length.toString()
Cookie = "TERMINAL=android_AD2AB44255DC86698C9DD691FC0B80D5%7C0; APP_VERSION=android_0.2.2; CHANNEL=syw; DEVICE=android; APP_TIME=" + APP_TIME + "; REQUEST_ID=" + REQUEST_ID + "; TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1; BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TjJQZ2pVWWtrbVVremJzTDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ"
var res = http.post(requestUrl, {
  'note_id': 视频ID
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
});
var html = res.body.string();
log(html)
log("请求视频列表结束")
}

// var circle = {};

// circle.req = secondRequest

// module.exports = circle;





































POST /usercenter/userinfo/getusernote HTTP/1.1
Cookie: TERMINAL=android_AD2AB44255DC86698C9DD691FC0B80D5%7C0;BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TjJQZ2pVWWtrbVVremJzTDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ;VSIGN=1a74d6ec80055e2508a14aa9b3468c8f;CHANNEL=update;DEVICE=android;REQUEST_ID=1534336635654757;APP_VERSION=android_0.3.0;TOKEN=xP864BtkBTMPcPG50dTu8WZEaooZZX83;APP_TIME=1534336635655
X-Wap-Proxy-Cookie: none
User-Agent: Dalvik/2.1.0 (Linux; U; Android 7.1.2; ONEPLUS A3010 Build/NJH47F)
Content-Type: application/x-www-form-urlencoded;charset=utf-8
Content-Length: 44
Host: ilvyou.baidu.com
Connection: Keep-Alive
Accept-Encoding: gzip


Cookie = "TERMINAL=android_AD2AB44255DC86698C9DD691FC0B80D5%7C0; APP_VERSION=android_0.2.2; CHANNEL=syw; DEVICE=android; APP_TIME=" + APP_TIME + "; REQUEST_ID=" + REQUEST_ID + "; TOKEN=TDYvqzdQ7t58rZXXsuVGJVoVJUUXecA1; BDUSS=VFzVTd6fjRPOG1tWjNtTlduSlBSWk9HNDZ4TjJQZ2pVWWtrbVVremJzTDFoNWRiQUFBQUFBJCQAAAAAAAAAAAEAAADidHSSbWFvZnZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPX6b1v1-m9bZ"
var res = http.post(requestUrl, {
  'note_id': 视频ID
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
});
