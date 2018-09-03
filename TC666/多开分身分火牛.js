机型伪装s=require("./多开分身机型伪装")
虚拟定位s=require("./多开分身虚拟定位")
开始制作s=require("./多开分身开始制作")

// id = et_input
function 分火牛(){

  idName="et_input"
  var w = id(idName).findOne(1000);
  //如果找到控件则点击
  if(w != null){
      时间戳= Date.parse(new Date())
      火牛名字="火牛"+时间戳
      w.setText(火牛名字)
      log('已经设置了火牛名字---'+火牛名字)
  }else{
      //否则提示没有找到
      toastLog("设置火牛名字失败---"+idName+"停止脚本");
      exit()
  }

  w = id("tv_btn_advance").text("高级选项").findOne(1000);
  //如果找到控件则点击
  if(w != null){
      w.click()
      w2 = text("更多版本").findOne(1000);
      if(w2 != null){
        log("已经展开了高级选项")
      }else{
        w.click()
        w3 = text("更多版本").findOne(1000);
        if(w3 != null){
          log("已经展开了高级选项")
        }else{
          log('展开高级选项失败,停止脚本')
          exit()
        }
      }
  }

  勾选SD卡()

  机型伪装s.机型伪装()
  sleep(3000)
  虚拟定位s.虚拟定位()
  sleep(3000)

  开始制作s.开始制作()
  return 火牛名字
}


function 勾选SD卡(){
  var w虚拟化SD卡 = id("cb_virtual_sdcard").findOne(600);
  if(w虚拟化SD卡 != null){
    log("w.checked=",w虚拟化SD卡.checked())
    if(w虚拟化SD卡.checked()==false){
      log('还没被勾选')
      控件Rect=w虚拟化SD卡.bounds()
      press(控件Rect.centerX(),控件Rect.centerY(),1)
      log('已经勾选了---'+"虚拟化SD卡")
    }else{
      log('已经被勾选')
    }
  }else{
      //否则提示没有找到
      toast("没有找到---"+"虚拟化SD卡");
  }

}






var circle = {};
circle.分火牛 = 分火牛
module.exports = circle;







