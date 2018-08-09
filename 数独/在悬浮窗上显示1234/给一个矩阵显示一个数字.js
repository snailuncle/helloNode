
importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)
importClass(java.io.File)
importClass(java.io.FileOutputStream)
title="识别数字"
path='https://www.baidu.com/img/bd_logo1.png'
var w = floaty.rawWindow(
  <frame background="#00FF00">
    <vertical  margin="3" weightSum="6">
      <text id="title"  layout_weight="1" text="{{title}}" gravity="center" color="#ffffff" size="34" />
      <img id="img" layout_weight="5" src="{{path}}" bg="#0000ff" />
    </vertical>
  </frame>
);
w.setSize(1080, 1920)
sleep(1000)
setTimeout(()=>{
  w.close();
}, 3300);
imgPixelsPath='/storage/emulated/0/数独/1234矩阵信息/4/9.arr'
imgPixels=files.readBytes(imgPixelsPath)
function pixels2bitmap(pixels){
  width = 8
  height = 11
  bitmapTem = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
  index=0
  stride=width
  x=0
  y=0
  width=width
  length=height
  bitmapTem.setPixels(pixels, index, stride, x, y, width, length);
  return bitmapTem
}
ui.run(function(){
  imgPixels=[
    -1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,
    -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
    -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
    -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
    -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
    -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
    -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111
  ]
  var bitmap=pixels2bitmap(imgPixels)
  // canvas.drawBitmap(bitmap, matrix, paint);
  w.img.setImageBitmap(bitmap);
})



















































// Bitmap createBitmap(int width, int height, Config config);
// canvas.drawARGB(255,0,0,0); // 填充黑色
// var img=images.read(path)
// canvas.drawImage(img, matrix, paint);
// 原始图片=false
// function 绘大图(path){
//   // Bitmap createBitmap(int width, int height, Config config);
//   // canvas.drawARGB(255,0,0,0); // 填充黑色
//   var paint = new Paint();
//   var matrix = new android.graphics.Matrix();
//   var img=images.read(path)
//   // matrix.postRotate(direction.angle, SNAKE_HEAD.getWidth() / 2, SNAKE_HEAD.getHeight() / 2);
//   img.getWidth()
//   matrix.postTranslate((canvas.width/2-img.getWidth()/2)-30,canvas.height/2-img.getHeight()/2);
//   var Range = 360
//   var Rand = Math.random();
//   var num = Math.round(Rand * Range); //四舍五入
//   canvas.rotate(num);
//   // canvas.translate(340, 340);
//   canvas.drawImage(img, matrix, paint);
//   count = canvas.saveLayerAlpha(0, 0, 200, 200, 0x88, 0x1F);
//   log("count=",count)
//   canvas.restore();
//   return bitmap;
//   }
// function 绘图(path){
//   // 大图=绘大图(path);
//   ui.run(function(){
//     w.img.setImageBitmap(大图);
//   });
// }
// nums=numss
// path='/storage/emulated/0/QQ图中图/'+'原始截图.png'
// 绘图(path)
// sleep(330)
