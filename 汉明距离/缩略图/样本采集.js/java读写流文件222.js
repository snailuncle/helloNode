
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
// files.writeBytes('/sdcard/矩阵333.txt', arr)


function save(inputText){
out=null;
writer=null;
  try {
      out=Activity.openFileOutput('/sdcard/矩阵333.txt', MODE_PRIVATE);
      writer=new BufferedWriter(new OutputStreamWriter(out));
      writer.write(inputText);
  } catch (e) {
      // TODO Auto-generated catch block
      log(e)
  }
  finally{
      if(writer!=null){
          try {
              writer.close();
          } catch (e) {
              // TODO Auto-generated catch block
              log(e)
          }
      }
  }
}
save(arr)
