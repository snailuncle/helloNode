"ui";

ui.layout(
  <vertical padding="16">
    <horizontal>
      <text textSize="16sp">选择游戏</text>
      <spinner id="sp1" entries="消砖块|连连看|拯救萌宠|翻翻乐|圈圈消除|大圣来了"/>
      <button id="ok">运行脚本</button>
    </horizontal>
    <vertical>
      <text w="*" gravity="center" color="#111111" size="16">注册码:加微信发送标识码,获得注册码</text>
      <input id="name" w="*" h="50" hint="发送标识码,获取注册码" />
      <button id="okma">点击获取标识码</button>
    </vertical>
    <vertical>
      <text textSize="16sp">仅适用1920*1080且安卓7的手机</text>
      <text textSize="16sp">扫一扫,加微信,没有注册码,每次只能使用5分钟</text>
      <img src="file:///sdcard/快手小游戏截图/二维码.jpg"/>

    </vertical>



  </vertical>
);

ui.okma.on("click", () => {
  标识码=device.fingerprint
  log('手机标识码=',标识码)
  setClip(标识码)
});



ui.ok.on("click", ()=>{
  // outputObj(ui.ok)
  // sleep(2000)
  // exit()
  支付宝="打开支付宝首页搜索“525333918”，即可领红包"
  setClip(支付宝)
  var i = ui.sp1.getSelectedItemPosition();
  // ui.ok.setDisabled(true)

  threads.shutDownAll()

  toast("您的选择是" + ui.sp1.selectedItem);
  sleep(2000)
  var 注册码=ui.name.text()
  log("注册码=",注册码)
  if(!(注册码.indexOf('X') != -1 && 注册码.indexOf('@') != -1 && 注册码.indexOf('$') != -1)){toastLog('注册码不对,加微信获得注册码,\n使用版每次只能使用5分钟');
  threads.start(function(){
    var timestamp1=new Date().getTime()
    while(1){
      sleep(1111)
      var timestamp2=new Date().getTime()
      if(timestamp2-timestamp1 > 1000*60*5){
        toastLog("五分钟已到,停止运行")
        threads.shutDownAll()
      }
    }

  })



}
  sleep(3000)
  threads.start(function(){
    //设置剪贴板为支付宝
    log("主人开始做运动")
    主人()

  })











});






























// auto();


// 爸爸=bounds(0,0,1080,1920).depth(0).findOnce()
// if(爸爸){
//   log("游戏窗口爸爸在")
//   log("爸爸=",爸爸)

//   r=爸爸.childCount()
//   log("r=",r)
// }else{
//   log("游戏窗口爸爸不在")
//   // return ;
// }

// // exit()


function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}




// if(!requestScreenCapture()){
//     toast("请求截图失败");
//     exit();
// }

// log("截图分水岭")


// 爸爸=bounds(0,0,1080,1920).depth(0).findOnce()
// if(爸爸){
//   log("游戏窗口爸爸在")
//   log("爸爸=",爸爸)

//   r=爸爸.childCount()
//   log("r=",r)
// }else{
//   log("游戏窗口爸爸不在")
//   // return ;
// }

// exit()
//==================脚本主控制区======================================










// gameName = "连连看"
//  gameName = "拯救萌宠"
// gameName = "消砖块"
// gameName = "圈圈消除"
//  gameName = "翻翻乐"
// gameName = "大圣来了"

















function 主人() {

  isMonkeyExist = false





  gamePackageName = "com.kwai.sogame";
  imgPath = "/sdcard/快手小游戏截图/";
  files.ensureDir(imgPath);

  // pageInfo=[
  //     ["黄色小指头",391,12,447,87,"某游戏"],
  //     ["最近对战",605,205,978,301,"主页"],
  //     ["已对",481,937,570,990,"pk结果"],
  //     ["打字",186,1724,272,1787,"聊天"]
  // ]






  //左上角第一个点的中心坐标234,658
  //左上角
  //大=343,655              109,0             0,109
  //中=308,657                73,0            0,73
  //小=272,660                38,0            0,39
  bigMiddleSmall = [109, 73, 38]
  //圈圈颜色是一个列表,列表中每个元素是对象,对象有两个属性,colorName,colorValue

  CircleColors = [{
      colorName: "紫色",
      colorValue: ["#BB30FD"]
    },
    {
      colorName: "粉色",
      colorValue: ["#FF76E8"]
    },
    {
      colorName: "蓝色",
      colorValue: ["#00C4FE"]
    },
    {
      colorName: "绿色",
      colorValue: ["#8BDA40"]
    },
    {
      colorName: "橙色",
      colorValue: ["#FF9C00"]
    },
    {
      colorName: "红色",
      colorValue: ["#F8395E"]
    },
    {
      colorName: "黄色",
      colorValue: ["#FFFF00", "#FBFE08"]
    }
  ]

  NinePoints = [{
      x: 235,
      y: 656,
      sequenceNumber: 1
    }, {
      x: 540,
      y: 655,
      sequenceNumber: 2
    }, {
      x: 844,
      y: 655,
      sequenceNumber: 3
    },
    {
      x: 236,
      y: 960,
      sequenceNumber: 4
    }, {
      x: 541,
      y: 962,
      sequenceNumber: 5
    }, {
      x: 844,
      y: 962,
      sequenceNumber: 6
    },
    {
      x: 235,
      y: 1264,
      sequenceNumber: 7
    }, {
      x: 540,
      y: 1265,
      sequenceNumber: 8
    }, {
      x: 845,
      y: 1265,
      sequenceNumber: 9
    }

  ]
  ThreePoints = [{
    x: 233,
    y: 1720,
    sequenceNumber: 1
  }, {
    x: 537,
    y: 1715,
    sequenceNumber: 2
  }, {
    x: 841,
    y: 1717,
    sequenceNumber: 3
  }]
  //圈圈消除参数
  放置时间 = 50
  放置后的间隔时间 = 250
  mismatchTime = 1000


  gameName = ui.sp1.selectedItem
  log("gameName=", gameName)
  while (1) {
    errorTime = 1
    let page = whichPage();
    log("\n当前界面=", page)
    // exit()
    switch (page) {
      case "某游戏":
        gamePlay(gameName)
        break;
      case "主页副页":
        gameOpen(gameName)
        break;
      case "主页":
        点击更多游戏()
        break;
      case "pk结果":
        gameResult()
        break;
      case "聊天":
        chatInterface()
        break;

      case "个人信息":
        otherManInfo()
        break;
      default:
        if (currentPackage() == gamePackageName) {
          sleep(1000);
          errorTime = errorTime + 1
          if (errorTime > 10) {
            log('启动快手小游戏app,是快手小游戏,但界面不认识超过十次',gamePackageName)
            appOpen(gamePackageName)
            errorTime = 1
          }
          break;
        } else {

          log("当前包名不是快手小游戏\n当前包名是", "=" + currentPackage() + "=", "包名长度=", currentPackage().length)
          sleep(2000)
          log('启动快手小游戏app,不是快手小游戏',gamePackageName)

          appOpen(gamePackageName)
        }
    }
  }



}






function gamePlay(gameName) {
  switch (gameName) {
    case "消砖块":
      xiaoZhuanKuai()
      break;
    case "连连看":
      lianLianKan()
      break;
    case "拯救萌宠":
      zhengJiuMengChong()
      break;
    case "大圣来了":
      daShengLaiLe()
      break;
    case "圈圈消除":
      quanQuanXiaoChu()
      break;

    case "翻翻乐":
      fanFanLe()
      break;
    default:
      log(gameName, "游戏名字你写错了,没有这个游戏的脚本")
      alert()
  }
}



function otherManInfo() {

  back()
  sleep(2000)
  for (let i = 0; i < 3; i++) {
    if (whichPage() == "聊天" || whichPage() == "pk结果") {
      log("从别人信息页返回到了聊天页")
      //点击左上角箭头,返回主页
      back()
      sleep(2000)
    } else if (whichPage() == "主页副页") {
      log("从pk页返回到了聊天页又返回到了主页副页")

      return true;
    } else if (whichPage() == "某游戏") {
      return;
    }





  }
  log("从别人信息返回聊天页异常")
  alert()
  return false;




}




function gameResult() {
  //在pk页,按两次back返回主页
  //按一次是聊天
  //按二次是主页
  back()
  sleep(2000)
  for (let i = 0; i < 3; i++) {
    if (whichPage() == "聊天") {
      messageSend()
      log("从pk页返回到了聊天页")
      //点击左上角箭头,返回主页
      back()
      sleep(2000)
    } else if (whichPage() == "主页副页") {
      log("从pk页返回到了聊天页又返回到了主页")

      return true;
    } else if (whichPage() == "某游戏") {
      return;
    }





  }
  log("从pk页返回主页异常")
  alert()
  return false;
}

function chatInterface() {
  //在聊天页,按一次back返回主页
  back()
  sleep(2000)
  for (let i = 0; i < 3; i++) {
    if (whichPage() == "聊天") {
      log("从聊天页返回到了主页失败,准备点击下一次back键")
      back()
      sleep(2000)
    } else if (whichPage() == "主页副页") {
      log("从聊天页返回到了主页副页")

      return true;
    } else if (whichPage() == "某游戏") {
      return;
    }
  }
  log("从聊天页返回主页异常")
  alert()
  return false;
}

function appOpen(gamePackageName) {
  toastLog("启动快手小游戏0820")
  sleep(2000)
  if (currentPackage() == gamePackageName) {

  } else {
    log("launch(gamePackageName)",gamePackageName)
    launch(gamePackageName);
    sleep(1000);
  }
  for (let i = 0; i < 15; i++) {

    if (whichPage() == "主页" || whichPage() == "主页副页" || whichPage() == "pk结果" || whichPage() == "聊天") {
      return true;
    } else {
      sleep(1000);
    }
    log("appOpen(gamePackageName)","计数中",i)
  }


  log("快手小游戏启动异常")
  alert()
  return false;
}

function 点击更多游戏() {
  var gameName = "更多游戏"
  if (text(gameName).exists()) {
    toastLog("在主页找到了游戏")
    log(gameName, "开始点击它")
    text(gameName).findOnce().parent().click()
    sleep(2000)
    // return true;
  } else {
    // 上滑()
    log("在主页没有找到更多游戏", gameName);
  }
}




function gameOpen(gameName) {
  log(gameName)
  if (whichPage() == "主页副页") {

    for (let i = 0; i < 10; i++) {
      if (text(gameName).exists()) {
        toastLog("在主页副页找到了游戏")
        log(gameName, "开始点击它")
        text(gameName).findOnce().parent().click()
        sleep(2000)
        return true;
      } else {
        上滑()
        log("在主页的当前页面没找到游戏", gameName, "上滑页面");
      }
    }
    log("在主页没找到游戏", gameName, "脚本停止运行");
    alert()
    exit()
  } else {
    toastLog("现在不在主页副页,不能打开任何游戏")
    sleep(2000)
  }
  return false;
}


function alert() {
  device.vibrate(2000);
  sleep(1000);
  device.vibrate(2000);
  exit();
}



