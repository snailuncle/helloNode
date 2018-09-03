// 开始制作()

function 开始制作(){
  w = text("开始制作").findOne(100);
  //如果找到控件则点击
  if(w != null){
    w.click()
    sleep(1000)
  }else{
    log('没有找到==开始制作==的控件,停止')
    exit()
  }
}






var circle = {};
circle.开始制作 = 开始制作
module.exports = circle;
