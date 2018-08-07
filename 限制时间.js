
//年月日-时分
// deadline="2018/08/01 17:28:54"

// startTime="2018/08/01 17:28:54"


// var timestamp=new Date().getTime()

// t=getNowFormatDate()
// log(t)
// function getNowFormatDate() {
//   var date = new Date();
//   var seperator1 = "/";
//   var seperator2 = ":";
//   var month = date.getMonth() + 1;
//   var strDate = date.getDate();
//   if (month >= 1 && month <= 9) {
//       month = "0" + month;
//   }
//   if (strDate >= 0 && strDate <= 9) {
//       strDate = "0" + strDate;
//   }
//   var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
//           + " " + date.getHours() + seperator2 + date.getMinutes()
//           + seperator2 + date.getSeconds();
//   return currentdate;
// }








function compareTime(currentTime,deadline){
  log("currentTime=",currentTime,"deadline=",deadline)

	var stime = (new Date(currentTime)).getTime()
  var etime = (new Date(deadline)).getTime()
  log("stime=",stime,"etime=",etime)
	var usedTime = etime - stime;  //两个时间戳相差的毫秒数
	var days=Math.floor(usedTime/(24*3600*1000));
	//计算出小时数
	var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	//计算相差分钟数
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var time = days + "天"+hours+"时"+minutes+"分";
	return time;
}


//年月日-时分
deadline="2018/08/03 17:28:54"

startTime="2018/08/02 17:28:54"


r=compareTime(startTime,deadline)
log(r)
