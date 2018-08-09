
importClass(java.io.DataInputStream)
importClass(java.io.DataOutputStream)
importClass(java.io.FileInputStream)
importClass(java.io.FileOutputStream)
importClass(java.io.IOException)
importClass(java.io.InputStream)
// maiDataInputStreamDemo()




function maiDataInputStreamDemo(){
  is = null;
  dis = null;
  fos = null;
  dos = null;
  // intArr = [1,1,1,1,1,1,1,1,1,1,1]
  intArr=[
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
  try{
      // create file output stream
      fos = new FileOutputStream("/sdcard/javaInt数组");
      // create data output stream
      dos = new DataOutputStream(fos);
      // for each byte in the buffer
      intArr.map(function (item) {
      dos.writeInt(item);
      })
      // force bytes to the underlying stream
      dos.flush();
      // create file input stream
      is = new FileInputStream("/sdcard/javaInt数组");
      // create new data input stream
      dis = new DataInputStream(is);
      // read till end of the stream
      while(dis.available()>0)
      {
        // read character
        c = dis.readInt();
        // print
        log(c + " ");
      }
  }catch(e){
      // if any I/O error occurs
      log(e)
  }finally{
      // releases all system resources from the streams
      if(is!=null)
        is.close();
      if(dos!=null)
        is.close();
      if(dis!=null)
        dis.close();
      if(fos!=null)
        fos.close();
  }
}


var intArrReadWrite={}

intArrReadWrite.read=(intArrFilePath)=>{
  is = null;
  dis = null;
  fos = null;
  dos = null;

  try{
      // create file input stream
      is = new FileInputStream(intArrFilePath);
      // create new data input stream
      dis = new DataInputStream(is);
      // read till end of the stream
      arr=[]
      while(dis.available()>0)
      {
        // read character
        c = dis.readInt();
        // // print
        // log(c + " ");
        arr.push(c)
      }
      return arr
  }catch(e){
      // if any I/O error occurs
      log(e)
  }finally{
      // releases all system resources from the streams
      if(is!=null)
        is.close();
      if(dos!=null)
        is.close();
      if(dis!=null)
        dis.close();
      if(fos!=null)
        fos.close();
  }
}
intArrReadWrite.write=(intArr,intArrFilePath)=>{
  is = null;
  dis = null;
  fos = null;
  dos = null;


  try{
    // create file output stream
    fos = new FileOutputStream(intArrFilePath);
    // create data output stream
    dos = new DataOutputStream(fos);
    // for each byte in the buffer
    intArr.map(function (item) {
    dos.writeInt(item);
    })
    // force bytes to the underlying stream
    dos.flush();
}catch(e){
    // if any I/O error occurs
    log(e)
}finally{
    // releases all system resources from the streams
    if(is!=null)
      is.close();
    if(dos!=null)
      is.close();
    if(dis!=null)
      dis.close();
    if(fos!=null)
      fos.close();
}

}
