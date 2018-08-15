我关注的=[ '安静的美瘦子27',
'无名小卒不上岸',
  'hearttonghua',
  '祝祝祝媛媛',
  'sober笑源',
  '吆芭绮',
  '哈喽CC哟' ]
// 我关注的=[ '哈喽CC哟',
//   '安静的美瘦子27',
//   '无名小卒不上岸',
//   '祝祝祝媛媛',
//   'hearttonghua',
//   'sober笑源',
//   '吆芭绮' ]


//如果程序中断的话,那么不清除程序数据



点赞=require("./名人游记页面666666666666.js")



找老大()
sleep(1000)
当前处于移动网络点击确定()
sleep(2000)
十秒内有没有出现视频页面()
当前处于移动网络点击确定()

关注老大()
sleep(3000)

w=返回主页()
if(w){
  text("我的").findOnce().parent().parent().click()
}else{
  log("从老大的页面返回主页异常")
}
w=当前是不是我的页面()
if(w){
  text("关注").findOne(2222).parent().click()
  sleep(5000)
  log("已经点了关注")
  w=当前是不是我关注的页面()
if(w){
}else{
  let x=text("关注").findOnce().bounds().centerX()
  let y=text("关注").findOnce().bounds().centerY()
  press(x,y,1)
  sleep(2000)
}
}else{
  log("应该是我的页面,但不是,脚本停止,请增加脚本的鲁棒性")
  exit()
}
w=当前是不是我关注的页面()
if(w){
  text("吆芭绮").findOnce().parent().click()
  sleep(2000)
  log("已经点了老大")
}else{
  log("应该是我关注的页面,但不是,脚本停止,请增加脚本的鲁棒性")
  exit()
}
w=当前是不是老大的页面()
if(w){
  log("开始点击老大的小弟")
  点击老大页面的关注()
  sleep(6000)
  把六个小弟的关注都点了()
  sleep(2000)
}else{
  log("应该是老大的页面,但不是,脚本停止,请增加脚本的鲁棒性")
  exit()
}
三次返回到我的页面()
点击我的页面的关注按钮()
sleep(6000)
//从这里开始循环7个艺人
我关注的.forEach(element => {
  w=text(element).findOne(6000)
  if(w){
    w.parent().click()
    sleep(6000)
    log("开始点击",element,"的游记")

    点赞.点全赞()
    back()
    sleep(2000)
    //回到我关注的页面
    w=当前是不是我关注的页面()
    if(w){

    }else{
      back()
      sleep()
    }
  }
});






















function 十秒内有没有出现视频页面(){

  if(id("iv_like").findOne(10000) && id("iv_comment").findOne(10000)&& id("iv_share").findOne(10000) && text("分享").findOne(10000)){

    log("看到了老大的视频了")



  }else{
    log("应该是老大视频的页面,但不是,脚本停止,请增加脚本的鲁棒性")
    exit()
  }

}
function 点击我的页面的关注按钮(){

  w=当前是不是我的页面()
  if(w){
    log("当前是我的页面")
    w=id("mine_follow_rl").findOnce()
    w.click()
    log("已经点击我的页面的关注")
  }else{
    log("应该是我的页面,但不是,脚本停止,请增加脚本的鲁棒性")
    exit()
  }

}


function 三次返回到我的页面(){
  back();
  sleep(2000)
  back();
  sleep(2000)
  back();
  sleep(2000)
  w=当前是不是我的页面()
  if(w){
    log("三次返回到我的页面,当前是我的页面")
  }else{
    log("应该是我的页面,但不是,脚本停止,请增加脚本的鲁棒性")
    exit()
  }

}






