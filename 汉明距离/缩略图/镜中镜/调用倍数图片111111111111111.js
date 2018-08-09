"ui";
threads.start(function (){
  log('开始截图')
  if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
  }
  log('工作结束')
})
//ui布局为一块画布
ui.layout(
    <frame>
        <canvas id="board" w="*" h="*"/>
    </frame>
);
threads.start(function(){
  var imgArr=[]
  var paint = new Paint();
  var matrix = new android.graphics.Matrix();
  path='/storage/emulated/0/QQ图中图/'+'原始截图.png'
  img=images.read(path)
  imgArr.push(img)
  // img.recycle()
});






























// ui.board.on("draw", function(canvas){
//   // imgArr.map(function (item) {
//   //   canvas.drawImage(item, matrix, paint);
//   //   sleep(30)
//   // });
//   for(let i=0;i<imgArr.length;i++){
//     canvas.drawImage(imgArr[i], matrix, paint);
//     sleep(30)
//   }
// });
  // nums=[2,4,6,8,10,12,14,16,18,20]
  // nums.map(function (item) {
  //   path='/storage/emulated/0/QQ图中图/'+item+'彩色.png'
  //   img=images.read(path)
  //   imgArr.push(img)
  // });
    //通知主线程接收结果
  //看看img有没有释放的方法
  // function outputObj(obj) {
  //   var description = "";
  //   for (var i in obj) {
  //     description += i + " = " + obj[i] + "\n";
  //   }
  //   log(description);
  // }
  // outputObj(img)
// var multipleImg = require('一个倍数一个图片.js');
// var matrix2Img = require('矩阵变图片.js');
// log("multipleImg=",multipleImg)
// log("matrix2Img=",matrix2Img)
