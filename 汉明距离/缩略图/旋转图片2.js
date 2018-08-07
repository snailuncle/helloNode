importClass(android.graphics.Bitmap);
importClass(android.graphics.Matrix);
importClass(android.media.ThumbnailUtils);

function rotate(src, degrees, px, py){
    if (degrees == 0) return src;
    var matrix = new Matrix();
    matrix.setRotate(degrees, px, py);
    var ret = Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), matrix, true);
    return ret;
}


function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}


outputObj(ThumbnailUtils)