function whichPage() {
  let w1 = null,
    w2 = null,
    w3 = null,
    w4 = null;
  //某游戏
  if (是否游戏界面()) {
    return "某游戏"
  }

  // w2 = text("换个游戏").findOnce();
  // w3 = id("msg_container").findOnce();
  // if(w1 != null && w2!=null && w3!=null){
  //     return "pk结果"
  // }

  //pk结果
  // w1 = text("换个对手").findOnce();
  // w2 = text("换个游戏").findOnce();
  // w3 = id("msg_container").findOnce();
  // if(w1 != null && w2!=null && w3!=null){
  //     return "pk结果"
  // }
  w1 = text("回到首页").findOnce();
  w2 = text("对方已离开房间").findOnce();
  w3 = id("tv_win_compare").findOnce();
  if (w1 != null && w2 != null && w3 != null) {
    return "pk结果"
  }
  //聊天
  w1 = id("title1").findOnce();
  w2 = text("发送").findOnce();
  w3 = text("戳这里打字").findOnce();
  w4 = id("sendavatar").findOnce();
  if (w1 != null && w2 != null && w3 != null && w4 == null) {
    return "聊天"
  }
  //主页
  w1 = text("小游戏").findOnce();
  w2 = text("一起玩").findOnce();
  w3 = id("icon_iv").findOnce();
  // log("w1=", w1)
  // log("w2=", w2)
  // log("w3", w3)
  if (w1 != null && w2 != null && w3 != null) {
    return "主页"
  }
  //个人信息
  w1 = textContains("电玩号").findOnce();
  w2 = text("常玩的游戏").findOnce();
  w3 = id("tv_id").findOnce();
  if (w1 != null && w2 != null && w3 != null) {
    return "个人信息"
  }

  //别人信息222
  // w1 = textContains("前在线").findOnce();
  // w2 = id("tv_nick_name").findOnce();


  // w3 = id("tv_gender").findOnce();
  // if(w1 != null && w2!=null && w3!=null){
  //     return "别人信息"
  // }




  //别人信息
  // w1 = id("tv_gender").findOnce();
  // w2 = id("tv_id_or_online_time").findOnce();
  // w3 = id("carousel_view").findOnce();
  // if(w1 != null && w2!=null && w3!=null){
  //     return "别人信息"
  // }

  // let gameNameList=["消砖块","连连看","吃鸡游戏","高尔夫","跳一跳","斗兽棋","你画我猜","拯救萌宠","六角拼拼","宠物足球","摩天汉堡","蚂蚁夫妇","谁是卧底","象棋","方块消除","过马路","飞猪小奇","火力全开","大圣来了","心动魔方","圈圈消除","娃娃机","跳冰箱","两点之间","翻转棋","一起跳舞","互怼小霸王","吹泡泡","动物塔","双人拼图","蛋糕塔","五子棋","2048","手势告白","数来钱","容嬷嬷来了","奔向傻白甜","表情大战","男左女右","火锅侠","咆哮二驴","女神来了","跳舞机","扫雷","翻翻乐"]


  // let gameNameList=["消砖块","吃鸡游戏","高尔夫","你画我猜","谁是卧底","弹球大战","勇攀高峰","更多游戏"]

  // let gameNameCount=0
  // for(let i=0;i<gameNameList.length;i++){
  //     let w = text(gameNameList[i]).findOnce();
  //     if(w != null){
  //         gameNameCount++;
  //     }
  //     if(gameNameCount>6){
  //     return "主页"
  //     }
  // }
  // log("gameNameCount=",gameNameCount)
  gameNameList = ["消砖块", "连连看", "吃鸡游戏", "高尔夫", "跳一跳", "斗兽棋", "你画我猜", "拯救萌宠", "六角拼拼", "宠物足球", "摩天汉堡", "蚂蚁夫妇", "谁是卧底", "象棋", "方块消除", "过马路", "飞猪小奇", "火力全开", "大圣来了", "心动魔方", "圈圈消除", "娃娃机", "跳冰箱", "两点之间", "翻转棋", "一起跳舞", "互怼小霸王", "吹泡泡", "动物塔", "双人拼图", "蛋糕塔", "五子棋", "2048", "手势告白", "数来钱", "容嬷嬷来了", "奔向傻白甜", "表情大战", "男左女右", "火锅侠", "咆哮二驴", "女神来了", "跳舞机", "扫雷", "翻翻乐","拯救丘比特","吧唧兔","勇攀高峰","卷饼侠"]

  gameNameCount = 0
  for (let i = 0; i < gameNameList.length; i++) {
    let w = text(gameNameList[i]).findOnce();
    if (w != null) {
      gameNameCount++;
    }
    if (gameNameCount > 9) {
      return "主页副页"
    }
  }
  log("gameNameCount=", gameNameCount)



  // w = textContains("换个游戏").findOnce();

  return "脚本不认识这个界面";

}

function 上滑() {
  var x1 = 700,
    y1 = 1600,
    x2 = 1000,
    y2 = 630,
    duration = 1000;
  swipe(x1, y1, x2, y2, duration)
  sleep(1000)
}

function 下滑() {
  //快速下滑
  var x1 = 700,
    y1 = 800,
    x2 = 500,
    y2 = 1630,
    duration = 300;
  swipe(x1, y1, x2, y2, duration)
  sleep(1000)
}








//==================以下是游戏运行是的脚本===========================================
function xiaoZhuanKuai() {
  intervalTime = 100;
  t = 10
  press(132, 1552, intervalTime);
  sleep(t)
  press(391, 1587, intervalTime);
  sleep(t)

  press(665, 1599, intervalTime);
  sleep(t)

  press(962, 1552, intervalTime);
  sleep(t)

}

function zhengJiuMengChong() {
  Threshold = 3
  if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }
  let img = captureScreen();
  sleep(30);
  let targetCoordinatesArray = coordinateAnalysisAndExtract(img);
  ////log(targetCoordinatesArray);
  coordinatesClick(targetCoordinatesArray);
  targetCoordinatesArray = coordinateAnalysisAndExtractRight(img);
  ////log(targetCoordinatesArray);
  coordinatesClick(targetCoordinatesArray);
  targetCoordinatesArray = coordinateAnalysisAndExtractDown(img);
  ////log(targetCoordinatesArray);
  coordinatesClick(targetCoordinatesArray);
  //增加点击火箭筒
  rocketClick(img);
  sleep(80);


}


//-------以下是拯救萌宠使用的小函数----------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function rocketClick(img) {
  var rocket = images.read(imgPath + "火箭筒.png");
  //截图并找图
  var p = findImage(img, rocket, {
    region: [52, 482, 950, 1145],
    threshold: 0.8
  });
  if (p) {
    ////log("找到火箭筒啦: " + p);
    click(p.x, p.y);
  }
}

function coordinatesClick(targetCoordinatesArray) {
  for (j = 0, len = targetCoordinatesArray.length; j < len; j++) {
    x = targetCoordinatesArray[j][0];
    y = targetCoordinatesArray[j][1];
    click(x, y);
    // press(500, 1000, 1200);
  }
}

function coordinateAnalysisAndExtractDown(img) {
  //分析提取图片中相邻色块颜色相同的坐标
  //只分析色块的右方和下方,如果右边或者下边颜色一样,那么就记录这个坐标
  //起点坐标是137,538
  //终点坐标是1027,1597
  var xStart = 137,
    yStart = 1530,
    xEnd = 1027,
    yEnd = 1597,
    //色块上下间距120
    //色块左右间距126
    SpacingLeftAndRight = 124,
    SpacingUpAndDown = 122,

    // 横排8个竖排9个
    //最后一排不需要考虑,在第8排的时候,就已经检测过第9排了.
    //横排竖排都一样,最后一排都不需要考虑
    HorizontalNumber = 8;


  var targetCoordinatesArray = new Array()
  // 从左往右,从上到下.
  for (var i = 1; i <= HorizontalNumber - 1; i++) {

    //获取在点(x, y)处的颜色
    // ////log(xStart+(i-1)*SpacingLeftAndRight, yStart+(j-1)*SpacingUpAndDown);
    var ColorMainColorBlock = images.pixel(img, xStart + (i - 1) * SpacingLeftAndRight, yStart);
    var ColorRightColorBlock = images.pixel(img, xStart + i * SpacingLeftAndRight, yStart);
    var ColorDownColorBlock = images.pixel(img, xStart + (i - 1) * SpacingLeftAndRight, yStart);
    threshold = Threshold;
    if (colors.isSimilar(ColorMainColorBlock, ColorRightColorBlock, threshold)) {
      var targetCoordinates = new Array(xStart + (i - 1) * SpacingLeftAndRight, yStart)
      targetCoordinatesArray.push(targetCoordinates)
    }

  }
  return targetCoordinatesArray;
}



//边上的色块
function coordinateAnalysisAndExtractRight(img) {
  //分析提取图片中相邻色块颜色相同的坐标
  //只分析色块的右方和下方,如果右边或者下边颜色一样,那么就记录这个坐标
  //起点坐标是137,538
  //终点坐标是1027,1597
  var xStart = 1008,
    yStart = 547,
    xEnd = 1027,
    yEnd = 1597;
  //色块上下间距120
  //色块左右间距126
  SpacingLeftAndRight = 124,
    SpacingUpAndDown = 122,

    // 横排8个竖排9个
    //最后一排不需要考虑,在第8排的时候,就已经检测过第9排了.
    //横排竖排都一样,最后一排都不需要考虑
    VerticalNumber = 9;

  var targetCoordinatesArray = new Array()
  // 从左往右,从上到下.

  for (var j = 1; j <= VerticalNumber - 1; j++) {
    //获取在点(x, y)处的颜色
    // ////log(xStart+(i-1)*SpacingLeftAndRight, yStart+(j-1)*SpacingUpAndDown);
    var ColorMainColorBlock = images.pixel(img, xStart, yStart + (j - 1) * SpacingUpAndDown);
    var ColorDownColorBlock = images.pixel(img, xStart, yStart + j * SpacingUpAndDown);
    threshold = Threshold;
    if (colors.isSimilar(ColorMainColorBlock, ColorDownColorBlock, threshold)) {
      var targetCoordinates = new Array(xStart, yStart + (j - 1) * SpacingUpAndDown)
      targetCoordinatesArray.push(targetCoordinates)
    }
  }

  return targetCoordinatesArray;
}






function coordinateAnalysisAndExtract(img) {
  //分析提取图片中相邻色块颜色相同的坐标
  //只分析色块的右方和下方,如果右边或者下边颜色一样,那么就记录这个坐标
  //起点坐标是137,538
  //终点坐标是1027,1597
  var xStart = 137,
    yStart = 542,
    xEnd = 1027,
    yEnd = 1597,
    //色块上下间距122
    //色块左右间距124
    SpacingLeftAndRight = 124,
    SpacingUpAndDown = 122,

    // 横排8个竖排9个
    //最后一排不需要考虑,在第8排的时候,就已经检测过第9排了.
    //横排竖排都一样,最后一排都不需要考虑
    HorizontalNumber = 8,
    VerticalNumber = 9;

  var targetCoordinatesArray = new Array()
  // 从左往右,从上到下.
  for (var i = 1; i <= HorizontalNumber - 1; i++) {
    for (var j = 1; j <= VerticalNumber - 1; j++) {
      //获取在点(x, y)处的颜色
      // ////log(xStart+(i-1)*SpacingLeftAndRight, yStart+(j-1)*SpacingUpAndDown);
      var ColorMainColorBlock = images.pixel(img, xStart + (i - 1) * SpacingLeftAndRight, yStart + (j - 1) * SpacingUpAndDown);
      var ColorRightColorBlock = images.pixel(img, xStart + i * SpacingLeftAndRight, yStart + (j - 1) * SpacingUpAndDown);
      var ColorDownColorBlock = images.pixel(img, xStart + (i - 1) * SpacingLeftAndRight, yStart + j * SpacingUpAndDown);
      threshold = Threshold;
      if (colors.isSimilar(ColorMainColorBlock, ColorRightColorBlock, threshold) || colors.isSimilar(ColorMainColorBlock, ColorDownColorBlock, threshold)) {
        var targetCoordinates = new Array(xStart + (i - 1) * SpacingLeftAndRight, yStart + (j - 1) * SpacingUpAndDown)
        targetCoordinatesArray.push(targetCoordinates)
      }
    }
  }
  return targetCoordinatesArray;
}













//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------























































































function lianLianKan() {


  // let imgBackground=[images.read("/sdcard/js截图3/背景1.png"),images.read("/sdcard/js截图3/背景2.png"),images.read("/sdcard/js截图3/背景3.png")];
  imgBackground = [images.read(imgPath + "背景1.png")];
  //行列数目
  rowsNumber = 10;
  columnsNumber = 7;
  //=============================================================================
  //=========================连连看控制中心=============================================
  //=============================================================================


  //图片仓库,用来存放识别出来的图片信息
  warehouse = [];
  planePicture = new Array(); //先声明一维
  for (let k = 0; k < rowsNumber + 2; k++) { //一维长度为i,i为变量，可以根据实际情况改变
    planePicture[k] = new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；
    for (let j = 0; j < columnsNumber + 2; j++) { //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
      planePicture[k][j] = false; //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
    }
  }
  // ////log(planePicture.length)
  // ////log(planePicture)
  // exit()
  // 第一个和最后一个图片坐标
  imgFistCenterCoordinate = [114, 472];
  imgLastCenterCoordinate = [966, 1753];
  //图片宽高
  imgWidthHeight = [76, 50]
  imgWidthHeight2 = [38, 25]
  // 图片的左右和上下间隔距离
  SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
  SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));

  // 将图片整理到仓库
  warehouseReorganize();
  //遍历仓库中的图片
  lenWarehouse = warehouse.length;

  kk = 1

  for (let j = 0; j < lenWarehouse; j++) {
    // ////log("第",j,"个图片组\n");
    let lenimgs = warehouse[j].length;
    if (lenimgs > 30) {
      return;
    }
    for (let k1 = 0; k1 < lenimgs; k1++) {
      for (let k2 = k1 + 1; k2 < lenimgs; k2++) {
        ////log("当前对比的图片是\n",warehouse[j][k1], warehouse[j][k2],"\n以上是当前对比的两张图片");
        // sleep(10);
        if (warehouse[j][k1].imgEntity == false || warehouse[j][k2].imgEntity == false) {
          break;
        }
        ////log(j,"号组图片数量=",warehouse[j].length,"   \n正在判断的两张图片行列号码是: ",rowExtract(warehouse[j][k1]),columnExtract(warehouse[j][k1]),rowExtract(warehouse[j][k2]),columnExtract(warehouse[j][k2]))
        let result = penApple(warehouse[j][k1], warehouse[j][k2]);
        if (result) {
          //销毁点击过的对象
          //第几个图片组
          //那两个图片
          //设置属性为空,而不是删除对象,否则造成索引错误
          warehouse[j][k1].imgEntity = false
          warehouse[j][k2].imgEntity = false
          //删除之前数组内容
          // 直接移除,而不是改变属性
          ////log(warehouse[j],warehouse[j].length)
          // warehouse[j].splice(k1,1);
          // warehouse[j].splice(k2-1,1);
          ////log("已销毁",j,k1)
          ////log("已销毁",j,k2)
          //删除之后数组内容
          ////log(warehouse[j],warehouse[j].length)

        }
        // if(kk==7){exit()}
        kk = kk + 1
        ////log("两张图片对比完毕");
      }
    }
  }
  ////log("一次图片消除动作结束")
  ////log(warehouse)

}











































































