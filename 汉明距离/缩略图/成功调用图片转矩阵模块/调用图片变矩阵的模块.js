

// var J = require("./J.js");
// var arr = J.array("int", 2);
// arr[0] = 1;
// log(arr);


var img2Matrix = require('图片变矩阵函数化.js');

originalPicPath='/storage/emulated/0/数独/23clip.png'
ThumbnailPath='/storage/emulated/0/数独/数字缩略图/23clip.png'
imgMatrix=img2Matrix.getImgMatrix(originalPicPath,ThumbnailPath)

log(imgMatrix)
//图片变为矩阵之后,识别数字就转变为数学问题
//数字的特征用什么表示?
//我们简化一下,用每行,每列,某种颜色的个数来表示
//缩略图大小为横8竖11

//首先得有样本


