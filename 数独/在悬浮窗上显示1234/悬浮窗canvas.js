var intArrRW=require('./整数数组读写接口.js')
var img2Thumbnail=require('./图片变成缩略图.js')
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
imgPath='/storage/emulated/0/数独/1234原始样本数据/4/31.png'
画一个数字(imgPath)
function 画一个数字(imgPath){
  thumbnail=img2Thumbnail.getImgThumbnailAndLattice(imgPath)
  imgPixelsPath=thumbnail.latticePath
  // imgPixels=files.readBytes(imgPixelsPath)
  imgPixels=intArrRW.read(imgPixelsPath)
  // log(imgPixels)
  ui.run(function(){
    var bitmap=pixels2bitmap(imgPixels)
    // canvas.drawBitmap(bitmap, matrix, paint);
    w.img.setImageBitmap(bitmap);
    // outputObj(w.img)
    // w.setPosition(800,300)
    //与左边的距离
    // w.img.setTranslationX(300)
    //与上边的距离
    // w.img.setY(100)
    // w.img.setLeft(100)
    // sleep(1000)
    // w.img.setPaddingRelative(311,1,311,111)
    w.img.setAdjustViewBounds(true)
    sleep(1000)
    // w.img.setPadding(311,111,311,111)
    // sleep(1000)
    // w.img.resetPaddingToInitialValues()
    // sleep(1000)
    // animateTransform = function animateTransform() {/*
    //   void animateTransform(android.graphics.Matrix)
    //   */}

    //   setImageBitmap = function setImageBitmap() {/*
    //   void setImageBitmap(android.graphics.Bitmap)
    //   */}














  })

}


function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}