//=============================================================================
//=========以下大部分是连连看用的小函数=====================================================
//=============================================================================


function penApple(p1, p2) {
  // if(!(rowExtract(p1)==10 && columnExtract(p1)==2 && rowExtract(p2)==10 && columnExtract(p2)==7)){return;}
  ////log(p1,p2)
  // ////log("penApple")
  if (is2ImgThoroughfare(p1, p2)) {
    //log("可以连接", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    // exit();
    imgDestroy(p1, p2);
    return true;
  } else if (is2ImgThoroughfareUpDownLeftRight(p1, p2)) {
    //log("可以连接上下左右", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    // exit();

    imgDestroy(p1, p2);
    return true;

  } else if (is2ImgThoroughfareZ(p1, p2)) {
    //log("可以连接ZZZ", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    // exit();

    imgDestroy(p1, p2);
    return true;

  } else if (is2ImgThoroughfareZ1(p1, p2)) {
    //log("可以连接ZZZ1", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    // exit();

    imgDestroy(p1, p2);
    return true;

  } else if (is2ImgThoroughfareZ2(p1, p2)) {
    //log("可以连接ZZZ2", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    // exit();

    imgDestroy(p1, p2);
    return true;

  } else if (is2ImgThoroughfareZ3(p1, p2)) {
    //log("可以连接ZZZ3", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    // exit();

    imgDestroy(p1, p2);
    return true;

  } else {
    //不能连
    //log("不能连接", rowExtract(p1),columnExtract(p1),"--",rowExtract(p2),columnExtract(p2));
    return false;

  }
}
//图片有两个属性,行列和图片实体
function ImgUnit(imgEntity, imgRowAndcolumn) {
  this.imgEntity = imgEntity;
  this.imgRowAndcolumn = imgRowAndcolumn;
}


//仓库中的格式
//仓库是一个列表,每个列表是一个图片对象组
//每个图片对象组包含两个属性  图片和行列
// imgDiscern = new ImgUnit(imgEntity, imgRowAndcolumn);
function is2ImgThoroughfare(p1, p2) {
  ////log(p1,p2)

  // =============不打印不想关的图片信息================================
  // if(!(rowExtract(p2)==2 && columnExtract(p2)==4)){return;}
  ////log("这里是is2ImgThoroughfare(p1, p2)")
  ////log(p1,p2)
  // =====================================================


  ////log("is2ImgThoroughfare(p1, p2)传入的参数是",p1,p2)
  //只需要返回是否能连接,不需要点击
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }
  ////log(p1,p2)


  //判断两个图片能不能连通
  // 一般都两种方法
  // 一个是枚举
  // 一个是递归(DFS(深度优先搜索))
  //这里我们用枚举
  // 第一种两个图片在同一行
  // 两个图片挨着
  // 两个图片不挨着

  // 第二种两个图片在同一列
  // 两个图片挨着
  // 两个图片不挨着

  // 第三种两个图片既不在同一行也不在同一列

  // 我们一个一个来看
  //=================可爱的分割线===============================================
  // 第一种两个图片在同一行
  ////log("同一行====================",onlineX(p1, p2))
  if (onlineX(p1, p2)) {
    ////log("266行出入的应该是同一行,if(onlineX(p1, p2))参数是",p1,p2)
    // 两个图片挨着
    if (p1NextToP2("onlineX", p1, p2)) {
      ////log("132行p1,p2在一起",p1,p2)
      return true;
    } else if (obstacleIsThereBetweenP1AndP2("onlineX", p1, p2)) {
      ////log("272行图片中有障碍物else if (obstacleIsThereBetweenP1AndP2(onlineX, p1, p2)",p1,p2)
      // exit()
      // p1,p2中间有障碍物
      //那么p1的下面p3是不是空的?
      //如果p3是空的,那么p2的下面p4是不是空的,
      //如果p4是空的,那么p1的下面p3和p2的下面p4能不能连接?
      //如果p3和p4可以连接,那么p1和p2就能连接

      //行列数目
      // let rowsNumber = 10;
      // let columnsNumber = 7;
      ////log("开始for循环",(rowsNumber - rowExtract(p1)))
      for (let k = 1; k <= (rowsNumber - rowExtract(p1)) + 1; k++) {
        ////log("135行的参数p1,p2是",p1,p2,"k=",k);
        let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1) + k, columnExtract(p1));
        let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) + k, columnExtract(p2));




        if (!isImgBackground(p3) || !isImgBackground(p4)) {
          ////log("下路不通")
          // 下路不通
          ////log("同在一行下路不通",p1,p2)
          // exit()
          break;
        } else {
          ////log("进入到这里了")
          let p3new = new ImgUnit(p3, [rowExtract(p1) + k, columnExtract(p1)]);
          let p4new = new ImgUnit(p4, [rowExtract(p2) + k, columnExtract(p2)]);
          // 判断p3p4是否可以连接

          ////log("obstacleIsThereBetweenP1AndP2(onlineX, p3new, p4new)",obstacleIsThereBetweenP1AndP2("onlineX", p3new, p4new))


          if (!obstacleIsThereBetweenP1AndP2("onlineX", p3new, p4new)) {
            ////log("同在一行下路连通",p1,p2)
            // exit()
            return true;
          }
        }
      }
      ////log("下路不通开始测试上路")
      //如果下路不通,那么尝试上路
      for (let k = 1; k <= rowExtract(p1); k++) {
        ////log("175行p3p4为空",rowExtract(p1) - k, columnExtract(p1),rowExtract(p2) - k, columnExtract(p2))
        // exit()
        let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1) - k, columnExtract(p1));
        let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) - k, columnExtract(p2));
        if (!isImgBackground(p3) || !isImgBackground(p4)) {
          //上路不通
          ////log("同在一行上路不通",p1,p2)
          // exit()

          break;
        } else {
          ////log("185行p3p4为空",rowExtract(p1) - k, columnExtract(p1),rowExtract(p2) - k, columnExtract(p2))
          // exit()
          let p3new = new ImgUnit(p3, [rowExtract(p1) - k, columnExtract(p1)]);
          let p4new = new ImgUnit(p4, [rowExtract(p2) - k, columnExtract(p2)]);
          // 判断p3p4是否可以连接
          if (!obstacleIsThereBetweenP1AndP2("onlineX", p3new, p4new)) {
            ////log("同在一行上路连通",p1,p2)
            // exit()
            return true;
          } else {
            ////log("196行p3p4不能连接",p3new, p4new)
          }
        }
      }
      return false;
    } else {
      // p1,p2中间没有障碍物
      ////log("同在一行p1,p2中间没有障碍物,可以直接连接",p1,p2)
      // exit()
      return true;
    }
  }
  // 第二种两个图片在同一列
  if (onlineY(p1, p2)) {
    // if(!(rowExtract(p1)==4 && columnExtract(p1)==6 && rowExtract(p2)==7 && columnExtract(p2)==6)){return;}

    ////log("281行同一列onlineY(p1, p2)",p1,p2)
    // 两个图片挨着
    if (p1NextToP2("onlineY", p1, p2)) {
      ////log("两个图片挨着")

      return true;
    } else if (obstacleIsThereBetweenP1AndP2("onlineY", p1, p2)) {
      ////log("两个图片中间有障碍物")

      // p1,p2中间有障碍物
      //那么p1的下面p3是不是空的?
      //如果p3是空的,那么p2的下面p4是不是空的,
      //如果p4是空的,那么p1的下面p3和p2的下面p4能不能连接?
      //如果p3和p4可以连接,那么p1和p2就能连接

      //行列数目
      // let rowsNumber = 10;
      // let columnsNumber = 7;
      for (let k = 1; k <= (columnsNumber - columnExtract(p1)); k++) {

        let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p1) + k);
        let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) + k);
        if (!isImgBackground(p3) || !isImgBackground(p4)) {
          ////log("239行同一列右路不通")
          //右路不通
          break;
        } else {
          let p3new = new ImgUnit(p3, [rowExtract(p1), columnExtract(p1) + k]);
          let p4new = new ImgUnit(p4, [rowExtract(p2), columnExtract(p2) + k]);
          // 判断p3p4是否可以连接
          if (!obstacleIsThereBetweenP1AndP2("onlineY", p3new, p4new)) {
            return true;
          }
        }
      }
      //如果右路不通,那么尝试左路
      // for (let k = (columnsNumber-1); k >= 1; k--){
      for (let k = 1; k <= columnExtract(p1); k++) {

        let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p1) - k);
        let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) - k);
        if (!isImgBackground(p3) || !isImgBackground(p4)) {
          //右路不通
          ////log("259行同一列左路不通")

          break;
        } else {
          ////log("263行------------")

          let p3new = new ImgUnit(p3, [rowExtract(p1), columnExtract(p1) - k]);
          let p4new = new ImgUnit(p4, [rowExtract(p2), columnExtract(p2) - k]);
          // 判断p3p4是否可以连接
          ////log("刚才268行传入的参数是p3new,p4new",p3new,p4new)
          if (!obstacleIsThereBetweenP1AndP2("onlineY", p3new, p4new)) {
            ////log("270行没有障碍物")
            return true;
          } else {
            ////log("273行有障碍物")

          }
        }
      }
      return false;
    } else {
      // p1,p2中间没有障碍物
      ////log("两个图片中间没有障碍物")
      return true;
    }
  }
  return false;
}




//=======================重要的代码三行分割线===========================================
// is2ImgThoroughfare(p1, p2)
//==============================================================================================
//=======================同一行列不存在的==============================================================
// 第三种两个图片不在同一列,也不在同一行
// 那么就有上下左右四个方向的连法
function is2ImgThoroughfareUpDownLeftRight(p1, p2) {



  ////log("is2ImgThoroughfareUpDownLeftRight(p1,p2)的参数是",p1,p2)
  //只需要返回是否能连接,不需要点击
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }




  if (columnExtract(p1) < columnExtract(p2)) {
    ////log("p1在左边p2在右边")
    //第一种,从上面开始
    // p1在左上角p2在右下角
    // let p3=imgEntityExtractFromRowAndcolumn(rowExtract(p1),columnExtract(p1)+k);
    // let p4=imgEntityExtractFromRowAndcolumn(rowExtract(p2),columnExtract(p2)+k);
    //p1与p3联系,p2与p4联系
    // for (let k = (rowExtract(p2)-rowExtract(p1)); k >= 1; k--){
    // for (let k = 1; k <= (rowExtract(p2)-rowExtract(p1)); k++){
    // 首先看p2的上面一格p4是不是空的
    let p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) - 1, columnExtract(p2));
    ////log("p2上面一格是不是背景:",isImgBackground(p4Freestyle1))
    if (!isImgBackground(p4Freestyle1)) {
      ////log("上路不通1")
      //上路不通
    } else {
      //不仅分左右,上下也要分
      //p1在p2上边
      if (rowExtract(p1) < rowExtract(p2)) {
        ////log("p1高")
        let p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));

        if (!isImgBackground(p4Freestyle2)) {
          ////log("上路不通2")
          //上路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }

        }
      } else {
        //p1在p2下边
        let p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("上路不通3")

          //上路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }

        }

      }
    }
    //下路
    ////log("开始判断下路")
    p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) + 1, columnExtract(p2));


    if (!isImgBackground(p4Freestyle1)) {
      ////log("下路不通")
      //下路不通
    } else {
      if (rowExtract(p1) < rowExtract(p2)) {
        ////log("p1在p2上面666")
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));

        ////log(rowExtract(p2), columnExtract(p1))
        if (!isImgBackground(p4Freestyle2)) {
          ////log("下路不通")

          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      } else {
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("下路不通")

          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      }
    }
    //左路
    ////log("开始判断左路")

    p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) - 1);
    if (!isImgBackground(p4Freestyle1)) {
      ////log("左路不通")
      //左路不通
    } else {
      if (rowExtract(p1) < rowExtract(p2)) {
        ////log("左路p1在上面p2在下面")
        ////log(rowExtract(p2), columnExtract(p1))
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("左路不通")

          //下路不通
        } else {

          ////log("========",rowExtract(p2), columnExtract(p1))
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            ////log("======通通通==========")
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      } else {
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("左路不通")

          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      }
    }
    //右路
    ////log("开始判断右路")

    p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) + 1);
    if (!isImgBackground(p4Freestyle1)) {
      ////log("右路不通")
      //下路不通
    } else {
      if (rowExtract(p1) < rowExtract(p2)) {

        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("右路不通")

          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      } else {
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("右路不通")

          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      }
    }
  }

  if (columnExtract(p1) > columnExtract(p2)) {

    ////log("p1在右  p2在左")
    //第一种,从上面开始
    // p1在左上角p2在右下角
    // let p3=imgEntityExtractFromRowAndcolumn(rowExtract(p1),columnExtract(p1)+k);
    // let p4=imgEntityExtractFromRowAndcolumn(rowExtract(p2),columnExtract(p2)+k);
    //p1与p3联系,p2与p4联系
    // for (let k = (rowExtract(p2)-rowExtract(p1)); k >= 1; k--){
    // for (let k = 1; k <= (rowExtract(p2)-rowExtract(p1)); k++){
    // 首先看p2的上面一格p4是不是空的

    ////log("开始判断上路")
    let p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) - 1, columnExtract(p2));
    ////log(p2)
    if (!isImgBackground(p4Freestyle1)) {
      ////log("上路不通666")
      //上路不通
    } else {
      if (rowExtract(p1) < rowExtract(p2)) {



        let p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));
        if (!isImgBackground(p4Freestyle2)) {
          //上路不通
        } else {

          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            ////log("进入这里了")
            ////log(p1,p2,p4Freestyle2New)



            ////log(obstacleIsThereBetweenP1AndP2("onlineX",p4Freestyle2New, p1))
            ////log(obstacleIsThereBetweenP1AndP2("onlineY",p4Freestyle2New, p2))



            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      } else {
        let p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          //上路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      }
    }
    //下路
    ////log("开始判断下路")

    p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) + 1, columnExtract(p2));
    if (!isImgBackground(p4Freestyle1)) {
      //下路不通
    } else {
      if (rowExtract(p1) < rowExtract(p2)) {

        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      } else {
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      }
    }
    //左路
    ////log("开始判断左路")

    p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) - 1);
    if (!isImgBackground(p4Freestyle1)) {
      //下路不通
    } else {
      ////log("1111111================")
      if (rowExtract(p1) < rowExtract(p2)) {
        ////log("p1在上p2在下")
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));
        if (!isImgBackground(p4Freestyle2)) {
          ////log("左路不通666666666666666")
          //左路不通
        } else {
          // ////log("左路通了666666666666666")

          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            //两两之间可以连接,但必须有一个是直接连接
            //也就是说其中一个两两之间没有障碍物
            //或者第一组或者第二组

            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }




          }
        }
      } else {
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p2));
        if (!isImgBackground(p4Freestyle2)) {
          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p1), columnExtract(p2)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }

      }
    }
    //右路
    ////log("开始判断右路")

    p4Freestyle1 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) + 1);
    if (!isImgBackground(p4Freestyle1)) {
      //下路不通
    } else {
      if (rowExtract(p1) < rowExtract(p2)) {
        ////log("p1在上p2在下")
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          //下路不通
        } else {
          ////log("进入这里了")
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          ////log(is2ImgThoroughfare(p4Freestyle2New, p1))
          ////log(is2ImgThoroughfare(p4Freestyle2New, p2))


          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }
      } else {
        p4Freestyle2 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p1));
        if (!isImgBackground(p4Freestyle2)) {
          //下路不通
        } else {
          let p4Freestyle2New = new ImgUnit(p4Freestyle2, [rowExtract(p2), columnExtract(p1)]);

          if (is2ImgThoroughfare(p4Freestyle2New, p2) && is2ImgThoroughfare(p4Freestyle2New, p1)) {
            if (!obstacleIsThereBetweenP1AndP2("onlineX", p4Freestyle2New, p2) || !obstacleIsThereBetweenP1AndP2("onlineY", p4Freestyle2New, p1)) {
              return true;
            }
          }
        }


      }
    }
  }
  return false;
}



