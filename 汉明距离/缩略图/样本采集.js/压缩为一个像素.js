
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



imgPath='/storage/emulated/0/数独/1234缩略图/4/9.png'
//先得到bitmap
bitmap=getImgThumbnail(imgPath,1,1);




function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}
// outputObj(bitmap)
// exit()
width=bitmap.getWidth()
height=bitmap.getHeight()
config=bitmap.getConfig()

log('width=',width)
log('height=',height)
log('config=',config)
// width= 1
// height= 1
// config= ARGB_8888
// Bitmap的存储可以说包括两个部分，像素以及长,宽，颜色等描述信息。像素是Bitmap最占用内存的地方，长宽和像素位数是用来描述图片的，可以通过这些信息计算出图片的像素占用的内存大小
// Bitmap bm = BitmapFactory.decodeFile(sd_path)




//保存缩略图
imgThumbnailPath='/storage/emulated/0/数独/1234缩略图/4/一个像素.png'
files.createWithDirs(imgThumbnailPath)
saveBitmapToSDCard(bitmap, imgThumbnailPath);




