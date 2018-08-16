auto()
const 文件大小 = require('./文件大小.js');
const 获取每页视频列表 = require('./获取一页视频列表.js');


视频文件列表=获取视频集的文件列表()
视频参数列表=[]
for(let i=0;i<视频文件列表.length;i++){
  var 一页视频列表=获取每页视频列表.获取一页视频列表(视频文件列表[i])
  视频参数列表.push(一页视频列表)
  // log("一页视频列表=",一页视频列表)
  // exit()
}


log视频列表(视频参数列表)

function log视频列表(视频参数列表){


  for(let i=0;i<视频参数列表.length;i++){
    log(视频参数列表[i])
  }

  log(str)
}

























function 获取视频集的文件列表(){
  var dir = "/sdcard/data/data/";
  var jsFiles = files.listDir(dir, function(name){
      return name.endsWith(".txt") &&
      files.isFile(files.join(dir, name)) &&
      文件大小.文件是否大于2kb(files.join(dir, name))
      ;
  });
  for(let i=0;i<jsFiles.length;i++){
    jsFiles[i]=files.join(dir, jsFiles[i])
  }
  log(jsFiles);
  return jsFiles
}











// var circle = {};

// circle.获取视频集的文件列表 = 获取视频集的文件列表

// module.exports = circle;
