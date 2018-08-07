
//5秒下滑一次
//点击弹框



threads.start(function(){
  //在新线程执行的代码
  while(true){
//如果出现已停止运行
var sendButton = text("已停止运行").findOnce();
    if(sendButton){
      log("出现已停止运行界面")
      click("确定")
      log("已点击确定")
    }
    sleep(1000)
  }
});


var sh = new Shell(true);


// launchApp("HAHA小视频");
// sleep(3000)
var name = getPackageName("HAHA小视频"); //返回
while(1){
  if(currentPackage()==name){
  }else{
    log("当前应用不是哈哈小视频,启动一次")
    launchApp("HAHA小视频");
    sleep(5000)
  }
  window=id("swipe_container").findOnce()
  if(window){
    rectWindow=window.bounds()
    log(rectWindow)
    top=rectWindow.top
    bottom=rectWindow.bottom
    x1=300
    y1=top+300
    x2=500
    y2=bottom-300
    log(x1, y1, x2, y2)
    duration=600




    // var sh = new Shell(true);
    // while(1){
    //   sh.exec("input swipe 500 222 500 408");
    // }

    sh.exec("input swipe " + x1 + " " + y1 + " " + x2 + " " + y2);




    // ra.swipe(x1, y1, x2, y2, duration)

    // Swipe(x1, y1, x2, y2, duration)

    // swipe(x1, y1, x2, y2, duration)
    log("下滑一次")
    sleep(5000)
  }
}


sh.exit();




// while(1){

//   Swipe(300,416, 500, 1567, 666)
//       sleep(5000)
// }

