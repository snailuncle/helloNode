auto

a=[1,2,3]



imgPath="/sdcard/数独/";
files.ensureDir(imgPath);
path=imgPath+"数组.arr"

files.writeBytes(path, a)

console.log('写入完成')
sleep(1000)
result=files.readBytes(path)
console.log(result)

console.log(typeof result)
console.log(typeof  result[0])
console.log(typeof  result[1])
console.log(result[2])

