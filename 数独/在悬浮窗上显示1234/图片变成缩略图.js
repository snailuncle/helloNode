
importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)
importClass(java.io.File)
importClass(java.io.FileOutputStream)
importClass(java.lang.Integer)

var intArrRW=require('./整数数组读写接口.js')
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
    //一千万
    if(value>-10000000){
      return -1
    }else{
      return -10000000
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


var img2Thumbnail={}
img2Thumbnail.getImgThumbnailAndLattice=function (imgPath){
    //先得到bitmap
    bitmap=getImgThumbnail(imgPath);
    //保存缩略图
    var timestamp=new Date().getTime()
    imgThumbnailPath='/sdcard/缩略图/'+timestamp+'.png'
    files.createWithDirs(imgThumbnailPath)
    saveBitmapToSDCard(bitmap, imgThumbnailPath);
    //得到点阵
    imgLattice=getImgLattice(bitmap);
    // console.log("imgLattice=",imgLattice)
    numLatticePath='/sdcard/字符矩阵/'+timestamp+'.arr'
    files.createWithDirs(numLatticePath)
    intArrRW.write(imgLattice,numLatticePath)
    thumbnail=images.read(imgThumbnailPath)
    imgLatticeResult=imgLattice
    result={
      thumbnail:thumbnail,
      lattice:imgLattice,
      thumbnailPath:imgThumbnailPath,
      latticePath:numLatticePath,
    }
  return result
}

module.exports=img2Thumbnail
