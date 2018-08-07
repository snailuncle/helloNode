var fs = require('fs');
var readStream = fs.createReadStream('../aa.js');
var n = 0 ;
readStream
	.on('data',function(chuck){
		n++;
		console.log('data emits');
		console.log(Buffer.isBuffer(chuck));
		readStream.pause();//暂停挂起
		console.log('data pause');
		setTimeout(function(){
			console.log('pause end');
			readStream.resume();//重新启动
		}, 3000);
	})
	.on('readable', function(){
		console.log('readable');
	})
	.on('end', function(){
		console.log('end');
		console.log(n);
	})
	.on('error', function(e){
		console.log('error :' + e);
	})
