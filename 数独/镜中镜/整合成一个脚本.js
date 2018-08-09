"ui";
ui.layout(
    <frame>
        <canvas id="board" w="*" h="*"/>
    </frame>
);
  // 画笔
  path='/storage/emulated/0/QQ图中图/'+'原始截图.png'
  img=images.read(path)
  var paint = new Paint();
  var matrix = new android.graphics.Matrix();
ui.board.on("draw", function(canvas){
  canvas.drawImage(img, matrix, paint);
  sleep(10)
});























  // var multipleImg = require('一个倍数一个图片.js');
  // var matrix2Img = require('矩阵变图片.js');


//   //画笔
// ui.board.on("draw", function(canvas){
//   var paint = new Paint();
//   var matrix = new android.graphics.Matrix();
//   path='/storage/emulated/0/QQ图中图/'+'原始截图.png'
//   img=images.read(path)
//   canvas.drawImage(img, matrix, paint);
//   nums=[2,4,6,8,10,12,14,16,18,20]
//   nums.map(function (item) {
//     path='/storage/emulated/0/QQ图中图/'+item+'彩色.png'
//     img=images.read(path)
//     canvas.drawImage(img, matrix, paint);
//   });
// });

