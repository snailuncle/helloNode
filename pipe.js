var stream=require('stream');

var util=require('util');

var ReadStream=function(){

	stream.Readable.call(this);

}

util.inherits(ReadStream,stream.Readable);

ReadStream.prototype._read=function(){

	this.push('i');

	this.push('love');

	this.push('you');

	this.push(null);//必须要的，不然会一直重复输入

}

var WriteStream=function(){

	stream.Writable.call(this);

	this._cached=new Buffer('');

}

util.inherits(WriteStream,stream.Writable);

WriteStream.prototype._write=function(chunk,encode,cb){

	console.log(chunk.toString());

	cb();

}

var TransformStream=function(){

	stream.Transform.call(this);

}

util.inherits(TransformStream,stream.Transform);

TransformStream.prototype._transform=function(chunk,encode,cb){

	this.push(chunk);

	cb();

}

TransformStream.prototype._flush=function(cb){

	this.push('really');

	cb();

}

new ReadStream().pipe(new TransformStream).pipe(new WriteStream);
