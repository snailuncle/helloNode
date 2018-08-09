"ui";
//ui布局为一块画布
ui.layout(
    <frame>
        <canvas id="board" w="*" h="*"/>
    </frame>
);




//画笔
var paint = new Paint();

ui.board.on("draw", function(canvas){

    // //设置画笔颜色为黑色
    paint.setColor(colors.parseColor("#ff0000"));


    //绘制图像
    canvas.drawLine(0, 0, 1080, 1920, paint);


    canvas.drawPoint(500, 500, paint);

    //设置画笔为填充，则绘制出来的图形都是实心的
    paint.setStyle(Paint.STYLE.FILL);
    //设置画笔颜色为红色
    paint.setColor(colors.RED);
    //绘制一个从坐标(0, 0)到坐标(100, 100)的正方形
    canvas.drawRect(0, 0, 100, 100, paint);


});
