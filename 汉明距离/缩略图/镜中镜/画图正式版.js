"ui";
//ui布局为一块画布
ui.layout(
    <frame>
        <canvas id="board" w="*" h="*"/>
    </frame>
);

log('开始截图')
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}
log('图片手术结束')
//画笔
ui.board.on("draw", function(canvas){
  var paint = new Paint();
  var matrix = new android.graphics.Matrix();
  path='/storage/emulated/0/QQ图中图/'+'原始截图.png'
  img=images.read(path)
  canvas.drawImage(img, matrix, paint);
  nums=[2,4,6,8,10,12,14,16,18,20]
  nums.map(function (item) {
    path='/storage/emulated/0/QQ图中图/'+item+'彩色.png'
    img=images.read(path)
    canvas.drawImage(img, matrix, paint);
  });
});










// //请求截图
// if(!requestScreenCapture()){
//   toast("请求截图失败");
//   exit();
// }







// var multipleImg = require('一个倍数一个图片.js');
// var matrix2Img = require('矩阵变图片.js');

// log(multipleImg)
// log(matrix2Img)

// multiple=2
// for(let i=0;i<10;i++){
//   multipleImg.getMultipleImg(multiple)
//   matrix2Img.getImgFromMatrix(multiple)
//   multiple=multiple+2
// }
