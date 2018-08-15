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
imgPath = "/sdcard/快手小游戏截图/翻翻乐/";
imgPathWareHouse = "/sdcard/快手小游戏截图/翻翻乐/仓库";
files.removeDir(imgPath)
files.ensureDir(imgPath);
files.ensureDir(imgPathWareHouse);
imgFistCenterCoordinate = [208, 505];
imgLastCenterCoordinate = [855, 1575];
SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));
翻拍之后等待的时间 = 100
grids = [];
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
      card: "待翻牌",
      click: function () {
        press(xx, yy, 1)
      },
      colorCenter: function () {
        let img = captureScreen()
        let color = images.pixel(img, xx, yy)
        return color
      }
    });
  }
}
