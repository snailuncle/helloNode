function 点击酒滴(){

  auto();
  //请求截图
  if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
  }

  // 找酒滴的位置,并点击,然后输入词语


  //找酒滴并点击
  deviceWidth=device.width
  deviceHeight=device.height
  x1=0
  y1=0
  x2=deviceWidth
  y2=Math.floor(deviceHeight/2)

  x=x1
  y=y1
  width=x2
  height=y2
  var img = captureScreen();
  var 屏幕上方=images.clip(img, x1,y1,width,height);
  var template = images.read("/sdcard/一滴酒.png");
  ChineseSpiritsCoordinate=images.findImage(屏幕上方, template, {
    region: [x, y, width, height]
  })
  log(ChineseSpiritsCoordinate)
  x=ChineseSpiritsCoordinate.x
  y=ChineseSpiritsCoordinate.y
  click(x,y)
  //输入词语
}






var circle = {};

circle.点击酒滴 = 点击酒滴

module.exports = circle;
