

// var J = require("./J.js");
// var arr = J.array("int", 2);
// arr[0] = 1;
// log(arr);


var img2Matrix = require('图片变矩阵函数化.js');

originalPicPath='/storage/emulated/0/数独/23clip.png'
ThumbnailPath='/storage/emulated/0/数独/数字缩略图/23clip.png'
img2Matrix.getImgMatrix(originalPicPath,ThumbnailPath)
