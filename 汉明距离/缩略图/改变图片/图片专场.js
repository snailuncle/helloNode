importClass(android.app.Activity)
importClass(android.content.Context)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Bitmap.Config)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Canvas)
importClass(android.graphics.Color)
importClass(android.os.Bundle)
importClass(android.view.MotionEvent)
importClass(android.view.View)


let bitmap, bitmapTem;
let pixels[];
let bw, bh;
let speed = 10;
let lineNum;
let lineH = 50;
let pixelsTest;

function onCreate(savedInstanceState) {
  super.onCreate(savedInstanceState);
  pixelsTest = new PixelsTest(this);
  setContentView(pixelsTest);
}

function onTouchEvent(event) {
  if (event.getAction() == MotionEvent.ACTION_UP) {
    speed += 10;
    if (speed < bw) {
      for (let i = 0; i < lineNum; i++) {
        if (i % 2 == 0) {

          bitmapTem.setPixels(pixels, i * lineH * bw, bw, 0, i * lineH,
              speed, lineH);
        }
        pixelsTest.invalidate();
      }

    }

  }
  return super.onTouchEvent(event);
}

PixelsTest={

  PixelsTest:function (context) {
    super(context);
    bitmap = BitmapFactory.decodeFile("mnt/sdcard/001.png");
    bw = bitmap.getWidth();
    bh = bitmap.getHeight();
    lineNum = bh / lineH;
    pixels = new int[bw * bh];
    bitmapTem = Bitmap.createBitmap(bw, bh, Config.ARGB_8888);
    bitmap.getPixels(pixels, 0, bw, 0, 0, bw, bh);

  },

  onDraw:function (c) {
    c.drawColor(Color.TRANSPARENT);
    c.drawBitmap(bitmapTem, 0, 0, null);
  }
}


