auto()
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

imgPath="/sdcard/数独/";
files.ensureDir(imgPath);

path=imgPath+"数字特征码一维矩阵/"
files.ensureDir(path);
// 首先提取1-4的特征码
//读取四个数字的特征码
arr1=files.readBytes(path+1+".arr")
arr2=files.readBytes(path+2+".arr")
arr3=files.readBytes(path+3+".arr")
arr4=files.readBytes(path+4+".arr")

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
numArr=[]
for(let i=0;i<4;i++){
  numArr.push([])
  for(let j=0;j<4;j++){
    let x,y
    x=startPoint[0]+leftRightDistance*j
    y=startPoint[1]+upDownDistance*i
    var clip = images.clip(src, x, y, w, h);
    images.save(clip, imgPath+i+j+"clip.png");
    let who=img2arr(clip)
    let distinguishNum=iswho(who)
    log(""+i+j+"="+distinguishNum)
    numArr[i][j]=distinguishNum
  }
}
console.log(numArr)



function img2arr(src){
  let numColor,imgW,imgH,s
  numColor="#292651"
  imgW=src.getWidth()
  imgH=src.getHeight()
  s=[]
  for(let i=0;i<imgH;i++){
    for(let j=0;j<imgW;j++){
      // console.log(i,j)
      let color1=images.pixel(src, j, i)
      let r=colors.isSimilar(color1, numColor)
      if(r){
        s.push(1)
      }else{
        s.push(0)
      }
    }
  }
  return s
}



function iswho(who){
  let result=0
  let maxCos=0
  let whoCos1=similar(who,arr1)
  if(whoCos1>maxCos){
    result=1
    maxCos=whoCos1
  }
  let whoCos2=similar(who,arr2)
  if(whoCos2>maxCos){
    result=2
    maxCos=whoCos1
  }
  let whoCos3=similar(who,arr3)
  if(whoCos3>maxCos){
    result=3
    maxCos=whoCos1
  }
  let whoCos4=similar(who,arr4)
  if(whoCos4>maxCos){
    result=4
    maxCos=whoCos1
  }
  let o={
    whoCos1:whoCos1,
    whoCos2:whoCos2,
    whoCos3:whoCos3,
    whoCos4:whoCos4
  }
  console.log(o)
  return result
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
