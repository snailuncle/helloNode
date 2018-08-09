

importClass(android.media.ThumbnailUtils)
importClass(android.graphics.BitmapFactory)
importClass(android.graphics.Bitmap)
importClass(android.graphics.Matrix)
importClass(android.graphics.ColorMatrix)
importClass(java.io.File)
importClass(java.io.FileOutputStream)
importClass(java.lang.Integer)


var J = require("./J.js");



sd_path='/storage/emulated/0/数独/1234缩略图/4/8.png'
bitmap = BitmapFactory.decodeFile(sd_path)

width=bitmap.getWidth()
height=bitmap.getHeight()
config=bitmap.getConfig()
byteCount=bitmap.getByteCount()
log('width=',width)
log('height=',height)
log('config=',config)
log('byteCount=',byteCount)

function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}
// outputObj(bitmap)
// exit()

function getImgLattice(bitmap) {
  width = bitmap.getWidth();
  height = bitmap.getHeight();
  console.log("width=",width,"  height=",height)
  pixels = J.array("int", width * height);
  // pixels = new Array(width * height);

  offset=0
  stride=width
  x=0
  y=0
  bitmap.getPixels(pixels,offset,stride,x,y,width,height)
  return pixels
}
// pixels=getImgLattice(bitmap)
// log(pixels.length)

// log(bitmap.getByteCount())  // 352 = 88 * 4
