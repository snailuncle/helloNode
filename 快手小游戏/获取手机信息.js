// console.show();

var str = "";
str += "屏幕宽度:" + device.width;
str += "\n屏幕高度:" + device.height;
str += "\nbuildId:" + device.buildId;
str += "\n主板:" + device.board;
str += "\n制造商:" + device.brand;
str += "\n型号:" + device.model;
str += "\n产品名称:" + device.product;
str += "\nbootloader版本:" + device.bootloader;
str += "\n硬件名称:" + device.hardware;
str += "\n唯一标识码:" + device.fingerprint;
str += "\nIMEI: " + device.getIMEI();
str += "\nAndroidId: " + device.getAndroidId();
str += "\nMac: " + device.getMacAddress();
str += "\nAPI: " + device.sdkInt;
str += "\n电量: " + device.getBattery();

log(str);

// 屏幕宽度:1080
// 屏幕高度:1920
// buildId:NJH47F
// 主板:msm8996
// 制造商:OnePlus
// 型号:ONEPLUS A3010
// 产品名称:lineage_oneplus3
// bootloader版本:unknown
// 硬件名称:qcom
// 唯一标识码:*******
// IMEI: 862561035197035
// AndroidId: 4f38c3bcf4d63db7
// Mac: C0:EE:FB:F1:D5:EC
// API: 25
// 电量: 44
