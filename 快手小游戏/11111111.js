// 00   10  是否相似


path1="/storage/emulated/0/快手小游戏截图/翻翻乐/中心图/翻翻乐中心图40.png"
path2="/storage/emulated/0/快手小游戏截图/翻翻乐/仓库/翻翻乐仓库44.png"



img1=images.read(path1)
img2=images.read(path2)




r=isImg1Img2Similar(img1,img2)
log("r=",r)






// imgPathWareHouse = "/sdcard/快手小游戏截图/翻翻乐/仓库";

// r=返回仓库图片文件路径列表()

// log("r=",r)












function isImg1Img2Similar(img1,img2){
  //可能图片太小,比较图片结果不对,看着一样,但函数判断不一样,
  // 改为提取图片给上5个点,如果5个点相似就判断两张图片相似

  point5FromImg1=point5FromImg(img1)
  point5FromImg2=point555FromImg(img2)
  let count=0
  for(let i=0;i<point5FromImg1.length;i++){
    let color1=point5FromImg1[i]
    color1=colors.toString(color1)
    let color2=point5FromImg2[i]
    // log("color1=",color1)
    // log("color2=\n",color2)
    let result=isSimilarIn(color1, color2)
    if(result){count++;}


  }
  if(count>4){
    return true
  }
  return false
  // var result=images.findImageInRegion(img1, img2, 1, 1, 29, 29)
}


function isSimilarIn(color1, color2){
  //color1是一个颜色
  //color1是一个颜色数组
  let flag=false
  for(let i=0;i<color2.length;i++){

    let result=colors.isSimilar(color1, color2[i])
    if(result){
      flag=true
    }

  }




  if(flag){
    return true
  }else{
    return false
  }
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
function point555FromImg(img){
  // 5  15  25

  let color1=采集周围的点(img, 5, 5)
  let color2=采集周围的点(img, 15, 5)
  let color3=采集周围的点(img, 25, 5)
  let color4=采集周围的点(img, 5, 15)
  let color5=采集周围的点(img, 5, 25)
  // log("point555FromImg=",[color1,color2,color3,color4,color5])
  return [color1,color2,color3,color4,color5]
}

function 采集周围的点(img,x,y){
  var num=4
  var colorsArr=[]
  x=x-num
  y=y-num
  for(let i=0;i<num*2;i++){
    for(let j=0;j<num*2;j++){
      let color=images.pixel(img, x+j, y+i)
      // log("数字color=",color)

      color=colors.toString(color)
      // log("RGBcolor=",color)
      colorsArr.push(color)
    }
  }
  // log(colorsArr)
  // exit()
  return colorsArr
}
