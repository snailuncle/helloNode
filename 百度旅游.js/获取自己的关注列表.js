auto();
//获取自己的关注列表

我关注的=[]
id("follow_card_uname").find().forEach(function(item){
  if(item.text() != ""){
      log(item.text());
      我关注的.push(item.text())

  }
});
log(我关注的)


我关注的=[ '哈喽CC哟',
  '安静的美瘦子27',
  '无名小卒不上岸',
  '祝祝祝媛媛',
  'hearttonghua',
  'sober笑源',
  '吆芭绮' ]
