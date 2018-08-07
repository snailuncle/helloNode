const stream = require('stream')

class ReadStream extends stream.Readable {
    constructor () {
        super()
    }
    _read () {
        this.push('i')
        this.push('love')
        this.push('imooc \n')
        this.push(null)
    }
}

class writStream extends stream.Writable {
    constructor () {
        super()
    }
    _write (chunk, encode, cb) {
        console.log(chunk.toString())
        cb()
    }
}

class TransformStream extends stream.Transform {
    constructor () {
        super()
    }
    _transform (chunk, encode, cb) {
        this.push(chunk)
        cb()
    }
    _flush (cb) {
        this.push('oh yeah')
        cb()
    }
}

const rs = new ReadStream()
const ws = new writStream()
const ts = new TransformStream()

rs.pipe(ts).pipe(ws)
