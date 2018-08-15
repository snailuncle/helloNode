

  auto();


  console.show();


  粉丝名字="笨到心"

  while(1){
    if(text(粉丝名字).findOne(100)){
      log("找到了",粉丝名字)
      报警()
      break;
    }
    上滑()
    sleep(100)

  }


  function 上滑(){
    // 518,  337, 0xe1e1e1
    // 517, 1386, 0xfefefe
    // var x1=318  //0.29
    // var y1=1425  //0.74
    // var x2=818  //0.75
    // var y2=466  //0.24


    var x1=parseInt(device.width*0.29)  //0.29
    var y1=parseInt(device.height*0.74)  //0.74
    var x2=parseInt(device.width*0.75)  //0.75
    var y2=parseInt(device.height*0.24)  //0.24
    var duration=200
    swipe(x1, y1, x2, y2, duration)
  }

  function 报警(){
    //震动两秒
    device.vibrate(2000);
    sleep(1000)
    device.vibrate(2000);
    sleep(1000)
    device.vibrate(2000);
    sleep(1000)
    exit()
  }
