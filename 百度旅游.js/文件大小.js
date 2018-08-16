
// file = "/sdcard/data/data/response1534407177779.txt"



function 文件是否大于2kb(file){
  importClass(java.io.File)
  file = new File(file);
  if(getFileSize1(file)>2000){
    return true
  }
  return false
}



function getFileSize1(file) {
  if (file.exists() && file.isFile()) {
    fileName = file.getName();
    log("文件" + fileName + "的大小是：" + file.length());
    return file.length()
  }
  return 0
}




var circle = {};

circle.文件是否大于2kb = 文件是否大于2kb

module.exports = circle;
