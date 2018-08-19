
auto()
//---------------聊天界面发送消息------------------------------------------

messageSend("广告666")



function messageSend() {
  var adv=Math.floor(Math.random()*10)+1;
  if(adv>2){return;}
  var str1=decodeURI(decodeURI("%25E5%25BF%25AB%25E6%2589%258B%25E5%25B0%258F%25E6%25B8%25B8%25E6%2588%258FQ%25E7%25BE%25A4470614178%25EF%25BC%258C%25E8%25BF%259B%25E7%25BE%25A4%25E5%25BD%2593%25E6%259C%2580%25E5%25BC%25BA%25E7%258E%258B%25E8%2580%2585"))
  sleep(3)
  let s = str1 + " " + randomContent()

  setW=className("android.widget.EditText").text("戳这里打字").findOnce(300)
  if(setW){
    setW.setText(s);
    text("发送").findOne(300).click();
  }
  //////log("发送的随机字符串是", s)
  log("发送完毕",s)
  sleep(300)
}


function randomContent() {
  var tmp = randomText();
  var timestamp = CurentTime()
  return tmp + timestamp;
}


function randomText() {
  var _len = 10;
  var i = 0;
  var _str = "";
  var _base = 20000;
  var _range = 1000;
  while (i < _len) {
      i++;
      var _lower = parseInt(Math.random() * _range);
      _str += String.fromCharCode(_base + _lower);
  }
  return _str;
}


function CurentTime() {
  var now = new Date();

  var year = now.getFullYear(); //年
  var month = now.getMonth() + 1; //月
  var day = now.getDate(); //日

  var hh = now.getHours(); //时
  var mm = now.getMinutes(); //分

  var clock = year + "-";

  if (month < 10)
      clock += "0";

  clock += month + "-";

  if (day < 10)
      clock += "0";

  clock += day + " ";

  if (hh < 10)
      clock += "0";

  clock += hh + ":";
  if (mm < 10) clock += '0';
  clock += mm;
  return (clock);
}


