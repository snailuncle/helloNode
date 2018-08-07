




importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)



importClass(java.io.File)
importClass(java.io.FileOutputStream)
importClass(java.lang.Integer)




// import android.content.Context;
// import android.graphics.Bitmap;
// import android.graphics.Bitmap.Config;
// import android.graphics.Paint.Style;
// import android.graphics.Canvas;
// import android.graphics.Color;
// import android.graphics.Paint;
// import android.util.AttributeSet;
// import android.view.View;

// import android.graphics.Bitmap;
// import android.graphics.BitmapFactory;
// import android.support.v7.app.AppCompatActivity;
// import android.os.Bundle;
// import android.widget.TextView;
// import android.widget.Toast;

// import android.content.ContentResolver;
// import android.content.Intent;
// import android.graphics.Bitmap;
// import android.graphics.BitmapFactory;
// import android.net.Uri;
// import android.os.Bundle;
// import android.os.Environment;
// import android.support.v7.app.AppCompatActivity;
// import android.util.Log;
// import android.view.View;
// import android.widget.Button;
// import android.widget.ImageView;

// import java.io.FileNotFoundException;
// import java.io.InputStream;
// import java.io.File;
// import java.io.FileOutputStream;


// import android.content.Context;
// import android.graphics.Bitmap;
// import android.graphics.Matrix;
// import android.graphics.PointF;
// import android.graphics.RectF;
// import android.graphics.drawable.BitmapDrawable;
// import android.util.AttributeSet;
// import android.util.DisplayMetrics;
// import android.util.FloatMath;
// import android.view.MotionEvent;
// import android.view.View;
// import android.widget.ImageView;











function convertToBMW(bmp, w, h,tmp) {
  width = bmp.getWidth(); // 获取位图的宽
  height = bmp.getHeight(); // 获取位图的高
  // pixels = new int[width * height]; // 通过位图的大小创建像素点数组
  pixels = new Array(width * height) // 通过位图的大小创建像素点数组
  // 设定二值化的域值，默认值为100
  //tmp = 180;
  bmp.getPixels(pixels, 0, width, 0, 0, width, height);
  alpha = 0xFF << 24;
  for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
          grey = pixels[width * i + j];
          // 分离三原色
          alpha = ((grey & 0xFF000000) >> 24);
          red = ((grey & 0x00FF0000) >> 16);
          green = ((grey & 0x0000FF00) >> 8);
          blue = (grey & 0x000000FF);
          if (red > tmp) {
              red = 255;
          } else {
              red = 0;
          }
          if (blue > tmp) {
              blue = 255;
          } else {
              blue = 0;
          }
          if (green > tmp) {
              green = 255;
          } else {
              green = 0;
          }
          pixels[width * i + j] = alpha << 24 | red << 16 | green << 8
                  | blue;
          if (pixels[width * i + j] == -1) {
              pixels[width * i + j] = -1;
          } else {
              pixels[width * i + j] = -16777216;
          }
      }
  }
  // 新建图片
  newBmp = Bitmap.createBitmap(width, height, Config.ARGB_8888);
  // 设置图片数据
  newBmp.setPixels(pixels, 0, width, 0, 0, width, height);
  resizeBmp = ThumbnailUtils.extractThumbnail(newBmp, w, h);
  return resizeBmp;
}





function saveBitmapToSDCard(bitmap, path) {

  file = new File(path);
  if(file.exists()) {
      file.delete();
  }
  try {
      fileOutputStream = new FileOutputStream(file);
      bitmap.compress(Bitmap.CompressFormat.PNG, 100, (fileOutputStream));//设置PNG的话，透明区域不会变成黑色

      fileOutputStream.close();
      log("----------save success-------------------");
  }
  catch(e) {
      console.log(e)
  }

}


function getImageThumbnail(imagePath, width, height) {
  options = new BitmapFactory.Options();
  options.inJustDecodeBounds = true; //关于inJustDecodeBounds的作用将在下文叙述
  bitmap = BitmapFactory.decodeFile(imagePath, options);
  h = options.outHeight;//获取图片高度
  w = options.outWidth;//获取图片宽度
  scaleWidth = w / width; //计算宽度缩放比
  scaleHeight = h / height; //计算高度缩放比
  scale = 1;//初始缩放比
  if (scaleWidth < scaleHeight) {//选择合适的缩放比
      scale = scaleWidth;
  } else {
      scale = scaleHeight;
  }
  if (scale <= 0) {//判断缩放比是否符合条件
      be = 1;
  }
  options.inSampleSize = scale;
  // 重新读入图片，读取缩放后的bitmap，注意这次要把inJustDecodeBounds 设为 false
  options.inJustDecodeBounds = false;
  bitmap = BitmapFactory.decodeFile(imagePath, options);
  // 利用ThumbnailUtils来创建缩略图，这里要指定要缩放哪个Bitmap对象
  bitmap = ThumbnailUtils.extractThumbnail(bitmap, width, height,ThumbnailUtils.OPTIONS_RECYCLE_INPUT);




  w=50
  h=50
  tmp=180
  result=convertToBMW(bitmap, w, h,tmp)

  app.viewFile("/sdcard/888.jpg");
  return result;
}

imagePath="/sdcard/666.jpg"
var src = images.read(imagePath);
var width=50
var height=50

result=getImageThumbnail(imagePath, width, height)







saveBitmapToSDCard(result, "/sdcard/888.jpg")
app.viewFile("/sdcard/888.jpg");
