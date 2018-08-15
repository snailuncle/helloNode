var option = {
  hostname: 'm.baidu.com',
  path: '/tcx?appui=alaxs&page=api/chapterList&gid=4315647048&pageNum=1&chapter_order=asc&site=&saveContent=1',
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'utf-8', //这里设置返回的编码方式 设置其他的会是乱码
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Connection': 'keep-alive',
    'Cookie': 'BAIDUID=A78C39414751FF9349AAFB0FDA505058:FG=1; true; __bsi=12248088537049104479_00_7_N_R_33_0303_cca8_Y',
    'Host': 'm.baidu.com',
    'Referer': 'https://m.baidu.com/tcx?appui=alaxs&page=detail&gid=4305265392&from=dushu'

  }
};
var r = http.get("https://m.baidu.com", option);
log("code = " + r.statusCode);
log("html = " + r.body.string().substring(0, 100));
