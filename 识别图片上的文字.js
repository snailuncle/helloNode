// https://cloud.baidu.com/doc/OCR/OCR-API.html#.E8.B0.83.E7.94.A8.E6.96.B9.E5.BC.8F.E4.BA.8C

// 调用方式一
// 请求URL数据格式

// 向API服务地址使用POST发送请求，必须在URL中带上参数：

// access_token: 必须参数，参考“Access Token获取”。
// "access_token":"24.45e9e852ec0cc0f41a268e11ce7b2f3f.2592000.1535634423.282335-10386148"

// 注意：access_token的有效期为30天，需要每30天进行定期更换；

// POST中参数按照API接口说明调用即可。

// 例如文字识别API，使用HTTPS POST发送：

// https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.f9ba9c5241b67688bb4adbed8bc91dec.2592000.1485570332.282335-8574074
// 获取access_token示例代码

// 说明：方式一鉴权使用的Access_token必须通过API Key和Secret Key获取。


https://aip.baidubce.com/rest/2.0/ocr/v1/general?access_token=24.f9ba9c5241b67688bb4adbed8bc91dec.2592000.1485570332.282335-8574074














// https://cloud.baidu.com/doc/OCR/OCR-API.html#.E8.BF.94.E5.9B.9E.E8.AF.B4.E6.98.8E

// 通用文字识别
// 接口描述
// 用户向服务请求识别某张图中的所有文字。

// 请求说明
// 请求示例

// HTTP 方法：POST

// 请求URL： https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic

// URL参数：

// 参数	值
// access_token	通过API Key和Secret Key获取的access_token,参考“Access Token获取”
// Header如下：

// 参数	值
// Content-Type	application/x-www-form-urlencoded
// Body中放置请求参数，参数详情如下：

// 请求参数

// 参数	是否必选	类型	可选值范围	说明
// image	和url二选一	string	-	图像数据，base64编码后进行urlencode，要求base64编码和urlencode后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
// url	和image二选一	string	-	图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效，不支持https的图片链接
// language_type	false	string	CHN_ENG、ENG、
// POR、FRE、
// GER、ITA、
// SPA、RUS、
// JAP、KOR	识别语言类型，默认为CHN_ENG。可选值包括：
// - CHN_ENG：中英文混合；
// - ENG：英文；
// - POR：葡萄牙语；
// - FRE：法语；
// - GER：德语；
// - ITA：意大利语；
// - SPA：西班牙语；
// - RUS：俄语；
// - JAP：日语；
// - KOR：韩语
// detect_direction	false	boolean	true、false	是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:
// - true：检测朝向；
// - false：不检测朝向。
// detect_language	false	string	true、false	是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
// probability	false	string	true、false	是否返回识别结果中每一行的置信度
// 请求代码示例

// 请参考通用文字识别（含位置信息版）的代码内容，并更换请求地址。

// 返回说明
// 返回参数

// 字段	是否必选	类型	说明
// direction	否	int32	图像方向，当detect_direction=true时存在。
// - -1:未定义，
// - 0:正向，
// - 1: 逆时针90度，
// - 2:逆时针180度，
// - 3:逆时针270度
// log_id	是	uint64	唯一的log id，用于问题定位
// words_result	是	array()	识别结果数组
// words_result_num	是	uint32	识别结果数，表示words_result的元素个数
// +words	否	string	识别结果字符串
// probability	否	object	识别结果中每一行的置信度值，包含average：行置信度平均值，variance：行置信度方差，min：行置信度最小值
// 返回示例

// HTTP/1.1 200 OK
// x-bce-request-id: 73c4e74c-3101-4a00-bf44-fe246959c05e
// Cache-Control: no-cache
// Server: BWS
// Date: Tue, 18 Oct 2016 02:21:01 GMT
// Content-Type: application/json;charset=UTF-8
// {
// "log_id": 2471272194,
// "words_result_num": 2,
// "words_result":
//     [
//         {"words": " TSINGTAO"},
//         {"words": "青島睥酒"}
//     ]
// }















// https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic

auto()
log("识别开始")
requestUrl="https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"
accessToken = '24.45e9e852ec0cc0f41a268e11ce7b2f3f.2592000.1535634423.282335-10386148'
requestUrl = requestUrl + "?access_token=" + accessToken

imgFile="/sdcard/test.JPG"
function img64(imgFile){
  let img=images.read(imgFile)
  let img64=images.toBase64(img)
  return img64
}
imageBase64=img64(imgFile)
imageBase64=encodeURI(imageBase64)

console.show();
var res = http.post(requestUrl, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    image:imageBase64,
    image_type:"BASE64",
});
var html = res.body.string();
log(html)


// { statusCode: 200,
//   statusMessage: 'OK',
//   headers:
//    { Appid: '10386148',
//      Connection: 'keep-alive',
//      'Content-Type': 'application/json',
//      Date: 'Tue, 31 Jul 2018 13:42:50 GMT',
//      P3p: 'CP=" OTI DSP COR IVA OUR IND COM "',
//      Server: 'Apache',
//      'Set-Cookie': 'BAIDUID=7262B06633316C65EE0D5616298E14D7:FG=1; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2145916555; path=/; domain=.baidu.com; version=1',
//      Tracecode: '25703384980316578570073121',
//      Vary: 'Accept-Encoding' },
//   body:
//    { string: [Function],
//      bytes: [Function],
//      json: [Function],
//      contentType: application/json },
//   request: Request{method=POST, url=https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=24.45e9e852ec0cc0f41a268e11ce7b2f3f.2592000.1535634423.282335-10386148, tag=null},
//   url: https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=24.45e9e852ec0cc0f41a268e11ce7b2f3f.2592000.1535634423.282335-10386148,
//   method: 'POST' }













log("识别结束")