// 最后一种z形连接


function is2ImgThoroughfareZ(p1, p2) {
  // 形状p1在上p2在下
  //
  // 已经确定值适用于该种图形
  // __
  //   |__
  ////log("910行===is2ImgThoroughfareZ(p1, p2)的参数是",p1,p2)
  //只需要返回是否能连接,不需要点击
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }
  ////log("p1在p2的左边")
  ////log("p3",rowExtract(p1), columnExtract(p1) + 1)
  ////log("p4",rowExtract(p2), columnExtract(p2) - 1)
  let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p1) + 1);
  let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) - 1);



  if (!isImgBackground(p3) || !isImgBackground(p4)) {
    //不能Z形连接
    return false;
  } else {
    // 判断p3p4和p5是否可以直连
    //p3和p5不能有障碍物
    //p4和p5不能有障碍物
    //循环次数为p2-p1-3
    let cycleTimes = columnExtract(p2) - columnExtract(p1)
    for (let k = 1; k < cycleTimes; k++) {

      let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p1) + k);
      let p3new = new ImgUnit(p3, [rowExtract(p1), columnExtract(p1) + k]);
      let p4new = new ImgUnit(p4, [rowExtract(p2), columnExtract(p2) - 1]);
      if (!obstacleIsThereBetweenP1AndP2WithSelf(p3new, p4new)) {
        return true;
      }



      let p5 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p3new));
      let p5new = new ImgUnit(p5, [rowExtract(p2), columnExtract(p3new)]);



      if (isImgBackground(p3) && isImgBackground(p5)) {

        if (obstacleIsThereBetweenP1AndP2("onlineY", p3new, p5new) || obstacleIsThereBetweenP1AndP2("onlineX", p4new, p5new)) {

        } else {
          return true;
        }

      } else {
        return false;
      }



    }
    return false;


  }

}









function is2ImgThoroughfareZ1(p1, p2) {
  ////log("is2ImgThoroughfareZ1(p1, p2) ",p1,p2)
  // 形状p1在上p2在下
  //
  // __|ˉˉˉ
  ////log("910行===is2ImgThoroughfareZ(p1, p2)的参数是",p1,p2)
  //只需要返回是否能连接,不需要点击
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }
  ////log("p1在p2的左边")
  ////log("p3",rowExtract(p1), columnExtract(p1) + 1)
  ////log("p4",rowExtract(p2), columnExtract(p2) - 1)
  let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p1) - 1);
  let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p2) + 1);

  if (!isImgBackground(p3) || !isImgBackground(p4)) {
    // ////log("进入if")
    //不能Z形连接
    return false;
  } else {
    ////log("进入else")

    // 判断p3p4和p5是否可以直连
    //p3和p5不能有障碍物
    //p4和p5不能有障碍物
    //循环次数为p2-p1-3
    let cycleTimes = rowExtract(p2) - rowExtract(p1)
    ////log("cycleTimes=",cycleTimes)
    for (let k = 1; k < cycleTimes; k++) {
      ////log("kkkkkk=========",k)
      let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1), columnExtract(p1) - k);
      let p3new = new ImgUnit(p3, [rowExtract(p1), columnExtract(p1) - k]);
      let p4new = new ImgUnit(p4, [rowExtract(p2), columnExtract(p2) + 1]);
      if (!obstacleIsThereBetweenP1AndP2WithSelf(p3new, p4new)) {
        return true;
      }
      let p5 = imgEntityExtractFromRowAndcolumn(rowExtract(p2), columnExtract(p3new));
      let p5new = new ImgUnit(p5, [rowExtract(p2), columnExtract(p3new)]);



      if (isImgBackground(p3) && isImgBackground(p5)) {
        ////log("进入if666")
        ////log(p3new, p5new)
        if (obstacleIsThereBetweenP1AndP2("onlineY", p3new, p5new) || obstacleIsThereBetweenP1AndP2("onlineX", p4new, p5new)) {
          ////log("进入if6688888888886")

        } else {
          ////log("进else6688888888886")

          return true;
        }

      } else {
        ////log("进入else666")

        return false;
      }



    }
    return false;


  }

}









// 最后一种z形连接
function is2ImgThoroughfareZ2(p1, p2) {
  ////log(p1,p2)
  // 形状p1在上p2在下
  // |__
  //    |
  ////log("910行===is2ImgThoroughfareZ(p1, p2)的参数是",p1,p2)
  //只需要返回是否能连接,不需要点击
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }
  ////log("p1在p2的左边")
  ////log("p3",rowExtract(p1), columnExtract(p1) + 1)
  ////log("p4",rowExtract(p2), columnExtract(p2) - 1)
  let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1) + 1, columnExtract(p1));
  let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) - 1, columnExtract(p2));

  if (!isImgBackground(p3) || !isImgBackground(p4)) {
    ////log("p3或者p4不是背景")
    //不能Z形连接
    return false;
  } else {
    ////log("p3p4都是背景")

    // 判断p3p4和p5是否可以直连
    //p3和p5不能有障碍物
    //p4和p5不能有障碍物
    //循环次数为p2-p1-3
    let cycleTimes = rowExtract(p2) - rowExtract(p1)
    ////log("循环次数=",cycleTimes)
    for (let k = 1; k < cycleTimes; k++) {

      let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1) + k, columnExtract(p1));
      let p3new = new ImgUnit(p3, [rowExtract(p1) + k, columnExtract(p1)]);
      let p4new = new ImgUnit(p4, [rowExtract(p2) - 1, columnExtract(p2)]);
      if (!obstacleIsThereBetweenP1AndP2WithSelf(p3new, p4new)) {
        return true;
      }
      let p5 = imgEntityExtractFromRowAndcolumn(rowExtract(p3new), columnExtract(p2));
      let p5new = new ImgUnit(p5, [rowExtract(p3new), columnExtract(p4new)]);



      if (isImgBackground(p3) && isImgBackground(p5)) {

        if (obstacleIsThereBetweenP1AndP2("onlineX", p3new, p5new) || obstacleIsThereBetweenP1AndP2("onlineY", p4new, p5new)) {

        } else {
          return true;
        }

      } else {
        return false;
      }



    }
    return false;



  }

}
// 最后一种z形连接
function is2ImgThoroughfareZ3(p1, p2) {
  //     __|
  //    |


  ////log("1066行is2ImgThoroughfareZ3(p1, p2) ",p1,p2)
  ////log("395行===is2ImgThoroughfareZ(p1, p2)的参数是",p1,p2)
  //只需要返回是否能连接,不需要点击
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }
  ////log("ZZZ中判断的p1,p2是",p1,p2)
  // ////log("希望是3 2  1 6")

  let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1) + 1, columnExtract(p1));
  let p4 = imgEntityExtractFromRowAndcolumn(rowExtract(p2) - 1, columnExtract(p2));
  if (!isImgBackground(p3) || !isImgBackground(p4)) {
    //不能Z形连接
    return false;
  } else {
    // 判断p3p4和p5是否可以直连
    //p3和p5不能有障碍物
    //p4和p5不能有障碍物
    //循环次数为p2-p1-3
    let cycleTimes = rowExtract(p2) - rowExtract(p1)
    ////log("循环次数=",cycleTimes)
    for (let k = 1; k < cycleTimes; k++) {




      ////log("rowExtract(p1)=",rowExtract(p1))
      ////log("k=",k)
      ////log("let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1)+1+k, columnExtract(p1));",rowExtract(p1)+1+k, columnExtract(p1))


      let p3 = imgEntityExtractFromRowAndcolumn(rowExtract(p1) + k, columnExtract(p1));
      let p3new = new ImgUnit(p3, [rowExtract(p1) + k, columnExtract(p1)]);
      let p4new = new ImgUnit(p4, [rowExtract(p2) - 1, columnExtract(p2)]);

      if (!obstacleIsThereBetweenP1AndP2WithSelf(p3new, p4new)) {
        return true;
      }
      let p5 = imgEntityExtractFromRowAndcolumn(rowExtract(p3new), columnExtract(p2));
      let p5new = new ImgUnit(p5, [rowExtract(p3new), columnExtract(p2)]);



      if (isImgBackground(p3) && isImgBackground(p5)) {

        if (obstacleIsThereBetweenP1AndP2("onlineX", p3new, p5new) || obstacleIsThereBetweenP1AndP2("onlineY", p4new, p5new)) {

        } else {
          return true;
        }

      } else {
        return false;
      }



    }
    return false;



  }
}





//==============================================================================================
//================小小的专一函数===========================================
//有没有障碍物
//有返回true
//没有返回false
//默认有障碍物true
function obstacleIsThereBetweenP1AndP2(xy, p1, p2) {
  // if(!(rowExtract(p1)==2 && columnExtract(p1)==1 && rowExtract(p2)==2 && columnExtract(p2)==4)){return;}

  ////log("obstacleIsThereBetweenP1AndP2(xy,p1, p2)传入参数是\n",xy,p1,p2);
  // exit()
  //两个图片中间有没有障碍物,默认有障碍物(return true;)
  if (xy == "onlineX") {
    ////log("834行同一行\n",p1,p2)
    // exit()
    let i = columnExtract(p1) > columnExtract(p2) ? columnExtract(p2) : columnExtract(p1);
    i = i + 1;
    ////log("i=",i)
    let max = columnExtract(p1) > columnExtract(p2) ? columnExtract(p1) : columnExtract(p2);
    ////log("max=",max)

    ////log("p1=======================",p1)
    for (; i < max; i++) {
      let p = {
        x: rowExtract(p1),
        y: i
      };
      ////log("期望2 2       2  3 ")
      ////log("849行i,p.x,p.y",i,p.x,p.y,isImgBackground(imgEntityExtractFromRowAndcolumn(p.x, p.y)))



      if (!isImgBackground(imgEntityExtractFromRowAndcolumn(p.x, p.y))) {
        ////log("433行有障碍物")
        return true;
      } else {
        ////log("436行没有障碍物")
      }
    }
    ////log("i == max",i , max)
    if (i == max) {
      ////log("607行同一行可以连通,没有障碍物\n",p1,p2)
      // exit()
      return false;
    }

  } else if (xy == "onlineY") {
    ////log("877行同一列\n",p1,p2)

    let i = rowExtract(p1) > rowExtract(p2) ? rowExtract(p2) : rowExtract(p1);
    i = i + 1;
    let max = rowExtract(p1) > rowExtract(p2) ? rowExtract(p1) : rowExtract(p2);
    for (; i < max; i++) {
      let p = {
        x: i,
        y: columnExtract(p1)
      };
      if (!isImgBackground(imgEntityExtractFromRowAndcolumn(p.x, p.y))) {
        return true;
      }
    }
    if (i == max) {
      return false;
    }
  } else {
    ////log("obstacleIsThereBetweenP1AndP2函数传入参数错误!");
    exit();
  }
  return true;

}








