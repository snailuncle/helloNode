const fs = require('fs')
const readStream = fs.createReadStream('1.mp4')
const writeStream = fs.createWriteStream('2.mp4')
readStream.on('data',(chunk) =>{
 if(writeStream.write(chunk) === false){
    readStream.pause()
 }
})

readStream.on('end',()=>{
  writeStream.end()
  })

  writeStream.on('drain',()=>{
    readStream.resume()
  })


//   on('readable',function(){});//可读的。

// readStream.pause(),事件暂停。

// readStream.resume(),事件重启。

// writeStream.on('drain',function(){})//数据耗尽，已经写入到目标。


