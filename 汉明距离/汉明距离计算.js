


auto()
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

function similar(A,B){
  let sum,SA,SB,result
  sum=0
  SA=0
  SB=0
  for(let i=0;i<A.length;i++){
    sum += A[i] * B[i]
    SA+=Math.pow(A[i],2)
    SB+=Math.pow(B[i],2)
  }
  result=sum/((Math.sqrt(SA))*(Math.sqrt(SB)))
  return result
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




function outputImgStr(src){
  numColor="#292651"
  imgW=src.getWidth()
  imgH=src.getHeight()
  s=""
  for(let i=0;i<imgH;i++){
    for(let j=0;j<imgW;j++){
      // console.log(i,j)
      let color1=images.pixel(src, j, i)
      let r=colors.isSimilar(color1, numColor)
      if(r){
        s=s+"1"
      }else{
        s=s+"0"
      }
    }
    s=s+"\n"
  }
  return s
}




