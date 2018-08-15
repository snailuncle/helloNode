

到点没有()
function 到点没有(){
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
