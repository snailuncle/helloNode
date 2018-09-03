
function 机型伪装(){

  w = text("机型伪装").findOne(100);
  //如果找到控件则点击
  if(w != null){
      制作分身在这个框框里面=w.parent().parent().bounds()
      x1=制作分身在这个框框里面.left
      y1=制作分身在这个框框里面.top
      x2=制作分身在这个框框里面.right
      y2=制作分身在这个框框里面.bottom
      var w5 = text("设置").boundsInside(x1,y1,x2,y2).findOne(1000);
      if(w5 != null){
        w5.click()
        log("已经点击了机型伪装设置")
      }else{
        log('没有找到机型伪装设置,停止脚本')
        exit()
      }
  }

  w = text("手机品牌：").findOne(100);
  //如果找到控件则点击
  if(w != null){
    x=w.bounds().centerX()+300
    y=w.bounds().centerY()
    press(x,y,1)
    sleep(1000)
    x=376
    y=随机坐标y()
    xy={"x":x,"y":y}
    log(xy)
    log(xy.x,xy.y)
    press(xy.x,xy.y,1)
  }
  sleep(300)
  w=text('换一换').findOne(300)
  if(w){
    w.click()
    sleep(300)

  }
  w=text('启用机型伪装').findOne(300)
  if(w){
    w.click()
    sleep(300)
    sleep(3000)
  }


}
// id('iv_back').findOne(300).click()
// sleep(3000)
//生成从minNum到maxNum的随机数
function 随机坐标y(minNum,maxNum){
  // 376,  313, 0xfafafa
  // 366,  971, 0xfafafa
  minNum = minNum || 313;
  maxNum = maxNum || 966;
  log("minNum=",minNum)
  log("maxNum=",maxNum)
  return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10)
}


var circle = {};
circle.机型伪装 = 机型伪装
module.exports = circle;
