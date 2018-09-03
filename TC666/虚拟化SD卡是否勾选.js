
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
