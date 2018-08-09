"ui";
//ui布局为一块画布
ui.layout(
    <frame>
        <canvas id="board" w="*" h="*"/>
    </frame>
);

ui.board.on("draw", function(canvas){
  var paint = new Paint();

  function outputObj(obj) {
    var description = "";
    for (var i in obj) {
      description += i + " = " + obj[i] + "\n";
    }
    log(description);
  }

  outputObj(paint)

  var paint = new Paint();
  //设置画笔为填充，则绘制出来的图形都是实心的
  paint.setStyle(Paint.STYLE.FILL);
  //设置画笔颜色为红色
  paint.setColor(colors.RED);
  //绘制一个从坐标(0, 0)到坐标(100, 100)的正方形
  canvas.drawRect(0, 0, 100, 100, paint);
});
