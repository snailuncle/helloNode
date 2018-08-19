
auto();
//翻翻乐
//每次点击前都判断16个格子的状态

//只管没翻牌和翻了的
//背景不管

if (!requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}
fanFanLe()
function fanFanLe(){

  pressTime = 1
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
  imgLastCenterCoordinate = [855, 1593];
  SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
  SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));

  SpacingLeftAndRight=216
  SpacingUpAndDown=216


  sleep(200)
  翻拍之后等待的时间 = 200

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
        click: function (原因) {
          // log('当前点击的是',this.serialNumberX,this.serialNumberY,"点击原因是",原因)
          // sleep(1000)
          press(xx, yy, 1)
          sleep(50)
        },


        imgCenter中心图: function () {
          let img = captureScreen();
          let smallImg = images.clip(img, xx-30, yy-30, 60, 60)
          // let path16=imgPathCenterImg + '/翻翻乐中心图'+this.serialNumberX+this.serialNumberY+'.png'
          // files.createWithDirs(path16)
          // // log("中心图保存开始")
          // images.save(smallImg, path16)
          // // log("中心图保存结束")
          return smallImg
        },

      });
    }
  }


  var knowImgs=getKnownImgs()






  for(let kk=0;kk<1;kk++){












    for (var x = 0; x < 6; x++) {
      for (var y = 0; y < 4; y++) {
        var gridNow=getGridInfo(x,y)

        if(gridNow && gridNow.hasOwnProperty("info") &&
           gridNow.info.hasOwnProperty("name")

      ){
          log('name=',grids[x][y].info.name,grids[x][y].serialNumberX,grids[x][y].serialNumberY)
          //没有翻牌就点
          //是蛋糕图片就去仓库中找蛋糕图片
          //其他不予理会
          if(gridNow.info.name.indexOf('未翻牌') != -1){

            gridNow.click("未翻牌")

            sleep(300)
            log("这个格子刚才未翻牌,现在应该翻过来",x,y)
          }
          var gridNow2=getGridInfo(x,y)
          log("翻牌之后的是:",gridNow2)
          // log('下面开始遍历格子')
          for (var xx = 0; xx < 6; xx++) {
            for (var yy = 0; yy < 4; yy++) {
              if(x==xx && y==yy){
                continue
              }
              // log('开始遍历的格子序号= ',xx,yy)
              //遍历格子是位了点击和当前图片一样的格子
              //如果这个格子存储了信息  拿出来和当前格子的信息比较
              if(grids[xx][yy].hasOwnProperty("info") && grids[xx][yy].info.hasOwnProperty("name") &&
              gridNow2.hasOwnProperty("info") && gridNow2.info.hasOwnProperty("name")


            ){
                if(grids[xx][yy].info.name==gridNow2.info.name){
                log("正在对比的格子是=",gridNow2.info.name)

                  grids[x][y].click("相同图片")
                  grids[xx][yy].click("相同图片")
                  // grids[x][y].click("相同图片")
                  // grids[xx][yy].click("相同图片")















                }

              }

            }
          }












        }else{
          log('获取格子信息失败',x,y)
        }
      }
    }

    // logGrid()

    for (var x = 0; x < 6; x++) {
      for (var y = 0; y < 4; y++) {
        if(grids[x][y].hasOwnProperty("info") && grids[x][y].info.hasOwnProperty("name")){

          grids[x][y].info.name=""
        }
      }
    }








  }


  function  getGridInfo(x,y){
    //未翻牌
    var 格子中心图=grids[x][y].imgCenter中心图()
    for(let i=0;i<knowImgs.length;i++){
      var p = findImage(knowImgs[i].img, 格子中心图,{
        threshold:0.9
      });
    //   var p = findImage(knowImgs[i].img, 格子中心图,{
    //     region: [60, 60,60,60],
    //     threshold: 0.8
    // });
      if(p){
        grids[x][y].info=knowImgs[i] //name img
        log("和仓库中的一样",knowImgs[i])
        return  grids[x][y]
      }
    }
    return false
  }


  function getKnownImgs(){
    var imgPathWareHouse="/sdcard/快手小游戏截图/翻翻乐/会出现的图"
    var 仓库=[]
    仓库中有图片吗=files.isEmptyDir(imgPathWareHouse)
    if(!仓库中有图片吗){
      var imgFiles = files.listDir(imgPathWareHouse);
      for(let i=0;i<imgFiles.length;i++){
        仓库.push(

          {
            "name":imgFiles[i],
            "img":images.read(  files.join(imgPathWareHouse, imgFiles[i])   )
          }

        )
      }
      return 仓库
    }else{
      toastLog("仓库中没有图片,不放图片不能用")
      exit()
    }




  }

}



















// function logGrid(){

//   let 表格=""
//   for (var x = 0; x < 6; x++) {
//     for (var y = 0; y < 4; y++) {

//       let r=grids[x][y].info.name
//       if(r){
//         表格+=r+","
//       }
//     }
//     表格+="\n"

//   }
//   log("表格=\n",表格)
// }

