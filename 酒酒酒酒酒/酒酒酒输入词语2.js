function 输入词语(){

  tips=id('tip').boundsInside(0, 1297, 1080, 1485).find()
  酒的名字=[]
  tips.forEach(element => {
    log(element.text())
    酒的名字.push({word:element.text(),x:element.bounds().centerX()})
  });

  log("酒的名字=",酒的名字)

  最下方的字的集合=id('gridView').boundsInside(0, 1485, 1080, 1920).findOne(200)

  if(最下方的字的集合){}else{return}


  // log(最下方的字的集合)
  所有字的集合=[]
  最下方的字的集合.children().forEach(element => {
    // log(element.child(0).text())
    wxyc={word:element.child(0).text(),x:element.child(0).bounds().centerX(),y:element.child(0).bounds().centerY(),clicked:false}
    // log(element.text())
    所有字的集合.push(wxyc)
  });

  log("所有字的集合=",所有字的集合)


  for(let i=0;i<酒的名字.length;i++){




    for(let j=0;j<所有字的集合.length;j++){
      if(所有字的集合[j].clicked){continue}
      if(酒的名字[i].word!=所有字的集合[j].word){continue}


      x=所有字的集合[i].x
      y=所有字的集合[i].y
      word=所有字的集合[i].word
      click(x,y)
      log('点击了',x,y,word)
      //检查有没有变成绿色
      方框颜色=""
      if(方框颜色=="绿色"){
        '点击成功'
      }else{
        '点击失败,停止脚本'
        exit()
      }
      所有字的集合[i].clicked=true
      break
    }






  }

  }

function (x,y){
  //传入方框中心坐标
  //方框四个角是不是绿色
  //绿色表示正确点击
  
}



  var circle = {};

  circle.输入词语 = 输入词语

  module.exports = circle;
