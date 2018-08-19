if (!requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}
pressTime = 1
pressIntervalTime = 10;
pukeColor = "#915bed"
backgroundColor = "#301754"
columnsNumber = 4
rowsNumber = 6
imgPath = "/sdcard/快手小游戏截图";
imgPathWareHouse = "/sdcard/快手小游戏截图/翻翻乐/仓库";
imgPathBackground = "/sdcard/快手小游戏截图/翻翻乐/背景";
imgPathCenterImg = "/sdcard/快手小游戏截图/翻翻乐/中心图";
files.removeDir(imgPathWareHouse)
files.removeDir(imgPathBackground)
files.removeDir(imgPathCenterImg)

files.ensureDir(imgPathWareHouse);
files.ensureDir(imgPathBackground);
files.ensureDir(imgPathCenterImg);
imgFistCenterCoordinate = [208, 505];
imgLastCenterCoordinate = [855, 1575];
SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));
sleep(200)
翻拍之后等待的时间 = 500
grids = [];
img = captureScreen()

for (var x = 0; x < 6; x++) {
  grids.push([]);
  for (var y = 0; y < 4; y++) {
    let xx = imgFistCenterCoordinate[0] + SpacingLeftAndRight * y
    let yy = imgFistCenterCoordinate[1] + SpacingUpAndDown * x
    grids[x].push({
      serialNumberX: x,
      serialNumberY: y,
      coordinateX: xx,
      coordinateY: yy,
      card: "未知",
      exist:true,
      click: function () {
        press(xx, yy, 1)
        sleep(50)
      },
      colorCenter: function () {
        let color = images.pixel(img, xx, yy)
        return color
      },
      imgCenter背景: function () {
        let smallImg = images.clip(img, xx, yy, 30, 30)
        let path16=imgPathBackground + '/翻翻乐背景'+this.serialNumberX+this.serialNumberY+'.png'
        files.createWithDirs(path16)
        images.save(smallImg, path16)
        return smallImg
      },
      imgCenter中心图: function () {
        let img = captureScreen();
        let smallImg = images.clip(img, xx, yy, 30, 30)
        let path16=imgPathCenterImg + '/翻翻乐中心图'+this.serialNumberX+this.serialNumberY+'.png'
        files.createWithDirs(path16)
        log("中心图保存开始")
        images.save(smallImg, path16)
        log("中心图保存结束")
        return smallImg
      },
      imgCenter仓库: function (img) {
        let path16=imgPathWareHouse + '/翻翻乐仓库'+this.serialNumberX+this.serialNumberY+'.png'
        files.createWithDirs(path16)
        log("仓库保存开始")
        images.save(img, path16)
        log("仓库保存结束")
        return img
      },
    });
  }
}

var 此时的背景=游戏readyGo时生成背景()

//现在开始翻翻乐
//翻一张存入仓库
//再翻一张和仓库的对比
//一样的话就点击,并且在仓库中消除该图片
//不一样的话就再点下一张

for(let kk=0;kk<3;kk++){

  for (var x = 0; x < 6; x++) {
    for (var y = 0; y < 4; y++) {
      if(grids[x][y].exist){}else{continue}
      grids[x][y].click()
      sleep(翻拍之后等待的时间)
      var img中心图=grids[x][y].imgCenter中心图()

      //点击一张,就和仓库对比一次,相同的话,就点击两张图两次.
      var 仓库图片路径列表=返回仓库图片文件路径列表()
      if(仓库图片路径列表){
        var 图片序号=当前图片和仓库中的图片对比(img中心图,仓库图片路径列表)
        if(图片序号){
          log("图片序号=",图片序号)
          // exit()
          grids[x][y].click()
          grids[图片序号[0]][图片序号[1]].click()
          grids[x][y].click()
          grids[图片序号[0]][图片序号[1]].click()
          sleep(10)
          grids[x][y].exist=false
          grids[图片序号[0]][图片序号[1]].exist=false
          //从仓库中清除这两张图片
          files.remove(图片序号[2])


        }else{
          grids[x][y].imgCenter仓库(img中心图)
        }
      }








      // grids[x][y].imgCenter仓库(img中心图)

    }
  }
}


















