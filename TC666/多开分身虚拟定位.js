function 虚拟定位(){
  w = text("虚拟定位").findOne(1000);
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
  sleep(5500)
  w = text("定位到此").findOne(1000);
  //如果找到控件则点击

  if(w != null){
    随机滑动()
    sleep(2222)
    随机滑动()
    sleep(2222)
    w.click()
    sleep(1000)
  }else{
    log('没有找到==定位到此==的控件,停止')
    exit()
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

function 随机滑动(){
  y=随机坐标y()
  x=随机坐标y()

  屏幕宽度=device.width
  屏幕高度=device.height
  x0=parseInt(屏幕宽度/2)
  y0=parseInt(屏幕高度/2)
  swipe(x0, y0, x, y, 200)
  sleep(200)
}



var circle = {};
circle.虚拟定位 = 虚拟定位
module.exports = circle;
