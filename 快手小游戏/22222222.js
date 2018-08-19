w1 = text("回到首页").findOnce();
w2 = text("对方已离开房间").findOnce();
w3 = id("tv_win_compare").findOnce();
if(w1 != null && w2!=null && w3!=null){
    log( "pk结果")
}else{
  log("啥也没有")
}
