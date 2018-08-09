
importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)
importClass(java.io.File)
importClass(java.io.FileOutputStream)
importClass(java.lang.Integer)

sd_path='/storage/emulated/0/数独/1234缩略图/4/8.png'
bitmap = BitmapFactory.decodeFile(sd_path)

function outputObj(obj) {
  var description = "";
  for (var i in obj) {
    description += i + " = " + obj[i] + "\n";
  }
  log(description);
}

// outputObj(bitmap)


bitmapTem = Bitmap.createBitmap(8, 11, bitmap.config);
// bitmapTem = Bitmap.createBitmap(8, 11, Config.ARGB_8888);

pixels=[
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,
  -1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000

]
index=0
//stride应该大于width
stride=8
x=0
y=0
width=8
length=11
log('开始改变颜色')
bitmapTem.setPixels(pixels, index, stride, x, y, width, length);
log(bitmapTem)

imgPath='/storage/emulated/0/数独/1234缩略图/重塑图片/图片重生.png'
files.createWithDirs(imgPath)
saveBitmapToSDCard(bitmapTem, imgPath)


log('结束改变颜色')

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
// bitmapTem.setPixels(pixels, i * lineH * bw, bw, 0, i * lineH,
//   speed, lineH);

// 2.bitmap.setPixels(
  // int []  pixels,
  // int index,
  // int  stride,
  // int x,
  // int  y,
  // int width,
  // int length)

// 参数  pixels数组表示像素RGB值

//           index表示从数组的那里开始

//           stride表示bitmap的跨宽，其中除了一行像素点的个数外还有其他信息，所以通常stride要大于width的值。

//           x,y表示从bitmap的哪个坐标开始。

//          width, length表示多宽多行

// 其中记住width*length要小于或等于pixels的数组长度，否则会抛出异常。



// function outputObj(obj) {
//   var description = "";
//   for (var i in obj) {
//     description += i + " = " + obj[i] + "\n";
//   }
//   log(description);
// }

// outputObj(bitmap)
















// // bitmap.setPixel(i, j, colors.argb(alpha, gray, gray, gray));






// setPixels


