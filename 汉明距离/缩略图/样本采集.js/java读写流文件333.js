

importClass(java.io.File)
importClass(java.io.FileInputStream)
importClass(java.io.FileOutputStream)
importClass(java.io.IOException)
importClass(java.io.InputStream)
importClass(java.io.OutputStream)

arr=[
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1,-1,-1,-1,-1,-1,-1,-1,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,
  -1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111,-1111111
]


J = {
  "array": array,
  "byte":byte
};
inAndOutOfStream()
	function inAndOutOfStream()
	{
		/*
		 * 把路径下的文件/home/cwjy1202/hadoop/javaTest/input01.txt
		 * 以字节流的方式复制到/home/cwjy1202/hadoop/javaTest/input012.txt
		 * */
		file = new File("/sdcard/数独/1234矩阵信息/4/9.arr");
		fis = new FileInputStream(file);
		fos = new FileOutputStream("/sdcard/input012.txt");
    // b = new byte[1024];
    b = J.byte("byte",1);
		//数组读取
    len = fis.read(b);
    k=0
		while(-1 != len)
		{
      //数组写入
      log('b.length=',b.length)
      log('b=')
      log(b)

			fos.write(arr, 0, len);
      len = fis.read(b);
      k++;
    }
    log('k=',k)
		//把缓冲区数据强行输出
		fos.flush();
		fos.close();
		fis.close();
	}


  function typeToClass(type) {
    if (typeof(type) != 'string') {
        return type;
    }
    var types = {
        "int": "Integer",
        "long": "Long",
        "string": "String",
        "double": "Double",
        "char": "Character",
        "byte": "Byte",
        "float": "Float"
    };
    if (types[type]) {
        return Packages["java.lang." + types[type]].TYPE;
    }
    return Packages[type];
  }

  function array(type) {
    var clazz = typeToClass(type);
    var args = arguments;
    args[0] = clazz;
    return java.lang.reflect.Array.newInstance.apply(null, args);
  }
  function byte(type) {
    var clazz = typeToClass(type);
    var args = arguments;
    args[0] = clazz;
    return java.lang.reflect.Array.newInstance.apply(null, args);
  }


