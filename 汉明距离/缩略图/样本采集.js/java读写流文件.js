
importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)
importClass(java.io.File)
importClass(java.io.FileOutputStream)
importClass(java.lang.Integer)
importClass(java.io.BufferedWriter)
importClass(java.io.OutputStreamWriter)
importClass(java.io.BufferedInputStream)
importClass(java.io.FileInputStream)
importClass(java.io.BufferedOutputStream)
importClass(android.app.Activity)
importClass(android.content.Context)
// import Java.io.ByteArrayOutputStream;
// import java.io.FileOutputStream;
// import java.io.IOException;
// import java.io.InputStream;
// import android.app.Activity;
// import android.content.Context;
// import android.content.res.AssetManager;
// import android.database.Cursor;
// import android.database.sqlite.SQLiteDatabase;
// import android.database.sqlite.SQLiteDatabase.CursorFactory;
// import android.database.sqlite.SQLiteOpenHelper;
// import android.graphics.Bitmap;
// import android.graphics.BitmapFactory;
// import android.graphics.drawable.BitmapDrawable;
// import android.graphics.drawable.Drawable;
// import android.os.Bundle;
// import android.os.Environment;
// import android.util.Log;
// import android.view.View;
// import android.widget.Button;
// import android.widget.ImageView;

// import android.app.Activity;
// import android.content.Context;
// import android.graphics.Bitmap;
// import android.graphics.BitmapFactory;
// import android.graphics.Canvas;
// import android.graphics.Matrix;
// import android.os.Bundle;
// import android.util.Log;
// import android.view.MotionEvent;
// import android.view.View;
// import android.view.Window;
// import android.view.WindowManager;
// import android.view.View.OnTouchListener;
// import android.widget.ImageView;
// import java.io.BufferedInputStream;
// import java.io.BufferedOutputStream;
// import java.io.BufferedReader;
// import java.io.BufferedWriter;
// import java.io.File;
// import java.io.FileInputStream;
// import java.io.FileOutputStream;
// import java.io.FileReader;
// import java.io.FileWriter;
// import java.io.IOException;
// import java.io.InputStream;
// import java.io.OutputStream;
// import java.io.Reader;
// import java.io.Writer;
// import java.io.FileInputStream;
// import java.io.FileOutputStream;
// import com.henii.service.FileService;
// import android.content.Context;
// import android.test.AndroidTestCase;
// import android.util.Log;
// import java.io.ByteArrayOutputStream;
// import java.io.File;
// import java.io.FileInputStream;
// import java.io.FileNotFoundException;
// import java.io.FileOutputStream;
// import java.io.IOException;

// import android.app.Activity;
// import android.content.Context;
// import android.os.Bundle;
// import android.os.Environment;
// import android.view.View;
// import android.view.View.OnClickListener;
// import android.widget.Button;
// import android.widget.EditText;
// import android.widget.TextView;
// import android.widget.Toast;

// import java.io.BufferedInputStream;
// import java.io.ByteArrayOutputStream;
// import java.io.File;
// import java.io.FileInputStream;
// import java.io.FileNotFoundException;
// import java.io.IOException;
// import java.io.RandomAccessFile;
// import java.nio.ByteBuffer;
// import java.nio.MappedByteBuffer;
// import java.nio.channels.FileChannel;
// import java.nio.channels.FileChannel.MapMode;



function typeToClass(type) {
  if (typeof(type) != 'string') {
      return type;
  }
  var types = {
      "int": "Integer",
      "long": "Long",
      "string": "String",
      "double": "Double",
      "char": "Character",
      "byte": "Byte",
      "float": "Float"
  };
  if (types[type]) {
      return Packages["java.lang." + types[type]].TYPE;
  }
  return Packages[type];
}

function array(type) {
  var clazz = typeToClass(type);
  var args = arguments;
  args[0] = clazz;
  return java.lang.reflect.Array.newInstance.apply(null, args);
}
function byte(type) {
  var clazz = typeToClass(type);
  var args = arguments;
  args[0] = clazz;
  return java.lang.reflect.Array.newInstance.apply(null, args);
}

J = {
  "array": array,
  "byte":byte
};

arr=[
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111
]


//读取文件(缓存字节流)
inin = new BufferedInputStream(new FileInputStream('/sdcard/矩阵333.txt'));
//写入相应的文件
out = new BufferedOutputStream(new FileOutputStream('/sdcard/矩阵333.txt'));
//读取数据
//一次性取多少字节
// bytes = new byte[2048];
bytes = J.byte("byte",2048);
//接受读取的内容(n就代表的相关数据，只不过是数字的形式)
n = -1;
//循环取出数据
while ((n = inin.read(bytes,0,bytes.length)) != -1) {
    //转换成字符串
    str = new String(bytes,0,n,"GBK");
    log(str);
    //写入相关文件
    // out.write(bytes, 0, n);
    out.write(arr, 0, n);
}
//清楚缓存
out.flush();
//关闭流
inin.close();
out.close();
