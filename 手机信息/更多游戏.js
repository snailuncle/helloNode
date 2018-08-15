gameName="更多游戏"


function 点击更多游戏(){
  var gameName="更多游戏"
  if(text(gameName).exists()){
    toastLog("在主页找到了游戏")
    log(gameName,"开始点击它")
    text(gameName).findOnce().parent().click()
    sleep(2000)
    // return true;
  }else{
    // 上滑()
    log("在主页的当前页面没找到游戏",gameName,"上滑页面");
  }
}
