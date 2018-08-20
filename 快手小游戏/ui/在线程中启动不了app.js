"ui";
ui.layout(
  <vertical padding="16">
      <button id="qq">启动QQ</button>
  </vertical>
);
ui.qq.on("click", () => {
  threads.start(function(){
    gamePackageName = getPackageName("快手小游戏")
    主程序()
  })
});
function  主程序(){
  while(1){
    if (currentPackage() == gamePackageName) {
      sleep(1000);
      errorTime = errorTime + 1
      if (errorTime > 10) {
        log('启动快手小游戏app,是快手小游戏,但界面不认识超过十次',gamePackageName)
        appOpen(gamePackageName)
        errorTime = 1
      }
    } else {

      log("当前包名不是快手小游戏\n当前包名是", "=" + currentPackage() + "=", "包名长度=", currentPackage().length)
      sleep(2000)
      log('启动快手小游戏app,不是快手小游戏',gamePackageName)

      appOpen(gamePackageName)
    }
    log("跳出循环111")
    break;
    log("跳出循环")
  }
}
function appOpen(gamePackageName){
  launch(gamePackageName);
}