function obstacleIsThereBetweenP1AndP2WithSelf(p1, p2) {
  //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。
  //这样做可以简化算法
  if (rowExtract(p1) > rowExtract(p2)) {
    let tp = p1;
    p1 = p2;
    p2 = tp;
  } else if (rowExtract(p1) == rowExtract(p2)) {
    if (columnExtract(p1) > columnExtract(p2)) {
      let tp = p1;
      p1 = p2;
      p2 = tp;
    }
  }
  //两个都必须是背景才有可能返回false
  //如果都是背景并且挨着那么返回false
  //默认返回true
  let p1Img = imgEntityExtract(p1)
  let p2Img = imgEntityExtract(p2)

  if (isImgBackground(p1Img) && isImgBackground(p2Img)) {

    // 同一行挨着
    if (rowExtract(p1) == rowExtract(p2) && columnExtract(p2) - columnExtract(p1) == 1) {
      return false

    }




    // 同一列挨着
    if (columnExtract(p1) == columnExtract(p2) && rowExtract(p2) - rowExtract(p1) == 1) {
      return false

    }

  }






  return true;


  // // if(!(rowExtract(p1)==2 && columnExtract(p1)==1 && rowExtract(p2)==2 && columnExtract(p2)==4)){return;}

  // ////log("obstacleIsThereBetweenP1AndP2(xy,p1, p2)传入参数是\n",xy,p1,p2);
  // // exit()
  // //两个图片中间有没有障碍物,默认有障碍物(return true;)
  // if (xy == "onlineX") {
  //     ////log("834行同一行\n",p1,p2)
  //     // exit()
  //     let i = columnExtract(p1) > columnExtract(p2) ? columnExtract(p2) : columnExtract(p1);
  //     i = i + 1;
  //     ////log("i=",i)
  //     let max = columnExtract(p1) > columnExtract(p2) ? columnExtract(p1) : columnExtract(p2);
  //     ////log("max=",max)

  //     ////log("p1=======================",p1)
  //     for (; i < max; i++) {
  //         let p = {
  //             x: rowExtract(p1),
  //             y: i
  //         };
  //         ////log("期望2 2       2  3 ")
  //         ////log("849行i,p.x,p.y",i,p.x,p.y,isImgBackground(imgEntityExtractFromRowAndcolumn(p.x, p.y)))



  //         if (!isImgBackground(imgEntityExtractFromRowAndcolumn(p.x, p.y))) {
  //             ////log("433行有障碍物")
  //             return true;
  //         }else{
  //             ////log("436行没有障碍物")
  //         }
  //     }
  //     ////log("i == max",i , max)
  //     if (i == max) {
  //         ////log("607行同一行可以连通,没有障碍物\n",p1,p2)
  //         // exit()
  //         return false;
  //     }

  // } else if (xy == "onlineY") {
  //     ////log("877行同一列\n",p1,p2)

  //     let i = rowExtract(p1) > rowExtract(p2) ? rowExtract(p2) : rowExtract(p1);
  //     i = i + 1;
  //     let max = rowExtract(p1) > rowExtract(p2) ? rowExtract(p1) : rowExtract(p2);
  //     for (; i < max; i++) {
  //         let p = {
  //             x: i,
  //             y: columnExtract(p1)
  //         };
  //         if (!isImgBackground(imgEntityExtractFromRowAndcolumn(p.x, p.y))) {
  //             return true;
  //         }
  //     }
  //     if (i == max) {
  //         return false;
  //     }
  // } else {
  //     ////log("obstacleIsThereBetweenP1AndP2函数传入参数错误!");
  //     exit();
  // }
  // return true;

}


















function imgEntityExtract(p) {
  return p.imgEntity;
}

function imgEntityExtractFromRowAndcolumn(row, column) {
  ////log("1222行imgEntityExtractFromRowAndcolumn(row,column)的参数是",row,column)
  ////log("planePicture.length=",planePicture.length)
  ////log("row, column",row, column)
  return planePicture[row][column];
}

function rowExtract(p) {
  ////log("556行传入的图片是",p)
  return p.imgRowAndcolumn[0];
}

function columnExtract(p) {
  return p.imgRowAndcolumn[1];
}

function imgDestroy(p1, p2) {
  // ////log("imgDestroy(p1, p2) 被调用");
  imgClickP1P2(p1, p2);
}

function imgClickP1P2(p1, p2) {
  let x1 = CoordinateFromImg(p1)[0];
  let y1 = CoordinateFromImg(p1)[1];
  let x2 = CoordinateFromImg(p2)[0];
  let y2 = CoordinateFromImg(p2)[1];
  let t = 1;
  // click(537,236);
  sleep(t);
  ////log("绝对坐标是******",x1,y1,x2,y2,"两张图片是\n",p1,p2);
  click(x1, y1);
  sleep(t);
  click(x2, y2);
  sleep(t);
}

//传入行列返回坐标
function CoordinateFromImg(p1) {
  let x1 = p1.imgRowAndcolumn[0];
  let y1 = p1.imgRowAndcolumn[1];
  let x = imgFistCenterCoordinate[0] + (y1 - 1) * SpacingLeftAndRight;
  let y = imgFistCenterCoordinate[1] + (x1 - 1) * SpacingUpAndDown;
  return [x, y];
}

function onlineX(p1, p2) {
  let y1 = p1.imgRowAndcolumn[0];
  let y2 = p2.imgRowAndcolumn[0];
  // let x1=p1.imgRowAndcolumn[0];
  // let y1=p1.imgRowAndcolumn[1];
  // let x2=p2.imgRowAndcolumn[0];
  // let y2=p2.imgRowAndcolumn[1];
  return y1 == y2;
}

function onlineY(p1, p2) {
  let x1 = p1.imgRowAndcolumn[1];
  let x2 = p2.imgRowAndcolumn[1];
  return x1 == x2;
}

function p1NextToP2(xy, p1, p2) {
  ////log("484行p1NextToP2(xy,p1, p2)的参数是\n",xy,p1, p2)
  let x1 = p1.imgRowAndcolumn[0];
  let y1 = p1.imgRowAndcolumn[1];
  let x2 = p2.imgRowAndcolumn[0];
  let y2 = p2.imgRowAndcolumn[1];
  if (xy == "onlineX") {

    let result = Math.abs(y1 - y2);
    ////log("491行的参数xy是",xy,"\n","result=",result,"x1=",x1,"x2=",x2)
    if (result == 1) {
      return true;
    }
  } else if (xy == "onlineY") {
    let result = Math.abs(x1 - x2);
    if (result == 1) {
      return true;
    }
  } else {
    ////log("p1NextToP2函数传入参数错误!");
    exit();
  }
  return false;
}
// isImgBackground(p)
//=====================================================================

function warehouseReorganize() {
  // 第一步 图片分类
  // 请求截图
  if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }


  let imgCaptureScreen = captureScreen();
  sleep(50);
  for (let j = 1; j <= rowsNumber; j++) {
    for (let k = 1; k <= columnsNumber; k++) {
      // ////log(j, "行", k, "列");
      // 只保存有效图片(即非背景图片)
      let imgRowAndcolumn = [j, k];

      let screenshotRegion = [imgFistCenterCoordinate[0] + (k - 1) * SpacingLeftAndRight - imgWidthHeight2[0], imgFistCenterCoordinate[1] + (j - 1) * SpacingUpAndDown - imgWidthHeight2[1], imgWidthHeight[0], imgWidthHeight[1]];
      let imgEntity = images.clip(imgCaptureScreen, screenshotRegion[0], screenshotRegion[1], screenshotRegion[2], screenshotRegion[3]);

      if (isImgBackground(imgEntity)) {
        // ////log("是背景图,跳出本次循环","行列===",j,k)
        continue;
      }
      planePicture[j][k] = imgEntity;
      imgDiscern = new ImgUnit(imgEntity, imgRowAndcolumn);
      if (warehouse.length == 0) {
        warehouse.push([]);
        warehouse[0].push(imgDiscern);
        imgSave(imgEntity);
      } else {
        let len = warehouse.length;
        let found = false;
        for (let j = 0; j < len; j++) {
          let p1 = warehouse[j][0].imgEntity;
          let p2 = imgEntity;
          if (is2ImgSame(p1, p2)) {
            warehouse[j].push(imgDiscern);
            found = true;
            break;
          }
        }
        if (!found) {
          warehouse.push([imgDiscern]);
          imgSave(imgEntity);

        }
      }
    }
  }
  ////log("仓库中图片数量",warehouse.length);

}

function imgSave(p) {
  // // 保存连连看小图片
  // let sj = new Date().getTime();
  // let path = "/sdcard/js截图2/" + sj + ".png";
  // // ////log(p);
  // // ////log(path);
  // images.save(p, path);
  // // ////log("已保存小截图");
}










function is2ImgSame(p1, p2) {
  // ////log("p1=======",p1);
  // ////log("p2=======",p2);
  if (!p1 || !p2) {
    return false;
  }




  // p1包含p2
  //在p1中找p2
  //p2Smaller是30X30的p2
  let p2Smaller = images.clip(p2, 18, 10, 30, 30);
  let result = images.findImage(p1, p2Smaller);
  if (result == null) {
    return false;
  } else {
    return true;
  }
}


// 是否背景色图
function isImgBackground(p) {
  if (!p) {
    return true;
  }
  let len = imgBackground.length;
  for (let j = 0; j < len; j++) {
    let colorAndCoordinate = imgBackgroundFivePoint(imgBackground[j]);
    // ////log("五指山是:\n",colorAndCoordinate[0],"\n", colorAndCoordinate[1]);
    // ////log("557行isImgBackground方法","参数分别是",p, colorAndCoordinate[0], colorAndCoordinate[1]);
    let result = images.findMultiColors(p, colorAndCoordinate[0], colorAndCoordinate[1]);
    // ////log("第",j,"个背景图的判断结果是",result);
    if (result != null) {
      return true;
    }
  }
  return false;
}

function imgBackgroundFivePoint(p) {
  const pointFive = [
    [1, 1],
    [11, 1],
    [1, 11],
    [21, 11],
    [11, 21]
  ];
  const pointfour = [
    [10, 0],
    [0, 10],
    [20, 10],
    [10, 20]
  ];
  let pointColors = [];
  for (let j = 0; j < 5; j++) {
    pointColors[j] = images.pixel(p, pointFive[j][0], pointFive[j][1]);
  }
  let result = [];
  result[0] = pointColors[0];
  result[1] = [
    [pointfour[0][0], pointfour[0][1], pointColors[1]],
    [pointfour[1][0], pointfour[1][1], pointColors[2]],
    [pointfour[2][0], pointfour[2][1], pointColors[3]],
    [pointfour[3][0], pointfour[3][1], pointColors[4]]

  ];
  return result;
  // 返回这样的格式 第一个点到额颜色  和其余点的坐标和颜色
  // "#123456", [[10, 20, "#ffffff"], [30, 40, "#000000"]]
}



