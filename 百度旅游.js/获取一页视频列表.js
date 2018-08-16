auto()
// path="/sdcard/data/data/response1534406818623.txt"
function 获取一页视频列表(path){
  var contentJson=files.read(path)
  var obj = eval('(' + contentJson + ')');
  var 视频信息Arr=[]
  var 一页视频列表=null
  var pn=null
  if(obj && obj.hasOwnProperty('data') && obj.data.list && obj.data.list.length>0){
   pn=obj.data.pn



    一页视频列表=obj.data.list
    for(let i=0;i<一页视频列表.length;i++){
      var 视频id=一页视频列表[i].noteVideo.note_id
      var 视频pv=一页视频列表[i].noteVideo.pv
      var 视频title=一页视频列表[i].noteVideo.content
      var 视频信息={
        "视频id":视频id,
        "视频pv":视频pv,
        "视频title":视频title

      }
      if(视频pv<2000){
        // log("视频信息=",视频信息)

        视频信息Arr.push(视频信息)
      }
    }
    // log("视频信息Arr=",视频信息Arr)
  }
  return {"pn":pn,"视频id列表":视频信息Arr}
}

var circle = {};

circle.获取一页视频列表 = 获取一页视频列表

module.exports = circle;
