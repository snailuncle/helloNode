"ui";
//ui布局为一块画布
ui.layout(
    <frame>
        <canvas id="board" w="*" h="*"/>
    </frame>
);
//画笔
ui.board.on("draw", function(canvas){
  //这里采集图片
  var mirror = require('调用倍数图片.js');
  log(mirror)
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



// ui.board.on("draw", function(canvas){
//     //设置画笔为填充，则绘制出来的图形都是实心的
//     paint.setStyle(Paint.STYLE.FILL);
//     //设置画笔颜色为红色
//     paint.setColor(colors.RED);
//     //绘制一个从坐标(0, 0)到坐标(100, 100)的正方形
//     canvas.drawRect(0, 0, 100, 100, paint);
// });
