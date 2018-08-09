auto()
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

imgPath="/sdcard/数独/1234原始样本数据/";
files.ensureDir(imgPath);


// 首先截图1,2,3,4
// 100,  323, 0xffffff 起点
// 158,  380, 0xffffff 第一个
// 419,  386, 0xffffff 右边
// 158,  631, 0x292651 下边

// var src = images.read("/sdcard/1.png");
startPoint=[100,  323]
firstCenter=[158,  380]
rightCenter=[419,  386]
downCenter=[158,  635]
w=100
h=120
var src = captureScreen();
leftRightDistance=rightCenter[0]-firstCenter[0]
upDownDistance=downCenter[1]-firstCenter[1]
var timestamp = new Date().getTime()
for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
    let x,y
    x=startPoint[0]+leftRightDistance*j
    y=startPoint[1]+upDownDistance*i
    var clip = images.clip(src, x, y, w, h);
    images.save(clip, imgPath+i+j+timestamp+".png");
  }
}



