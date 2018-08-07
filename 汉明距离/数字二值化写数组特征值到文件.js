

imgPath="/sdcard/数独/";
files.ensureDir(imgPath);
num=4
var src = images.read(imgPath+num+".png");
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
path=imgPath+"数字特征码一维矩阵/"
files.ensureDir(path);
//写入文件
files.writeBytes(path+num+".arr", s)

// imgPath="/sdcard/数独/";
// files.ensureDir(imgPath);
// path=imgPath+"数组.arr"
// files.writeBytes(path, a)
// console.log('写入完成')
// sleep(1000)
// result=files.readBytes(path+num+".arr")
// console.log(result)
