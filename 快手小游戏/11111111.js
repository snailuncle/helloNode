// 00   10  是否相似


// path1="/storage/emulated/0/快手小游戏截图/翻翻乐/中心图/翻翻乐中心图22.png"
path2="/storage/emulated/0/快手小游戏截图/翻翻乐/仓库/翻翻乐仓库21.png"
path1="/storage/emulated/0/快手小游戏截图/翻翻乐/仓库/翻翻乐仓库22.png"



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
  //5个点需要加上位置属性

// 10  53


  point5FromImg1=point5FromImg(img1)
  log(point5FromImg1)
  let count=0
  for(let i=0;i<point5FromImg1.length;i++){


    let color1=point5FromImg1[i].color
    let x=point5FromImg1[i].x
    let y=point5FromImg1[i].y


    log("color1=",color1)
    color1=colors.toString(color1)

//在该图片中找色，指定找色区域为在位置(400, 500)的宽为300长为200的区域，指定找色临界值为4
// var point = findColor(img, "#00ff00", {
//   region: [400, 500, 300, 200],
//   threshold: 4
// });

    let 范围=10

    let 图片宽度=img1.getWidth()
    let 图片高度=img1.getHeight()

    let xStart=x-范围
    if(xStart<0){
      xStart=1
    }
    let yStart=y-范围
    if(yStart<0){
      yStart=1
    }
    let xEnd=x+范围
    if(xEnd>图片宽度){
      xEnd=图片宽度
    }
    let yEnd=y+范围
    if(yEnd>图片宽度){
      yEnd=图片宽度
    }

    let result=findColor(img2, color1,{
      region: [xStart, yStart, xEnd-xStart, yEnd-yStart],
      threshold: 4
    }



    );
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
  let result=[
    {
      "color":color1,
      "x":5,
      "y":5
    },
    {
      "color":color2,
      "x":15,
      "y":5
    },
    {
      "color":color3,
      "x":25,
      "y":5
    },
    {
      "color":color4,
      "x":5,
      "y":15
    },
    {
      "color":color5,
      "x":5,
      "y":25
    }
  ]
  return result
}
