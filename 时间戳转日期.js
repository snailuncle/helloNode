var date = new Date('2014/04/23 18:55:49');
// var date = new Date('Aug 01 2018 17:57:16 GMT+0800 (GMT+08:00)');
// var date = new Date('2014/04/23 17:57:16 GMT+0800 (GMT+08:00)');
    // 有三种方式获取
    var time1 = date.getTime();
    // var time2 = date.valueOf();
    // var time3 = Date.parse(date);
    console.log(time1);//1398250549123
    // console.log(time2);//1398250549123
    // console.log(time3);//1398250549000
sss=new Date(Date.parse('2014-04-23 18:55:49:123'))
    log(sss)


    var t = "2017-12-08 20:5:30"; // 月、日、时、分、秒如果不满两位数可不带0.
    var T = new Date(t); // 将指定日期转换为标准日期格式。Fri Dec 08 2017 20:05:30 GMT+0800 (中国标准时间)
    console.log(T.getTime())


    // var date = new Date();
    // log(date)
