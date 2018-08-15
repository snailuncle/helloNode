

// console.ts:136 [Extension Host] 12:15:42.249/D: boundsInside(x1,y1,x2,y2)= 10 445 540 778
// 12:15:32.945 console.ts:136 [Extension Host] 12:15:42.269/D: boundsInside(x1,y1,x2,y2)= 540,445, 1070, 778
// 12:15:32.953 console.ts:136 [Extension Host] 12:15:42.286/D: boundsInside(x1,y1,x2,y2)= 10 1506 540 1839
// 12:15:33.146 console.ts:136 [Extension Host] 12:15:42.304/D: boundsInside(x1,y1,x2,y2)= 540 1506 1070 1839






// w=id('channel_item_title').boundsInside(540, 1506, 1070, 1839).findOne(100)
// log(w.text())





// exit()



var startTime=new Date().getTime()


// id=channel_item_title  //视频标题

// id=like_item_like  //点赞红心
//先快速过一遍,然后 截图验证


appName="百度旅游"

packageName=app.getPackageName(appName)

log(packageName)


强行停止app=0
if(强行停止app==1){
  app.openAppSetting(packageName)
  if(textMatches(/流量使用情况/).findOne(3000)){
    click("强行停止")
    sleep(555)
    click("确定")
    sleep(555)

    app.launch(packageName)
    sleep(10000)
  }
}














// 红心大于屏幕高度的六分之一
minimumHeightBottom=parseInt(device.height)-160
minimumHeightTop=parseInt(device.height/5)







// for(i=0;i<2;i++){
//   头像昵称ID()
// }


// 他的 父  父  父

// ImageView  framelayout  relativelayout relativelayout relativelayout 兄弟 textview
clicked={}
count=0
while(1){
  //点击之前需要判断是不是已经点过了
  点击当前页面红心一遍()
  上滑()
  当前处于移动网络点击确定()
  //视频返回后,需要下滑,防止露点
  视频直接返回和移动直接好的()
  // exit()
  var endTime=new Date().getTime()
  var spendTime=endTime-startTime
  spendTime=Math.floor(spendTime/1000)
  log("脚本已经运行了",spendTime,"秒")
}

//有头像昵称ID  就向上滑动滑动
function 头像昵称ID(){
  var c1 = id('rel_head_container').findOnce();
  var c2 = id('mine_nick_name').findOnce();
  var c3 = id('mine_travel_num').findOnce();
  if(c1 && c2 && c3){
    log('头像 昵称 ID在当前页面')
    上滑()
    sleep(1000)
  }
}
function 当前处于移动网络点击确定(){
  var c = text("当前处于移动⽹络下，会消耗流量").findOnce();
  if(c){
    log('有移动网络提示')
    click("好的")
    sleep(1000)
  }
}


function 视频直接返回和移动直接好的(){
  if(id("iv_shadow_bottom").findOnce() && id("iv_like").findOnce() && text("喜欢就来评论吧~") ){
    log("当前是视屏页面")
    back()
    sleep(1500)
  }
}



function 点击爱心后视频误入的处理(){
  当前处于移动网络点击确定()
  视频直接返回和移动直接好的()
}









function 上滑(){
  // 518,  337, 0xe1e1e1
  // 517, 1386, 0xfefefe
  var x1=318
  var y1=1425
  var x2=818
  var y2=466
  var duration=200
  swipe(x1, y1, x2, y2, duration)
  sleep(100)
}

function 点击当前页面红心一遍(){
  红心数量=0
  id("like_item_like").find().forEach(function(item){
    // log("红心数量=",++红心数量)
    // log("红心"+红心数量+"的坐标=",item.bounds())
    if(item.bounds().centerY()<minimumHeightBottom &&
       item.bounds().centerY()>minimumHeightTop &&
       item.bounds().top>=0 &&
       item.bounds().bottom>=0 &&
       item.bounds().left>=0 &&
       item.bounds().right>=0
  ){
      // log("红心在屏幕中间,最低",minimumHeightBottom,"最高",minimumHeightTop)
      let x1,x2,y1,y2
      if(item.bounds().centerX()<device.width/2){
        // log("红心"+红心数量+"在左边",item.bounds())
        x1=10
        x2=parseInt(device.width/2)
        y1=item.bounds().centerY()-333
        y2=item.bounds().centerY()
      }else{
        // log("红心"+红心数量+"在右边",item.bounds())

        x1=parseInt(device.width/2)
        x2=device.width-10
        y1=item.bounds().centerY()-333
        y2=item.bounds().centerY()
      }


      // log("boundsInside(x1,y1,x2,y2)=",x1,y1,x2,y2)
      w=id('channel_item_title').boundsInside(x1,y1,x2,y2).findOne(1000)
      // log(w.text())
      // if(w){




      if(w && w.text().length>2){
        // log("w=",w.id())
        视频标题=w.text()
        // log("视频标题=",视频标题)
        // log("w=",w)

        // log("clicked=",clicked)
        if(clicked.hasOwnProperty(视频标题) && clicked[视频标题]==true){

        }else{
          log("点赞对应的视频标题=",视频标题)
          clickObj(item)
          clicked[视频标题]=true
          log("count============",count++)
        }
      }






    }
  })
}

//  当前喜欢    655
function clickObj(obj){
  let X = obj.bounds().centerX();
  let Y = obj.bounds().centerY();
  press(X,Y,10)
  // log("点击的坐标是",X,Y)
  sleep(100)
  // exit()
}

