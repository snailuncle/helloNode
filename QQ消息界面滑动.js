//请在QQ消息界面测试本脚本
launchApp("QQ");
sleep(1500)
var ra = new RootAutomator();
events.on('exit', function(){
  ra.exit();
});

var sh = new Shell(true);

while(1){
  // 180  小于180的话就找下一个
  log('开始滑动')
try{
  var s = className("LinearLayout").boundsInside(0,222,1080,747).column(-1).find().forEach(element => {
    rect1=element.bounds()
    log('每个控件的rect=',rect1)
    height=rect1.bottom-rect1.top
    if(height>=195){
      sss=rect1
      log('控件的高度=',height)
      throw "找到一个合格的控件"
    }
  });
}catch(e){
  log(e)
}
  log(sss)
  x1=500
  y2=sss.top
  x2=500
  y1=sss.bottom
  log(x1, y1, x2, y2)
  duration=300
  滑动的距离=y1-y2
  log("滑动的距离=",滑动的距离)
  //这是几种种滑动方式

  //第一种 安卓7的滑动  速度快
  // swipe(x1, y1, x2, y2, duration)

  //第二种 安卓5的root滑动 速度慢
  // Swipe(x1, y1, x2, y2, duration)

  //第三种  安卓5 的  root   ra式滑动  速度快,但鼠标不会弹起来, 也就是说在同一个地方上上下下
  // ra.swipe(x1, y1, x2, y2, duration)

  //第四种  input swipe式滑动  速度慢  异步
  // sh.exec("input swipe " + x1 + " " + y1 + " " + x2 + " " + y2);

  //第五种  input touchscreen式滑动  速度慢  异步
  // sh.exec("input touchscreen swipe " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + duration);

  //第六种  gesture滑动
  gesture(300, [x1, y1],  [x1-50,y1-50], [x1+50,y1-80],[x2, y2])

  sleep(300)
  log('结束滑动')
}

//要是滑动的速度和距离可以精确的控制就好了,
//哪位大佬有精确快速滑动的方法啊
//和小弟分享一下啊
//QQ203118908

sh.exit();
