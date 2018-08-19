// 00   10  是否相似


path1="/storage/emulated/0/快手小游戏截图/翻翻乐/中心图/翻翻乐中心图42.png"
path2="/storage/emulated/0/快手小游戏截图/翻翻乐/仓库/翻翻乐仓库43.png"



img1=images.read(path1)
img2=images.read(path2)



log("img1=",img1)
log("img2=",img2)
r=isImg1Img2Similar(img1,img2)
log("r=",r)






// imgPathWareHouse = "/sdcard/快手小游戏截图/翻翻乐/仓库";

// r=返回仓库图片文件路径列表()

// log("r=",r)












function isImg1Img2Similar(img1,img2){
  //可能图片太小,比较图片结果不对,看着一样,但函数判断不一样,
  // 改为提取图片给上5个点,如果5个点相似就判断两张图片相似

  point5FromImg1=point5FromImg(img1)
  let count=0
  for(let i=0;i<point5FromImg1.length;i++){
    let color1=point5FromImg1[i]
    color1=colors.toString(color1)
    // log("img2=",img2)
    // log("color1=",color1)
    let result=findColor(img2, color1);
    if(result){count++;}


  }
  if(count>4){
    return true
  }
  return false
  // var result=images.findImageInRegion(img1, img2, 1, 1, 29, 29)
}



function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}




function point5FromImg(img){
  // 5  15  25
  let color1=images.pixel(img, 5, 5)
  let color2=images.pixel(img, 15, 5)
  let color3=images.pixel(img, 25, 5)
  let color4=images.pixel(img, 5, 15)
  let color5=images.pixel(img, 5, 25)

  return [color1,color2,color3,color4,color5]
}