function 是否游戏界面() {
  dadWindow = packageName("com.kwai.sogame").className("android.widget.FrameLayout").depth(0).bounds(0, 0, 1080, 1920).findOnce()
  if (dadWindow) {
    //log("游戏窗口dadWindow在")
    //log("dadWindow=", dadWindow)

    r = dadWindow.childCount()
  } else {
    //log("游戏窗口dadWindow不在")
    return;
  }
  //log("老大有几个孩子=", r)
  爸爸 = dadWindow.child(0)
  // outputObj(爸爸)
  // var str = "123"
  // console.//log(str.indexOf("2") != -1); // true


  控件信息 = "boundsInParent: Rect(0, 0 - 1080, 1920); boundsInScreen: Rect(0, 0 - 1080, 1920); packageName: com.kwai.sogame; className: android.widget.LinearLayout; text: null; error: null; maxTextLength: -1; contentDescription: null; viewIdResName: null; checkable: false; checked: false; focusable: false; focused: false; selected: false; clickable: false; longClickable: false; contextClickable: false; enabled: true; password: false; scrollable: false; actions: [AccessibilityAction: ACTION_SELECT - null, AccessibilityAction: ACTION_CLEAR_SELECTION - null, AccessibilityAction: ACTION_ACCESSIBILITY_FOCUS - null, AccessibilityAction: ACTION_SHOW_ON_SCREEN - null]"
  if (爸爸 && (爸爸.info.toString()).indexOf(控件信息) != -1) {
    //log("爸爸")
    r = 爸爸.childCount()
    //log("爸爸有几个孩子=", r)
    儿子 = 爸爸.child(0)
    //log(儿子.info)


    控件信息 = "boundsInParent: Rect(0, 0 - 1080, 1920); boundsInScreen: Rect(0, 0 - 1080, 1920); packageName: com.kwai.sogame; className: android.widget.FrameLayout; text: null; error: null; maxTextLength: -1; contentDescription: null; viewIdResName: android:id/content; checkable: false; checked: false; focusable: false; focused: false; selected: false; clickable: false; longClickable: false; contextClickable: false; enabled: true; password: false; scrollable: false; actions: [AccessibilityAction: ACTION_SELECT - null, AccessibilityAction: ACTION_CLEAR_SELECTION - null, AccessibilityAction: ACTION_ACCESSIBILITY_FOCUS - null, AccessibilityAction: ACTION_SHOW_ON_SCREEN - null]"
    if (儿子 && (儿子.info.toString()).indexOf(控件信息) != -1 && 儿子.childCount() == 2) {
      //log("儿子")
      r = 儿子.childCount()
      //log("儿子有几个孩子=", r)
      孙子1 = 儿子.child(0)
      //log("孙子1的信息", 孙子1.info)

      控件信息 = "boundsInParent: Rect(0, 0 - 1080, 1920); boundsInScreen: Rect(0, 0 - 1080, 1920); packageName: com.kwai.sogame; className: android.widget.FrameLayout; text: null; error: null; maxTextLength: -1; contentDescription: null; viewIdResName: null; checkable: false; checked: false; focusable: false; focused: false; selected: false; clickable: false; longClickable: false; contextClickable: false; enabled: true; password: false; scrollable: false; actions: [AccessibilityAction: ACTION_SELECT - null, AccessibilityAction: ACTION_CLEAR_SELECTION - null, AccessibilityAction: ACTION_ACCESSIBILITY_FOCUS - null, AccessibilityAction: ACTION_SHOW_ON_SCREEN - null]"
      if (孙子1 && (孙子1.info.toString()).indexOf(控件信息) != -1) {
        //log("孙子1")
        r = 孙子1.childCount()
        //log("孙子1有几个孩子=", r)
        曾孙子 = 孙子1.child(0)
        //log("曾孙子的信息", 曾孙子.info)


        控件信息 = "boundsInParent: Rect(0, 0 - 1080, 1920); boundsInScreen: Rect(0, 0 - 1080, 1920); packageName: com.kwai.sogame; className: android.view.View; text: null; error: null; maxTextLength: -1; contentDescription: null; viewIdResName: null; checkable: false; checked: false; focusable: true; focused: true; selected: false; clickable: false; longClickable: false; contextClickable: false; enabled: true; password: false; scrollable: false; actions: [AccessibilityAction: ACTION_CLEAR_FOCUS - null, AccessibilityAction: ACTION_SELECT - null, AccessibilityAction: ACTION_CLEAR_SELECTION - null, AccessibilityAction: ACTION_ACCESSIBILITY_FOCUS - null, AccessibilityAction: ACTION_SHOW_ON_SCREEN - null]"
        if (曾孙子 && (曾孙子.info.toString()).indexOf(控件信息) != -1) {
          //log("曾孙子")
          r = 曾孙子.childCount()
          //log("曾孙子有几个孩子=", r)
          if (r == 0) {} else {
            return;
          }
        }




      }




      孙子2 = 儿子.child(1)
      //log("孙子2的信息", 孙子2.info)

      控件信息 = "boundsInParent: Rect(0, 0 - 102, 102); boundsInScreen: Rect(21, 22 - 123, 124); packageName: com.kwai.sogame; className: android.widget.ImageView; text: null; error: null; maxTextLength: -1; contentDescription: null; viewIdResName: null; checkable: false; checked: false; focusable: false; focused: false; selected: false; clickable: true; longClickable: false; contextClickable: false; enabled: true; password: false; scrollable: false; actions: [AccessibilityAction: ACTION_SELECT - null, AccessibilityAction: ACTION_CLEAR_SELECTION - null, AccessibilityAction: ACTION_CLICK - null, AccessibilityAction: ACTION_ACCESSIBILITY_FOCUS - null, AccessibilityAction: ACTION_SHOW_ON_SCREEN - null]"
      if (孙子2 && (孙子2.info.toString()).indexOf(控件信息) != -1) {
        //log("孙子2")
        r = 孙子2.childCount()
        //log("孙子2有几个孩子=", r)
        if (r == 0) {
          return true
        } else {
          return;
        }







      }




    }











  } else {
    //log("爸爸不亲")
    //log(爸爸.info)
  }




  return false


}


function outputObj(obj) {
  var description = "";
  for (var i in obj) {
    description += i + " = " + obj[i] + "\n";
  }
  log(description);
}

function isWidgetSame(widget, [bounds, id, text, className]) {
  if (widget.bounds().toString() == bounds && widget.id() == id && widget.text() == text && widget.className() == className) {
    return true
  }
  return false
}






























function daShengLaiLe() {
  if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }
  imgMonkey = captureScreen();
  // isMonkeyExist=true
  if (!isMonkeyExist) {
    sleep(3000);
    let x = 148
    //截图  大圣短裙

    for (let i = 0; i < 10; i++) {
      let clip = images.clip(imgMonkey, x, 1302, 16, 8)
      images.save(clip, imgPath + "大圣短裙.png");
      //如果上下左右四个角颜色相似,说明是背景,网左边走在截图,
      let color1 = images.pixel(imgMonkey, x + 1, 1303)
      let color2 = images.pixel(imgMonkey, x + 12, 1303)
      let color3 = images.pixel(imgMonkey, x + 1, 1309)
      let color4 = images.pixel(imgMonkey, x + 12, 1309)
      // if(colors.isSimilar(color1, color2) && colors.isSimilar(color1, color3) && colors.isSimilar(color1, color4)){
      if (colors.isSimilar(color2, color4)) {
        x = x - 30
      } else {
        break;
      }
    }




    //如果x小于30,那么报错
    if (x < 30) {
      log("截取大圣短裙是发生了错误,已到达左边界.")
      alert()
    }


    log("已经截图了,大圣短裙.")
    isMonkeyExist = true
  }
  let monkey = monkeyGetPositon()
  //log("monkey=",monkey)
  if (monkey) {
    let pillar = pillarGetPositon(monkey)
    //log("pillar=",pillar)
    if (pillar) {

      //log("pillar=",pillar,"\nmonkey=",monkey)
      let dis = pillar[0] - monkey.x
      //log("3117行dis=",dis)
      jump([dis, pillar[1]])
      // exit()
      sleep(2500)

    }
  }


}

function jump(distance) {
  log("jump收到的参数distance=", distance)
  // pillar
  if (distance[1] == "pillar") {
    //log("pillar的棒棒")
    let tolerance = 0.8
    let t = (distance[0]) * tolerance
    sleep(100)
    press(500, 500, t);
    return;
  }


  //log("手指的棒棒")
  // 大于617 增加跳跃系数
  // 超过一点
  // 小于483降低跳跃系数
  let tolerance = 0.72
  //log("distance[0]=",distance[0],"\ntolerance=",tolerance)

  if (distance[0] > 350 && distance[0] < 390) {
    tolerance = 0.71
  } else if (distance[0] > 400 && distance[0] < 480) {
    tolerance = 0.71
  } else if (distance[0] > 200 && distance[0] < 270) {
    tolerance = 0.68
  } else if (distance[0] > 560 && distance[0] < 700) {
    tolerance = 0.731
  }





  // else if(distance[0]<483){
  //     tolerance=0.67
  // }
  let t = (distance[0]) * tolerance
  press(500, 500, t);
}





// 148,1302
// 164,1310

// 159,1341
function monkeyGetPositon() {
  let position = false
  //屏幕中间,返回小猪身体中心
  let 猴子的寻找区域 = [16, 1256, 180, 1320]
  let objectName = "大圣短裙"
  let imgSmall = images.read(imgPath + objectName + ".png");
  let p = findImage(imgMonkey, imgSmall, {
    region: [猴子的寻找区域[0], 猴子的寻找区域[1], 猴子的寻找区域[2] - 猴子的寻找区域[0], 猴子的寻找区域[3] - 猴子的寻找区域[1]],
    threshold: 0.9
  });

  // //猴子的眼睛
  // 128,1233
  // //柱子
  // 163,1338


  if (p) {
    //log("\n找到了",objectName,"它的坐标是",p)
    position = {
      x: p.x,
      y: p.y + 40
    }
  } else {
    //log("\n没找到",objectName);
  }
  return position
}


function pillarGetPositon(monkey) {
  //log("调用78行pillarGetPositon")


  let pPillar = 0
  let position = false
  //屏幕中间,返回小猪身体中心
  let 柱子的寻找区域 = [monkey.x + 100, monkey.y, monkey.x + 910, monkey.y + 10]
  //log("柱子的寻找区域=",柱子的寻找区域)
  let objectName = "柱子"
  let colorList = []
  for (let i = 0; i < 6; i++) {
    let color = images.pixel(imgMonkey, monkey.x, monkey.y - i)
    colorList.push(color)
  }
  //log(colorList)
  let p = false
  let pList = []
  for (let i = 0; i < colorList.length; i++) {
    p = images.findColor(imgMonkey, colorList[i], {
      region: [柱子的寻找区域[0], 柱子的寻找区域[1], 柱子的寻找区域[2] - 柱子的寻找区域[0], 柱子的寻找区域[3] - 柱子的寻找区域[1]],
      threshold: 0.8
    });
    if (p) {
      pList.push(p.x)
    }
  }
  // //log("100行pList=",pList)
  if (p == false) {
    //log("103行没找到柱子")
    return position;
  } else {
    if (pList.length == 0) {
      //log("pList是一个空列表")
      return;
    }
    //log("109行pList=",pList)
    p = Math.min.apply(null, pList)
    //log("111行p=",p)
    pPillar = p
    //在坐标里面找最左值
    //如果有黄色手指,那么返回黄色手指的坐标,黄色手指下面是红色
    //439,1305,759,1347
    let redPoint = redPointGetPositon()
    if (redPoint) {
      log("3220行有手指", "从柱子函数中跳出")
      return redPoint
    }
  }
  //log("p=",p)


  // //log([柱子的寻找区域[0], 柱子的寻找区域[1], 柱子的寻找区域[2]-柱子的寻找区域[0], 柱子的寻找区域[3]-柱子的寻找区域[1]])


  if (p) {
    //log("\n找到了",objectName,"它的坐标是",p)
    position = p
  } else {
    //log("\n没找到",objectName);
    return position
  }
  //log("pillarGetPositon(monkey)返回的结果是",position)
  // if(p>634){
  //     return position+180

  // }
  //log("柱子返回的值=",[position,"pillar"])
  return [pPillar, "pillar"]
}



function redPointGetPositon() {
  let line = [160, 1065, 900, 1085]
  // 667,1075
  // 686,1075
  //至少15个是黄色的点
  let yellow = "#FFF23A"
  let objectName = "拈花指"

  let position = false
  // imgMonkey
  let sameColor = []
  for (let j = 0; j < line[3] - line[1]; j++) {
    for (let k = 0; k < line[2] - line[0]; k++) {
      // //log("比较的点的坐标=",line[0]+k, line[1])
      let color = images.pixel(imgMonkey, line[0] + k, line[1] + j)
      k++;
      color = colors.toString(color)
      // //log(yellow, color)
      let result = colors.isSimilar(yellow, color)
      if (result) {
        sameColor.push([line[0] + k])
      }
    }
    j++;
  }
  if (sameColor.length < 20) {
    //log("\n没找到",objectName);
    return position
  } else {
    let minP = Math.min.apply(null, sameColor)
    let maxP = Math.max.apply(null, sameColor)
    removeByValue(sameColor, minP)
    removeByValue(sameColor, maxP)
    minP = Math.min.apply(null, sameColor)
    maxP = Math.max.apply(null, sameColor)
    removeByValue(sameColor, minP)
    removeByValue(sameColor, maxP)
    minP = Math.min.apply(null, sameColor)
    maxP = Math.max.apply(null, sameColor)
    position = Math.round((maxP - minP) / 2) + minP
    //log("\n找到了",objectName,"它的坐标是",position)
    //log("手指返回的值=",[position,"redPoint"])

    return [position, "redPoint"]
  }
}


function removeByValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
}




















































//圈圈消除函数区-----------------------------



