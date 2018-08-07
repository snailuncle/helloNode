imgPath="/sdcard/数独/";
files.ensureDir(imgPath);
num=4
var src = images.read(imgPath+num+".png");


function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}


// outputObj(src.getBitmap())
outputObj(media)
