
  importClass(android.media.ThumbnailUtils)
  importClass(android.graphics.BitmapFactory)
  importClass(android.graphics.Bitmap)
  importClass(android.graphics.Matrix)
  importClass(android.graphics.ColorMatrix)
  importClass(java.io.File)
  importClass(java.io.FileOutputStream)
  importClass(java.lang.Integer)

// imgPathBigPic="/sdcard/数独/";
// files.ensureDir(imgPathBigPic);
// imgPathSmallPic="/sdcard/数独/数字缩略图/";
// files.ensureDir(imgPathSmallPic);

// originalPicPath=imgPathBigPic+33+"clip.png"
// ThumbnailPath=imgPathSmallPic+33+"clip.png"
// makeThumbnail(originalPicPath,ThumbnailPath)

//图片变矩阵
ThumbnailPath="/storage/emulated/0/数独/数字缩略图/33clip.png"

bitMap=getImageThumbnail(ThumbnailPath)

log("bitMap=",bitMap)
outputObj(bitMap)






// pixels      接收位图颜色值的数组
// offset      写入到pixels[]中的第一个像素索引值
// stride      pixels[]中的行间距个数值(必须大于等于位图宽度)。
// x          　从位图中读取的第一个像素的x坐标值。
// y           从位图中读取的第一个像素的y坐标值
// width    　　从每一行中读取的像素宽度
// height 　　　读取的行数




Array.dim = function(dimension, initial){
  var a = [],i;
  for(i = 0;i < dimension;i += 1){
      a[i] = initial;
  }
  return a;
};



var pixels = Array.dim(8*11,null);




// offset=0
// stride=8
// x=0
// y=0
// width=8
// height=11
// result=bitMap.getPixels(pixels,offset,stride,x,y,width,height)
// log("result=",pixels)

result=getPicturePixel(bitMap)
s=''
for(let i=0;i<result.length;i++){
  s+=result[i]+','
}
log("s=",s)





function getPicturePixel(bitmap) {

  width = bitmap.getWidth();
  height = bitmap.getHeight();
  console.log("width=",width,"  height=",height)
  // 保存所有的像素的数组，图片宽×高
  // pixels = new int[width * height];
  pixels = new Array(width * height);
  k=0
  for(let j=0;j<height;j++){
    for(let i=0;i<width;i++){
      let color=bitmap.getPixel(i,j)
      console.log("color=",color)
      // if(color>-1645833){
      if(color==-1){
        pixels[k]=0
      }else{
        pixels[k]=1
      }
      k++
    }
  }
  return pixels
}














function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}



function getImageThumbnail(imagePath, width, height) {
  width=width || 8
  height=height || 11
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
  return bitmap;
}







function makeThumbnail(originalPicPath,ThumbnailPath){
  // 图片先变成缩略图,再变成矩阵.js

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
      return bitmap;
  }
  imagePath=originalPicPath
  var src = images.read(imagePath);
  var width=8
  var height=11
  result=getImageThumbnail(imagePath, width, height)
  console.log(result)
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
  saveBitmapToSDCard(result, ThumbnailPath)
  // app.viewFile("/sdcard/1.jpg");
}