function quanQuanXiaoChu() {
  if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }
  ////////////////log("循环",kk,"次")
  imgQuan = captureScreen()
  //下面是输出点的信息-------------------------
  // //输出屏幕中间九点状态
  nine = ninePointState()
  customLog39Point(nine)
  //exit()
  // //输出屏幕下方三点状态
  three = threePointState()
  // //////log(three)
  customLog39Point(three)
  //exit()
  //---------------以上是输出点位信息----------------------
  appropriatePut = [];
  for (let i = 0; i < 3; i++) {
    let flag = false
    let sequenceNumber3 = i

    let onePointInTheThreePoint = three[sequenceNumber3]
    //////////////////////log("onePointInTheThreePoint=",onePointInTheThreePoint)
    if (onePointInTheThreePoint.大圈 == "未知" && onePointInTheThreePoint.中圈 == "未知" && onePointInTheThreePoint.小圈 == "未知") {
      ////////////////////log("三点中的",sequenceNumber3,"是空点,跳过循环.")
      //log("三点中的",sequenceNumber3,"号点,是空的")
      continue;
    } else {
      flag = true;
    }

    //////////////////////log("可能将要操作的点的信息onePointInTheThreePoint=",onePointInTheThreePoint,"\n序号是三点中的",sequenceNumber3,"号点")
    //-----------------------------经常出错的地方---------------------------
    let canPut = canYouPutItHere(onePointInTheThreePoint)
    ////log("canPut=",canPut)
    // exit()
    //-----------------------------经常出错的地方---------------------------

    //////log("大小合适放置canPut=",canPut.toString())
    //exit()
    if (canPut.length == 0) {
      ////log("三点中的",sequenceNumber3,"点没有可以放置的点,测试三点中的下一个点",sequenceNumber3+1)
      // break;
    } else {
      ////log("三点中的",sequenceNumber3,"有可以放置的点",canPut)
    }
    ////////////////////log("可以放的位置是",canPut)
    // exit()
    // [ 1, 2, 5, 6, 7, 8 ]
    // //输入能放圈圈的位置列表,输出合适放的第一个点坐标(合适放是指颜色一样,横竖斜)
    //log("i=",i)
    if (flag == true) {
      appropriatePut.push([i, isItAppropriateToPutItHere(onePointInTheThreePoint, canPut), canPut])
    }
    //log("appropriatePut=",appropriatePut)
    // appropriatePut是一个序号,九点中的一个序号
    ////////log("颜色和大小最合适放置appropriatePut=",appropriatePut)
    // exit()
  }
  //有没有最合适的(颜色和大小都合适?
  //log("appropriatePut=",appropriatePut)
  appropriatePutResult = false
  for (let k = 0; k < appropriatePut.length; k++) {
    if (appropriatePut[k][1] == false) {
      appropriatePutResult = false
    } else {
      appropriatePutResult = appropriatePut[k]
      break;
    }
  }

  //有没有合适的大小合适?

  if (appropriatePutResult == false) {
    for (let k = 0; k < appropriatePut.length; k++) {
      if (appropriatePut[k][2].length == 0) {} else {
        appropriatePutResult = appropriatePut[k]
        break;
      }
    }
  }


  if (appropriatePutResult == false) {
    //log("本次没找到圈圈安放位置")
  } else {
    //log("本次找到了圈圈安放位置,格式  三点中的一点,颜色大小合适的点,大小合适的列表",appropriatePutResult)
    if (appropriatePutResult[1] == false) {
      //log("大小合适")
      putCircle(appropriatePutResult[0], appropriatePutResult[2][0])
    } else {
      //log("大小颜色都合适")

      putCircle(appropriatePutResult[0], appropriatePutResult[1])
    }
    sleep(放置后的间隔时间)

    //log("圈圈放置完毕,颜色合适")

  }
  // exit()



}

function canYouPutItHere(onePointInTheThreePoint) {
  //////log("2769行onePointInTheThreePoint=",onePointInTheThreePoint)
  let info = []
  for (let i = 0; i < nine.length; i++) {
    // i=1
    // //////log(nine[i])
    if (canYouPutItHereOne(onePointInTheThreePoint, nine[i])) {

      info.push(i);
    }

  }
  // toastLog(info)
  return info
}

function canYouPutItHereOne(onePointInTheThreePoint, onePointInTheNinePoint) {
  let big = false
  let middle = false
  let small = false
  if (onePointInTheThreePoint.大圈 == "未知" || onePointInTheNinePoint.大圈 == "未知") {

    big = true;
  }
  if (onePointInTheThreePoint.中圈 == "未知" || onePointInTheNinePoint.中圈 == "未知") {


    middle = true;
  }
  if (onePointInTheThreePoint.小圈 == "未知" || onePointInTheNinePoint.小圈 == "未知") {


    small = true;
  }
  if (big == true && middle == true && small == true) {
    ////log("2596行true")
    return true;
  } else {
    ////log("2599行false")

    return false;
  }
}


function customLog39Point(Point) {
  let infos = "\n"
  for (let i = 0; i < Point.length; i++) {
    infos = infos + (i + 1) + "\n"
    for (var prop in Point[i]) {
      infos += prop + "=" + Point[i][prop] + "\n";
    }
  }
  //////log(infos)

}

function mismatch() {
  let imgSmall = images.read(imgPath + "不匹配" + ".png");
  let p = findImage(captureScreen(), imgSmall, {
    region: [342, 833, 654, 1085],
    threshold: 0.8
  });
  if (p) {
    sleep(mismatchTime)
  }

}

// NinePoints=[
//     {x:235,y:656,sequenceNumber:1},{x:540,y:655,sequenceNumber:2},{x:844,y:655,sequenceNumber:3},
//     {x:236,y:960,sequenceNumber:4},{x:541,y:962,sequenceNumber:5},{x:844,y:962,sequenceNumber:6},
//     {x:235,y:1264,sequenceNumber:7},{x:540,y:1265,sequenceNumber:8},{x:845,y:1265,sequenceNumber:9}

// ]
//放置圈圈
function putCircle(sequenceNumber3, sequenceNumber9) {
  // 先按住圈圈,然后拖放到,序号那个点
  //log("放置的点位信息:\n三点坐标",sequenceNumber3,"\n九点坐标",sequenceNumber9)
  let coordinate3 = ThreePoints[sequenceNumber3]
  let coordinate9 = NinePoints[sequenceNumber9]
  //////////////////////log("三点",coordinate3)
  //////////////////////log("九点",coordinate9)
  let duration = 放置时间
  let x1 = coordinate3.x
  let y1 = coordinate3.y
  let x2 = coordinate9.x
  let y2 = coordinate9.y
  swipe(x1, y1, x2, y2, duration)
  press(1009, 471, 3)
  sleep(100)
  mismatch()
}



function isItAppropriateToPutItHere(onePointInTheThreePoint, canPut) {

  ////////log("209行isItAppropriateToPutItHere收到的参数是",onePointInTheThreePoint,canPut)
  // isItAppropriateToPutItHere收到的参数是 { '大圈': '未知', '中圈': '未知', '小圈': '绿色' } [ 0, 6 ]
  let maxPoint = 0
  let appropriatePosition = false
  let 大圈颜色 = onePointInTheThreePoint.大圈
  let 中圈颜色 = onePointInTheThreePoint.中圈
  let 小圈颜色 = onePointInTheThreePoint.小圈


  //////////////////////log("大圈颜色是",大圈颜色)
  for (let i = 0; i < canPut.length; i++) {
    let sequenceNumberLists = otherTwo(canPut[i])
    //////////////////log(canPut[i],"\n","216行isItAppropriateToPutItHere函数中sequenceNumberLists=",sequenceNumberLists)
    // 6 '\n' '216行isItAppropriateToPutItHere函数中sequenceNumberLists=' [ [ 0, 3 ], [ 7, 8 ], [ 2, 4 ] ]
    let kkk = 0
    for (let k = 0; k < sequenceNumberLists.length; k++) {
      let result = isInArrs(大圈颜色, sequenceNumberLists[k])
      if (result) {
        kkk = kkk + 1
      }
    }
    for (let k = 0; k < sequenceNumberLists.length; k++) {
      let result = isInArrs(中圈颜色, sequenceNumberLists[k])
      if (result) {
        kkk = kkk + 1
      }
    }
    for (let k = 0; k < sequenceNumberLists.length; k++) {
      let result = isInArrs(小圈颜色, sequenceNumberLists[k])
      if (result) {
        kkk = kkk + 1
      }
    }
    // kkk是颜色合适的个数
    if (kkk > maxPoint) {
      appropriatePosition = canPut[i]
    }

  }
  // //////////////////log("appropriatePositionList列表内容是",appropriatePositionList)
  // exit()

  // //////////////////log("260行appropriatePositionList列表内容是",appropriatePositionList)
  // exit()
  //只返回最合适的点,得分最高的点
  return appropriatePosition;
}


















// console.info(arr.indexOf('aa'));
function isInArrs(color, sequenceNumberList) {
  //////////////////log("280行isInArrs收到的参数是",color,sequenceNumberList)
  //同时存在于两个数组中返回true,否则返回false
  let colorArr1 = colorListExtractFromSequenceNumber(sequenceNumberList[0])
  let colorArr2 = colorListExtractFromSequenceNumber(sequenceNumberList[1])
  //////////////////log("colorArr1=",colorArr1,"colorArr2=",colorArr2)
  if (colorArr1.indexOf(color) == -1 || colorArr2.indexOf(color) == -1) {
    return false;
  } else {
    return true;
  }
}

//从序号中提取颜色列表
function colorListExtractFromSequenceNumber(sequenceNumber) {
  // nine
  // [ { '大圈': '未知', '中圈': '蓝色', '小圈': '未知' },
  //   { '大圈': '未知', '中圈': '未知', '小圈': '粉色' },
  //   { '大圈': '紫色', '中圈': '未知', '小圈': '未知' } ]
  let info = [];
  let point = nine[sequenceNumber];
  if (point.大圈 == "未知") {} else {
    info.push(point.大圈)
  }
  if (point.中圈 == "未知") {} else {
    info.push(point.中圈)
  }
  if (point.小圈 == "未知") {} else {
    info.push(point.小圈)
  }

  return info
}















// 012
// 345
// 678
function otherTwo(num) {

  switch (num) {
    case 0:
      return [
        [1, 2],
        [3, 6],
        [4, 8]
      ]
    case 1:
      return [
        [0, 2],
        [4, 7]
      ]
    case 2:
      return [
        [0, 1],
        [5, 8],
        [4, 6]
      ]
    case 3:
      return [
        [0, 6],
        [4, 5]
      ]
    case 4:
      return [
        [1, 7],
        [3, 5],
        [0, 8],
        [2, 6]
      ]
    case 5:
      return [
        [2, 8],
        [3, 4]
      ]
    case 6:
      return [
        [0, 3],
        [7, 8],
        [2, 4]
      ]
    case 7:
      return [
        [1, 4],
        [6, 8]
      ]
    case 8:
      return [
        [2, 5],
        [0, 4],
        [6, 7]
      ]
    default:
      toastLog("otherTwo不接受这个数,你写错了")
      alert()
  }


}











function ninePointState() {
  let infoList = []
  //////////////////////////log("NinePoints.length=",NinePoints.length)
  for (let i = 0; i < NinePoints.length; i++) {

    pointCoordinate = NinePoints[i]
    Point = new PointState(pointCoordinate)


    let info = {
      "大圈": Point.bigCircleState.color,
      "中圈": Point.middleCircleState.color,
      "小圈": Point.smallCircleState.color
    }
    infoList.push(info)
  }
  return infoList

}

function threePointState() {
  let infoList = []
  for (let i = 0; i < ThreePoints.length; i++) {

    pointCoordinate = ThreePoints[i]
    Point = new PointState(pointCoordinate)


    let info = {
      "大圈": Point.bigCircleState.color,
      "中圈": Point.middleCircleState.color,
      "小圈": Point.smallCircleState.color
    }
    infoList.push(info)
  }
  return infoList

}





function ShowTheObject(obj) {
  var des = "";
  for (var name in obj) {
    des += name + ":" + obj[name] + ";";
  }
  dump(des);
}



function threePointState() {
  let infoList = []
  //////////////////////////log("ThreePoints.length=",ThreePoints.length)
  for (let i = 0; i < ThreePoints.length; i++) {
    pointCoordinate = ThreePoints[i]
    Point = new PointState(pointCoordinate)

    let info = {
      "大圈": Point.bigCircleState.color,
      "中圈": Point.middleCircleState.color,
      "小圈": Point.smallCircleState.color
    }
    infoList.push(info)
  }
  return infoList

}


function customLog(Point) {
  //////////////////////log("\n",Point.pointCoordinate.sequenceNumber,"\n",Point.pointCoordinate.x,",",Point.pointCoordinate.y,"\n",Point.bigCircleState.circleType,"-",Point.bigCircleState.color,"\n",Point.middleCircleState.circleType,"-",Point.middleCircleState.color,"\n",Point.smallCircleState.circleType,"-",Point.smallCircleState.color,"\n\n")

}





function PointState(pointCoordinate) {
  this.pointCoordinate = pointCoordinate;
  this.bigCircleState = bigCircleState(pointCoordinate)
  this.middleCircleState = middleCircleState(pointCoordinate)
  this.smallCircleState = smallCircleState(pointCoordinate)
}



