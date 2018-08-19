r = 是否游戏界面()
log(r)
// outputObj(obj)

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
    if (儿子 && (儿子.info.toString()).indexOf(控件信息) != -1) {
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
          if (r == 0) {
          } else {
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