function 当前图片和仓库中的图片对比(img,仓库图片路径列表){
  log("开始和仓库对比")
  log(仓库图片路径列表)
  let k=0
  for(let i=0;i<仓库图片路径列表.length;i++){
    let img1=img
    let img2=images.read(仓库图片路径列表[i])
    let 一样不=isImg1Img2Similar(img1,img2)
    if(一样不){



      return 提取最后两位数字(仓库图片路径列表[i])




    }
    k++;
    log("开始和仓库对比",k,"次")

  }

  return false

}

function 提取最后两位数字(str){

  var a=str.charAt(str.length - 5)
  var b=str.charAt(str.length - 6)
  return [b,a,str]

}




function 返回仓库图片文件路径列表(){
  var 仓库=[]
  仓库中有图片吗=files.isEmptyDir(imgPathWareHouse)
  if(!仓库中有图片吗){
    var imgFiles = files.listDir(imgPathWareHouse);
    for(let i=0;i<imgFiles.length;i++){
      仓库.push(  files.join(imgPathWareHouse, imgFiles[i])   )
    }
  }else{
    return []
  }
  return 仓库
}







function 游戏readyGo时生成背景(){
  var 背景图=null
  //前两行和最后两行
  // 如果这八张图片都相似,那么就是背景
  let imgArr=[]
  imgArr[1]=grids[0][0].imgCenter背景()
  imgArr[2]=grids[0][1].imgCenter背景()
  imgArr[3]=grids[0][2].imgCenter背景()
  imgArr[4]=grids[0][3].imgCenter背景()

  imgArr[5]=grids[1][0].imgCenter背景()
  imgArr[6]=grids[1][1].imgCenter背景()
  imgArr[7]=grids[1][2].imgCenter背景()
  imgArr[8]=grids[1][3].imgCenter背景()


  imgArr[9] =grids[4][0].imgCenter背景()
  imgArr[10]=grids[4][1].imgCenter背景()
  imgArr[11]=grids[4][2].imgCenter背景()
  imgArr[12]=grids[4][3].imgCenter背景()

  imgArr[13]=grids[5][0].imgCenter背景()
  imgArr[14]=grids[5][1].imgCenter背景()
  imgArr[15]=grids[5][2].imgCenter背景()
  imgArr[16]=grids[5][3].imgCenter背景()


  if(   isImg1Img2Similar(imgArr[1],imgArr[2]) &&
        isImg1Img2Similar(imgArr[1],imgArr[3]) &&
        isImg1Img2Similar(imgArr[1],imgArr[4]) &&
        isImg1Img2Similar(imgArr[1],imgArr[5]) &&
        isImg1Img2Similar(imgArr[1],imgArr[6]) &&
        isImg1Img2Similar(imgArr[1],imgArr[7]) &&
        isImg1Img2Similar(imgArr[1],imgArr[8]) &&
        isImg1Img2Similar(imgArr[1],imgArr[9]) &&
        isImg1Img2Similar(imgArr[1],imgArr[10]) &&
        isImg1Img2Similar(imgArr[1],imgArr[11]) &&
        isImg1Img2Similar(imgArr[1],imgArr[12]) &&
        isImg1Img2Similar(imgArr[1],imgArr[13]) &&
        isImg1Img2Similar(imgArr[1],imgArr[14]) &&
        isImg1Img2Similar(imgArr[1],imgArr[15]) &&
        isImg1Img2Similar(imgArr[1],imgArr[16])
){
   //覆盖原来的背景图
  log("16张图一样")
  背景图=imgArr[1]
  images.save(背景图, imgPath + '/翻翻乐背景.png')
  app.viewFile(imgPath + '/翻翻乐背景.png');
}
else{
  log("16张图不一样")
  //使用原来的背景图
  背景图=images.read(imgPath + '/翻翻乐背景.png')
  if(!背景图){
    log("背景图不存在")
  }
}



  return 背景图

}



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