//圈圈状态
function CircleState(pointCoordinate, distanceFromTheCenterPoint) {
  //每个点上有大中小三个圈圈,大中小圈圈有各自的颜色

  // ////////////////////////////log("CircleState传入的参数是",pointCoordinate,distanceFromTheCenterPoint)

  this.pointCoordinate = pointCoordinate;
  this.distanceFromTheCenterPoint = distanceFromTheCenterPoint;
  this.existence = "未知"
  this.color = "未知"


  if (bigMiddleSmall[0] == distanceFromTheCenterPoint) {
    this.circleType = "大圈"
  } else if (bigMiddleSmall[1] == distanceFromTheCenterPoint) {
    this.circleType = "中圈"
  } else if (bigMiddleSmall[2] == distanceFromTheCenterPoint) {
    this.circleType = "小圈"
  } else {
    ////////////////////////////log("CircleState()的参数distanceFromTheCenterPoint数值不对,请检查")
    // sleep(2000)
    // exit()
  }


  for (let i = 0; i < CircleColors.length; i++) {

    let circleColor = CircleColors[i]["colorValue"]
    // ////////////////////////////log("122行 从颜色列表中取出的点是",CircleColors[i])

    let p = isColorHereCircle(pointCoordinate, distanceFromTheCenterPoint, circleColor)

    if (p) {
      this.existence = "存在"
      this.color = CircleColors[i]["colorName"]
      // ////////////////////////////log("这个圈圈是",this.circleType,"   颜色是",CircleColors[i])
      break;
    } else {
      // ////////////////////////////log("颜色未知","和其对比的颜色是",CircleColors[i])
    }

  }

}





function bigCircleState(pointCoordinate) {
  //每个点上有大中小三个圈圈,大中小圈圈有各自的颜色
  return new CircleState(pointCoordinate, bigMiddleSmall[0])
}

function middleCircleState(pointCoordinate) {
  //每个点上有大中小三个圈圈,大中小圈圈有各自的颜色
  return new CircleState(pointCoordinate, bigMiddleSmall[1])
}

function smallCircleState(pointCoordinate) {
  //每个点上有大中小三个圈圈,大中小圈圈有各自的颜色
  return new CircleState(pointCoordinate, bigMiddleSmall[2])
}

//输入一个中心点和颜色,输出布尔值,如果这个小小的区域有这个颜色,那么就是真,否则就是假
//圈圈环环的宽度假定为10



// CircleColors=[
//     {colorName:"紫色",colorValue:"#BB30FD"},
//     {colorName:"粉色",colorValue:"#FF76E8"},
//     {colorName:"蓝色",colorValue:"#00C4FE"},
//     {colorName:"绿色",colorValue:"#8BDA40"},
//     {colorName:"橙色",colorValue:"#FF9C00"},
//     {colorName:"红色",colorValue:"#F93A5F"}
// ]
function isColorHereSmall(pointCoordinate, color1) {
  ////////////////////////////log("isColorHereSmall接收到的参数是",pointCoordinate,color1)

  let tolerance = 5
  let Threshold = 6
  let Region = [
    pointCoordinate.x - tolerance, pointCoordinate.y - tolerance, 2 * tolerance, 2 * tolerance
  ]
  ////////////////////////////log("Region=",Region)
  let p = false
  for (let k = 0; k < color1.length; k++) {
    p = images.findColor(imgQuan, color1[k], {
      region: Region,
      threshold: Threshold
    });
    if (p) {
      break
    }
  }
  ////////////////////////////log("p=",p)
  color = images.pixel(imgQuan, pointCoordinate.x, pointCoordinate.y)
  pointCoordinate.color = colors.toString(color)
  //////////////////////log("是否有这个颜色",color1,"实际点位的信息",pointCoordinate)
  if (p) {
    ////////////////////////////log("返回true")
    return true
  } else {
    ////////////////////////////log("返回false")
  };

}

//输入   点位   圈圈的半径
//输出      这个半径对应的圆环是否是已知的颜色
function isColorHereCircle(pointCoordinate, radius, color) {
  // ////////////////////////////log("*********************上*****************************88")
  // ////////////////////////////log("184行isColorHereCircle传入的参数是",pointCoordinate,radius,color)
  let angle = 45
  let radian = 2 * Math.PI / 360 * angle
  let rightPoint = {
    x: Math.round(pointCoordinate.x + Math.abs(Math.cos(radian) * radius)),
    y: Math.round(pointCoordinate.y - Math.abs(Math.sin(radian) * radius))
  }
  radian = 2 * Math.PI / 360 * (180 - angle)
  let leftPoint = {
    x: Math.round(pointCoordinate.x - Math.abs(Math.cos(radian) * radius)),
    y: Math.round(pointCoordinate.y - Math.abs(Math.sin(radian) * radius))
  }
  // ////////////////////////////log("leftPoint=",leftPoint)
  let circleType = "未知"
  if (bigMiddleSmall[0] == radius) {
    circleType = "大圈"
  } else if (bigMiddleSmall[1] == radius) {
    circleType = "中圈"
  } else if (bigMiddleSmall[2] == radius) {
    circleType = "小圈"
  } else {
    // ////////////////////////////log("CircleState()的参数distanceFromTheCenterPoint数值不对,请检查")
    // sleep(2000)
    // exit()
  }

  // ////////////////////////////log(circleType,"isColorHereCircle检测的左点是",leftPoint,"实际检测的左点是",isColorHereSmall(leftPoint,color),"检测的右点是",rightPoint,"实际检测的右点是",isColorHereSmall(rightPoint,color))


  if (isColorHereSmall(leftPoint, color) && isColorHereSmall(rightPoint, color)) {
    return true
  } else {
    return false
  }
  // ////////////////////////////log("***********************下***************************88")

}















































function fanFanLe() {
  if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
  }
  sleep(1000)
  pressTime = 1
  pukeColor = "#915bed"
  backgroundColor = "#301754"
  columnsNumber = 4
  rowsNumber = 6
  imgPath = "/sdcard/快手小游戏截图";
  imgPathWareHouse = "/sdcard/快手小游戏截图/翻翻乐/仓库";
  imgPathBackground = "/sdcard/快手小游戏截图/翻翻乐/背景";
  imgPathCenterImg = "/sdcard/快手小游戏截图/翻翻乐/中心图";
  files.removeDir(imgPathWareHouse)
  files.removeDir(imgPathBackground)
  files.removeDir(imgPathCenterImg)

  files.ensureDir(imgPathWareHouse);
  files.ensureDir(imgPathBackground);
  files.ensureDir(imgPathCenterImg);
  imgFistCenterCoordinate = [208, 505];
  imgLastCenterCoordinate = [855, 1593];
  SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
  SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));

  SpacingLeftAndRight = 216
  SpacingUpAndDown = 216


  sleep(200)
  翻拍之后等待的时间 = 200

  grids = [];
  img = captureScreen()

  for (var x = 0; x < 6; x++) {
    grids.push([]);
    for (var y = 0; y < 4; y++) {
      let xx = imgFistCenterCoordinate[0] + SpacingLeftAndRight * y
      let yy = imgFistCenterCoordinate[1] + SpacingUpAndDown * x
      grids[x].push({
        serialNumberX: x,
        serialNumberY: y,
        coordinateX: xx,
        coordinateY: yy,
        card: "未知",
        exist: true,
        click: function (原因) {
          // log('当前点击的是',this.serialNumberX,this.serialNumberY,"点击原因是",原因)
          // sleep(1000)
          press(xx, yy, 1)
          sleep(50)
        },


        imgCenter中心图: function () {
          let img = captureScreen();
          let smallImg = images.clip(img, xx - 30, yy - 30, 60, 60)
          // let path16=imgPathCenterImg + '/翻翻乐中心图'+this.serialNumberX+this.serialNumberY+'.png'
          // files.createWithDirs(path16)
          // // log("中心图保存开始")
          // images.save(smallImg, path16)
          // // log("中心图保存结束")
          return smallImg
        },

      });
    }
  }


  var knowImgs = getKnownImgs()






  for (let kk = 0; kk < 1; kk++) {












    for (var x = 0; x < 6; x++) {
      for (var y = 0; y < 4; y++) {
        var gridNow = getGridInfo(x, y)

        if (gridNow && gridNow.hasOwnProperty("info") &&
          gridNow.info.hasOwnProperty("name")

        ) {
          log('name=', grids[x][y].info.name, grids[x][y].serialNumberX, grids[x][y].serialNumberY)
          //没有翻牌就点
          //是蛋糕图片就去仓库中找蛋糕图片
          //其他不予理会
          if (gridNow.info.name.indexOf('未翻牌') != -1) {

            gridNow.click("未翻牌")

            sleep(300)
            log("这个格子刚才未翻牌,现在应该翻过来", x, y)
          }
          var gridNow2 = getGridInfo(x, y)
          log("翻牌之后的是:", gridNow2)
          // log('下面开始遍历格子')
          for (var xx = 0; xx < 6; xx++) {
            for (var yy = 0; yy < 4; yy++) {
              if (x == xx && y == yy) {
                continue
              }
              // log('开始遍历的格子序号= ',xx,yy)
              //遍历格子是位了点击和当前图片一样的格子
              //如果这个格子存储了信息  拿出来和当前格子的信息比较
              if (grids[xx][yy].hasOwnProperty("info") && grids[xx][yy].info.hasOwnProperty("name") &&
                gridNow2.hasOwnProperty("info") && gridNow2.info.hasOwnProperty("name")


              ) {
                if (grids[xx][yy].info.name == gridNow2.info.name) {
                  log("正在对比的格子是=", gridNow2.info.name)

                  grids[x][y].click("相同图片")
                  grids[xx][yy].click("相同图片")
                  // grids[x][y].click("相同图片")
                  // grids[xx][yy].click("相同图片")















                }

              }

            }
          }












        } else {
          log('获取格子信息失败', x, y)
        }
      }
    }

    // logGrid()

    for (var x = 0; x < 6; x++) {
      for (var y = 0; y < 4; y++) {
        if (grids[x][y].hasOwnProperty("info") && grids[x][y].info.hasOwnProperty("name")) {

          grids[x][y].info.name = ""
        }
      }
    }








  }


  function getGridInfo(x, y) {
    //未翻牌
    var 格子中心图 = grids[x][y].imgCenter中心图()
    for (let i = 0; i < knowImgs.length; i++) {
      var p = findImage(knowImgs[i].img, 格子中心图, {
        threshold: 0.9
      });
      //   var p = findImage(knowImgs[i].img, 格子中心图,{
      //     region: [60, 60,60,60],
      //     threshold: 0.8
      // });
      if (p) {
        grids[x][y].info = knowImgs[i] //name img
        log("和仓库中的一样", knowImgs[i])
        return grids[x][y]
      }
    }
    return false
  }


  function getKnownImgs() {
    var imgPathWareHouse = "/sdcard/快手小游戏截图/翻翻乐/会出现的图"
    var 仓库 = []
    仓库中有图片吗 = files.isEmptyDir(imgPathWareHouse)
    if (!仓库中有图片吗) {
      var imgFiles = files.listDir(imgPathWareHouse);
      for (let i = 0; i < imgFiles.length; i++) {
        仓库.push(

          {
            "name": imgFiles[i],
            "img": images.read(files.join(imgPathWareHouse, imgFiles[i]))
          }

        )
      }
      return 仓库
    } else {
      toastLog("仓库中没有图片,不放图片不能用")
      exit()
    }




  }

}






function messageSend() {
  var adv = Math.floor(Math.random() * 10) + 1;
  if (adv > 2) {
    return;
  }
  var str1 = decodeURI(decodeURI("%25E5%25BF%25AB%25E6%2589%258B%25E5%25B0%258F%25E6%25B8%25B8%25E6%2588%258FQ%25E7%25BE%25A4470614178%25EF%25BC%258C%25E8%25BF%259B%25E7%25BE%25A4%25E5%25BD%2593%25E6%259C%2580%25E5%25BC%25BA%25E7%258E%258B%25E8%2580%2585"))
  sleep(3)
  let s = str1 + " " + randomContent()

  setW = className("android.widget.EditText").text("戳这里打字").findOnce(300)
  if (setW) {
    setW.setText(s);
    text("发送").findOne(300).click();
  }
  //////log("发送的随机字符串是", s)
  log("发送完毕", s)
  sleep(300)
}


function randomContent() {
  var tmp = randomText();
  var timestamp = CurentTime()
  return tmp + timestamp;
}


function randomText() {
  var _len = 10;
  var i = 0;
  var _str = "";
  var _base = 20000;
  var _range = 1000;
  while (i < _len) {
    i++;
    var _lower = parseInt(Math.random() * _range);
    _str += String.fromCharCode(_base + _lower);
  }
  return _str;
}


function CurentTime() {
  var now = new Date();

  var year = now.getFullYear(); //年
  var month = now.getMonth() + 1; //月
  var day = now.getDate(); //日

  var hh = now.getHours(); //时
  var mm = now.getMinutes(); //分

  var clock = year + "-";

  if (month < 10)
    clock += "0";

  clock += month + "-";

  if (day < 10)
    clock += "0";

  clock += day + " ";

  if (hh < 10)
    clock += "0";

  clock += hh + ":";
  if (mm < 10) clock += '0';
  clock += mm;
  return (clock);
}
