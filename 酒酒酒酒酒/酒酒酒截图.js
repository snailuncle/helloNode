auto();
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

//截图
var img = captureScreen();

// //把图片压缩为原来的一半质量并保存
// var img = images.read("/sdcard/1.png");
// images.save(img, "/sdcard/1.jpg", "jpg", 50);
// app.viewFile("/sdcard/1.jpg");
// 639,  492, 0xfde028
// 661,  507, 0xffe667
var x1=639
var y1=492
var x2=661
var y2=507
var w=x2-x1
var h=y2-y1
var src=img
// var src = images.read("/sdcard/1.png");
var clip = images.clip(src, x1,y1,w,h);
images.save(clip, "/sdcard/一滴酒.png");
app.viewFile("/sdcard/一滴酒.png");
