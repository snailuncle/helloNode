

点击老大页面的关注()
sleep(6000)
把六个小弟的关注都点了()





function  把六个小弟的关注都点了(){
  log(
    "---------------------------------------",
    id("bc_base_title_bar").findOnce(),"---------------------------------------",
    id("id = follow_card_follow_btn").findOnce(),"---------------------------------------",
    text("TA关注的").findOnce(),"---------------------------------------"



  )
  if(id("bc_base_title_bar").findOnce() && id("follow_card_follow_btn").findOnce() && text("TA关注的").findOnce()){
    log("当前是老大关注的6个小弟列表")
    w=id("follow_card_follow_btn").find()
    w.forEach(element => {
      关注了吗=element.text()
      if(关注了吗=="已关注"){
      }else{
        element.click()
      }
    });
    sleep(3000)
    w=id("follow_card_follow_btn").find()
    w.forEach(element => {
      关注了吗=element.text()
      if(关注了吗=="已关注"){
      }else{
        element.click()
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
