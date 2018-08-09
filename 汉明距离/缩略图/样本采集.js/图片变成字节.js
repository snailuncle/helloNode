
path='/storage/emulated/0/数独/1234缩略图/4/9.png'
img=images.read(path)
imgBytes=images.toBytes(img)

// log(images.toBytes(1))


log(imgBytes)


arr=[-119, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 8, 0, 0, 0, 11, 8, 6, 0, 0, 0, 66, -101, -52, 37, 0, 0, 0, 4, 115, 66, 73, 84, 8, 8, 8, 8, 124, 8, 100, -120, 0, 0, 0, 75, 73, 68, 65, 84, 24, -107, 99, -4, -1, -1, -1, 127, 6, 60, -128, 9, -97, 36, 94, 5, 90, -22, 65, -72, 21, -64, 36, -79, 42, 64, -106, -60, 80, -16, -3, -5, 79, 6, 6, 6, 6, -122, 107, 55, -41, 33, 4, -1, 35, 1, 77, -75, 64, 12, 54, -36, 4, 116, -93, 97, -128, 17, 22, 14, -72, 20, -96, 88, -127, -51, 58, -126, 1, 5, 0, -46, -124, 73, 37, -1, 69, 3, -104, 0, 0, 0, 0, 73, 69, 78, 68, -82, 66, 96, -126]

log(arr.length)


// public byte[] toBytes(ImageWrapper wrapper, String format, int quality) {
//   Bitmap.CompressFormat compressFormat = parseImageFormat(format);
//   if (compressFormat == null)
//       throw new IllegalArgumentException("unknown format " + format);
//   Bitmap bitmap = wrapper.getBitmap();
//   ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//   bitmap.compress(compressFormat, quality, outputStream);
//   return outputStream.toByteArray();
// }


// compress将bitmap压缩输出到流当中，参数一指定输出的文件类型，参数二0-100指定质量，也决定了压缩后的流大小。

// 参数一指定png 参数二就都为100了，不会再打折压缩了，所以要压缩质量，要指定为jpeg，（第三种webp格式没有接触过）


// compress方法查看源码，直接调用的是c层代码，跟进c层代码 发现是skia库起的作用，skia中继续调用了libjpeg或者libpng库来处理压缩图片。
96  91

86B

一个像素占5b   81
22  多了三个像素   86+15=101  实际上99B

11*8*5=440


一个像素的图片大小  86B


一个2*1像素的图片大小  90B
一个3*1像素的图片大小  95B
一个4*1像素的图片大小  92B


一个1*2像素的图片大小  91B
一个1*3像素的图片大小  96B


一个2*2像素的图片大小  99B
