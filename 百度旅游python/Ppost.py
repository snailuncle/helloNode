# 一个http请求包括三个部分，为别为请求行，请求报头，消息主体，类似以下这样：

# 请求行
# 请求报头
# 消息主体

# HTTP协议规定post提交的数据必须放在消息主体中，但是协议并没有规定必须使用什么编码方式。服务端通过是根据请求头中的Content-Type字段来获知请求中的消息主体是用何种方式进行编码，再对消息主体进行解析。具体的编码方式包括：

# application/x-www-form-urlencoded
# 最常见post提交数据的方式，以form表单形式提交数据。
# application/json
# 以json串提交数据。
# multipart/form-data
# 一般使用来上传文件。




# url = 'http://httpbin.org/post'
# d = {'key1': 'value1', 'key2': 'value2'}
# r = requests.post(url, data=d)
# print r.text






# requests.post(url='',data={'key1':'value1','key2':'value2'},headers={'Content-Type':'application/x-www-form-urlencoded'})


# url = 'http://httpbin.org/post'
# d = {'key1': 'value1', 'key2': 'value2'}
# r = requests.post(url, data=d)
# print r.text



# url = 'http://httpbin.org/post'
# s = json.dumps({'key1': 'value1', 'key2': 'value2'})
# r = requests.post(url, data=s)
# print r.text


import urllib.request
import urllib.parse
import json
import time
import datetime

t = int(time.time())
print(t)
ts=int(round(t * 1000))   #毫秒级时间戳

t=str(t)
#这个是百度翻译api的地址
url = 'http://ilvyou.baidu.com/submit/note/addscan'
#准备一下头

headers = {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Content-Length': '126',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'PSTM='+t+'; BIDUPSID=02866BFDC8A904677CE24A395DAEE3AA; MCITY=-368%3A; BDUSS=kRVWTJsUUl5UVZCNDA3cHVGRFZLY3l-Vkd1dkxqQW13RFBlME01bHMtS045SlZiQVFBQUFBJCQAAAAAAAAAAAEAAAB-inEUQ8Sn0tfTosblAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI1nbluNZ25bR; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BAIDUID=734F2E374765EC3C5B1CD5331E8C3D70:FG=1; PSINO=2; pgv_pvi=7259860992; pgv_si=s8365333504; Hm_lvt_c063cffa8f183c5b9fdc5f134d8a12c0='+t+'; H_PS_PSSID=1437_21126_26350_20930; arp_scroll_position=700; Hm_lpvt_c063cffa8f183c5b9fdc5f134d8a12c0='+t,
    'Host': 'ilvyou.baidu.com',
    'Origin': 'http://ilvyou.baidu.com',
    'Pragma': 'no-cache',
    'Proxy-Connection': 'keep-alive',
    'Referer': 'http://ilvyou.baidu.com/travel/note/noteviewv1?id=x86e163370200',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    'X-ik-ssl': '0',
    'X-Requested-With': 'XMLHttpRequest'
}

#还有我们准备用Post传的值，这里值用字典的形式






#  'x86e163370200'
values = {
    'note_id': 'x86e163370200',
    'ts': ts,
    'ls': '87916861f35c6f35e422ff4458fc90c4324b0ff3',
    'ss': 'e839db37518202028247881b3bc0d054b3c9a548'
}
#将字典格式化成能用的形式
data = urllib.parse.urlencode(values).encode('utf-8')
#创建一个request,放入我们的地址、数据、头
request = urllib.request.Request(url, data, headers)
#访问
html = urllib.request.urlopen(request).read().decode('utf-8')
#利用json解析包解析返回的json数据 拿到翻译结果
# print(json.loads(html)['trans_result']['data'][0]['dst'])
print(json.loads(html))


















































