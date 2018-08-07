auto()
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

// 首先提取1-4的特征码
// 首先截图1,2,3,4

// 100,  323, 0xffffff 起点
// 158,  380, 0xffffff 第一个
// 419,  386, 0xffffff 右边
// 158,  631, 0x292651 下边



imgPath="/sdcard/数独/";
files.ensureDir(imgPath);



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

for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
    let x,y
    x=startPoint[0]+leftRightDistance*j
    y=startPoint[1]+upDownDistance*i
    var clip = images.clip(src, x, y, w, h);
    images.save(clip, imgPath+i+j+"clip.png");
    log(""+i+j)
  }
}





// Hamming distance (汉明距离)
// 描述：使用XOR运算符( ^ )查找这两个数字之间的位差，使用 toString(2) 转换为二进制字符串。使用 match(/1/g) 计算并返回字符串中 1 的数量。

// 这个感觉还不够，很多时候是字符串的比较，还需要转化
// 愚人码头注：在信息论中，两个等长字符串之间的汉明距离(英语：Hamming distance)是两个字符串对应位置的不同字符的个数。换句话说，它就是将一个字符串变换成另外一个字符串所需要替换的字符个数。- 维基百科

// const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;

// //hammingDistance(2, 3);
