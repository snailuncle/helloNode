function 当前处于移动网络点击确定(){
  var c = text("当前处于移动⽹络下，会消耗流量").findOne(5000);
  if(c){
    log('有移动网络提示')
    click("好的")
  }else{
    log("没找到移动网络提示")
  }
}
