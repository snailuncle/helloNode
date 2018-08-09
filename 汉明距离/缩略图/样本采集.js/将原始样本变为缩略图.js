
importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)
importClass(java.io.File)
importClass(java.io.FileOutputStream)
importClass(java.lang.Integer)


var J = require("./J.js");


//首先要做缩略图,减少计算
function getImgThumbnail(imagePath, width, height) {
  width=width || 8
  height=height || 11
  options = new BitmapFactory.Options();
  options.inJustDecodeBounds = true; //关于inJustDecodeBounds的作用将在下文叙述
  bitmap = BitmapFactory.decodeFile(imagePath, options);
  h = options.outHeight;//获取图片高度
  w = options.outWidth;//获取图片宽度
  scaleWidth = w / width; //计算宽度缩放比
  scaleHeight = h / height; //计算高度缩放比
  scale = 1;//初始缩放比
  if (scaleWidth < scaleHeight) {//选择合适的缩放比
      scale = scaleWidth;
  } else {
      scale = scaleHeight;
  }
  if (scale <= 0) {//判断缩放比是否符合条件
      be = 1;
  }
  options.inSampleSize = scale;
  // 重新读入图片，读取缩放后的bitmap，注意这次要把inJustDecodeBounds 设为 false
  options.inJustDecodeBounds = false;
  bitmap = BitmapFactory.decodeFile(imagePath, options);
  // 利用ThumbnailUtils来创建缩略图，这里要指定要缩放哪个Bitmap对象
  bitmap = ThumbnailUtils.extractThumbnail(bitmap, width, height,ThumbnailUtils.OPTIONS_RECYCLE_INPUT);
  return bitmap;
}
//再提取缩略图点阵
function getImgLattice(bitmap) {
  width = bitmap.getWidth();
  height = bitmap.getHeight();
  console.log("width=",width,"  height=",height)
  pixels = J.array("int", width * height);
  // pixels = new Array(width * height);

  offset=0
  stride=width
  x=0
  y=0
  bitmap.getPixels(pixels,offset,stride,x,y,width,height)

  // console.log("pixels=",pixels)
  // exit()


  var pixels01 = pixels.map(function (value) {
    if(value<-14000431){
      return 1
    }else{
      return 0
    }
  });


  return pixels01



  // k=0
  // for(let j=0;j<height;j++){
  //   for(let i=0;i<width;i++){
  //     let color=bitmap.getPixel(i,j)
  //     console.log("color=",color)
  //     // if(color>-1645833){
  //     if(color==-1){
  //       pixels[k]=0
  //     }else{
  //       pixels[k]=1
  //     }
  //     k++
  //   }
  // }
  // return pixels
}


function matrixDimensionalityReduction(arr){
  for(let i=0;i<arr.length;i++){
    
  }

}

//如果要保存缩略图,调用save
function saveBitmapToSDCard(bitmap, path) {
  file = new File(path);
  if(file.exists()) {
      file.delete();
  }
  try {
      fileOutputStream = new FileOutputStream(file);
      bitmap.compress(Bitmap.CompressFormat.PNG, 100, (fileOutputStream));//设置PNG的话，透明区域不会变成黑色
      fileOutputStream.close();
      log("----------save success-------------------");
  }
  catch(e) {
      console.log(e)
  }
}


function getImgMatrix(originalPicPath,ThumbnailPath){
  //先得到bitmap
  bitmap=getImgThumbnail(originalPicPath)
  //保存缩略图
  saveBitmapToSDCard(bitmap, ThumbnailPath)
  //得到点阵
  imgLattice=getImgLattice(bitmap)
  return imgLattice
}


PathBasic="/sdcard/数独/";
files.ensureDir(PathBasic);
// PathBasic="/sdcard/数独/1234缩略图";
// files.ensureDir(PathBasic);

//遍历原始样本数据,将缩略图放到缩略图文件夹

// 一共四个数字1234,四个文件夹
speciesNumber=4
for(let i=0;i<speciesNumber;i++){

  let originalImgFolder=files.join(PathBasic, "1234原始样本数据/"+(i+1))
  var allFile = files.listDir(originalImgFolder);
  // console.log(originalImgFolder)
  // /sdcard/数独/1234原始样本数据/2

  var allFilePath = allFile.map(function (imgName) {
    return files.join(originalImgFolder,imgName)
  });

  // console.log(allFilePath)
  // [ '/sdcard/数独/1234原始样本数据/4/02.png',
  // '/sdcard/数独/1234原始样本数据/4/10.png',
  // '/sdcard/数独/1234原始样本数据/4/23.png',
  // '/sdcard/数独/1234原始样本数据/4/31.png',
  // '/sdcard/数独/1234原始样本数据/4/021533624454366.png',
  // '/sdcard/数独/1234原始样本数据/4/021533624470063.png',
  // '/sdcard/数独/1234原始样本数据/4/131533624389957.png',
  // '/sdcard/数独/1234原始样本数据/4/131533624424600.png',
  // '/sdcard/数独/1234原始样本数据/4/131533624440614.png',
  // '/sdcard/数独/1234原始样本数据/4/201533624389957.png',
  // '/sdcard/数独/1234原始样本数据/4/201533624424600.png',
  // '/sdcard/数独/1234原始样本数据/4/201533624440614.png',
  // '/sdcard/数独/1234原始样本数据/4/301533624454366.png',
  // '/sdcard/数独/1234原始样本数据/4/301533624470063.png' ]

  //将上面的所有路径的图片变为缩略图

  ThumbnailPath=files.join(PathBasic, "1234缩略图/"+(i+1))
  LatticePath=files.join(PathBasic, "1234矩阵信息/"+(i+1))
  // console.log(ThumbnailPath)
  k=0
  allFilePath.forEach(imgPath => {
    //先得到bitmap
    bitmap=getImgThumbnail(imgPath);
    //保存缩略图
    imgThumbnailPath=ThumbnailPath+'/'+k+'.png'
    files.createWithDirs(imgThumbnailPath)
    saveBitmapToSDCard(bitmap, imgThumbnailPath);
    //得到点阵
    imgLattice=getImgLattice(bitmap);
    // console.log("imgLattice=",imgLattice)
    numLatticePath=LatticePath+'/'+k+'.arr'
    files.createWithDirs(numLatticePath)
    files.writeBytes(numLatticePath, imgLattice)
    k++;
  });





}

// files.join(parent, child)
// files.createWithDirs("/sdcard/新文件夹/新文件夹/新文件夹/1.txt");
