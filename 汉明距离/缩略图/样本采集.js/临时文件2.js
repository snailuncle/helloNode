auto()
var rtImages = __runtime__.getImages();

log(rtImages)


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