function  把六个小弟的关注都点了(){
  log(
    "---------------------------------------",
    id("bc_base_title_bar").findOnce(),"---------------------------------------",
    id("id = follow_card_follow_btn").findOnce(),"---------------------------------------",
    text("TA关注的").findOnce(),"---------------------------------------"



  )
  if(id("bc_base_title_bar").findOne(10000) && id("follow_card_follow_btn").findOne(10000) && text("TA关注的").findOne(10000)){
    log("当前是老大关注的6个小弟列表")
    w=id("follow_card_follow_btn").find()
    w.forEach(element => {
      关注了吗=element.text()
      if(关注了吗=="已关注"){
      }else{
        element.click()
        sleep(300)
      }
    });
    sleep(3000)
    w=id("follow_card_follow_btn").find()
    w.forEach(element => {
      关注了吗=element.text()
      if(关注了吗=="已关注"){
      }else{
        element.click()
        sleep(300)

      }
    });
    log("点击一遍关注,过3秒钟,再检查一遍")


  }else{
    log("应该是是老大关注的6个小弟列表,但不是,脚本停止,请增加脚本的鲁棒性")
    exit()
  }

}

function  点击老大页面的关注(){
  // mine_follow_rl
  // mine_fans_rl
  if(id("mine_follow_rl").findOnce() && id("mine_fans_rl").findOnce() && text("关注").findOnce() && text("吆芭绮").findOnce()){
    w=id("mine_follow_rl").findOnce()
    w.click()
    log("已经点击老大页面的关注")
  }else{
    log("应该是老大页面,但不是,脚本停止,请增加脚本的鲁棒性")
    exit()
  }

}



function 当前是不是老大的页面(){
  if(id('mine_signature').findOne(6666) && text("吆芭绮").findOne(6666) && text("获赞").findOne(6666) && text("关注").findOne(6666) && text("粉丝").findOne(6666)){
    log("当前是老大的页面")
    return true
  }
  log("当前不是老大的页面")

  return false
}
function 当前是不是我关注的页面(){
  if(id("follow_card_fans_follow").findOne(6000) && text("我关注的").findOne(6000)){
    log("当前是我关注的页面")
    return true
  }
  log("当前不是我关注的页面")

  return false
}
function 当前是不是我的页面(){
  if(id("mine_nick_name").findOne(6666) && text("获赞").findOne(6666) && text("关注").findOne(6666) && text("粉丝").findOne(6666)){
    log("当前是我的页面")
    return true
  }
  log("当前不是我的页面")

  return false
}


function 返回主页(){
  back()
  sleep(3000)
  if(text("发现").findOnce() && text("我的").findOnce() ){
    log("返回主页了")
    return true
  }
  log("返回主页异常")

  return false
}
function 关注老大(){
  w=id('tv_follow').findOne(2000)
  if(w && w.text()=="关注"){
    w.click()
  }
}


function 当前处于移动网络点击确定(){
  var c = text("当前处于移动⽹络下，会消耗流量").findOne(5000);
  if(c){
    log('有移动网络提示')
    click("好的")
  }else{
    log("没找到移动网络提示")
  }
}

function 找老大(){
  var 老大=null
  var c = id("channel_item_name").find();
  for(let i=0;i<c.length;i++){
    name=c[i].text()
    if('吆芭绮'.indexOf(name)!=-1 && c[i].bounds().bottom<1666){

      log("找到老大了,跳出循环")
      老大=c[i]
      break;
    }else{
      log("没找到老大,上滑继续")
    }
  }
  if(老大!=null){
    let X = 老大.bounds().centerX();
    let Y = 老大.bounds().centerY();
    click(X,Y);
    log("点击了老大的名字")
  }else{
    上滑()
    找老大()
  }
}
function 找老大2(){
  var c = id("channel_item_name").find();
  c.forEach(element => {
    name=element.text()
    if('吆芭绮'.indexOf(name)!=-1){
      let X = element.bounds().centerX();
      let Y = element.bounds().centerY();
      click(X,Y);
      log("点击老大的名字")
    }else{
      log("没找到老大,上滑继续")
      上滑()
      return 找老大()
    }
  });
}

function 上滑(){
  // 518,  337, 0xe1e1e1
  // 517, 1386, 0xfefefe
  var x1=318
  var y1=1386
  var x2=818
  var y2=337
  var duration=1000
  swipe(x1, y1, x2, y2, duration)
}
