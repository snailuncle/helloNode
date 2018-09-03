function 输入词语(){

tips=id('tip').boundsInside(0, 1297, 1080, 1485).find()
酒的名字=[]
tips.forEach(element => {
  log(element.text())
  酒的名字.push(element.text())
});

log("酒的名字=",酒的名字)

最下方的字的集合=id('gridView').boundsInside(0, 1485, 1080, 1920).findOne(200)

if(最下方的字的集合){}else{return}


// log(最下方的字的集合)
所有字的集合={}
最下方的字的集合.children().forEach(element => {
  log(element.child(0).text())
  所有字的集合[element.child(0).text()]={x:element.child(0).bounds().centerX(),y:element.child(0).bounds().centerY()}
  // log(element.text())
});

log("所有字的集合=",所有字的集合)


for(let i=0;i<酒的名字.length;i++){

  x=所有字的集合[酒的名字[i]].x
  y=所有字的集合[酒的名字[i]].y
  click(x,y)

}

}





var circle = {};

circle.输入词语 = 输入词语

module.exports = circle;
