const req1 = require('模仿第1次请求.js');
const req2 = require('模仿第2次请求.js');
const req3 = require('模拟第3次请求.js');


视频ID = "x07e136320200"
pn=0
rn=6
for(let i=0;i<10;i++){
  req1.req(视频ID)
  req2.req(视频ID)
  req3.req(pn,rn)
  sleep(100)
}



