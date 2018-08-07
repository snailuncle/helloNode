import android.graphics.Bitmap;
import android.graphics.Matrix;

public static Bitmap rotate(final Bitmap src,
                            final int degrees,
                            final float px,
                            final float py) {
    if (degrees == 0) return src;
    Matrix matrix = new Matrix();
    matrix.setRotate(degrees, px, py);
    Bitmap ret = Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), matrix, true);
    return ret;
}
