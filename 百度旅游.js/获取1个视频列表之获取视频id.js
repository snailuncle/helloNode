auto()
const 文件大小 = require('./文件大小.js');
const 获取每页视频列表 = require('./获取一页视频列表.js');


视频文件列表=获取视频集的文件列表()
视频参数列表=[]
for(let i=0;i<视频文件列表.length;i++){
  var 一页视频列表=获取每页视频列表.获取一页视频列表(视频文件列表[i])
  视频参数列表.push(一页视频列表)
  // log("一页视频列表=",一页视频列表)
  // exit()
}


log视频列表(视频参数列表)

function log视频列表(视频参数列表){


  for(let i=0;i<视频参数列表.length;i++){
    log(视频参数列表[i])
  }

}

























function 获取视频集的文件列表(){
  var dir = "/sdcard/data/data/";
  var jsFiles = files.listDir(dir, function(name){
      return name.endsWith(".txt") &&
      files.isFile(files.join(dir, name)) &&
      文件大小.文件是否大于2kb(files.join(dir, name))
      ;
  });
  for(let i=0;i<jsFiles.length;i++){
    jsFiles[i]=files.join(dir, jsFiles[i])
  }
  log(jsFiles);
  return jsFiles
}











// var circle = {};

// circle.获取视频集的文件列表 = 获取视频集的文件列表

// module.exports = circle;


一页视频列表备份= [ { feedType: 2,
  noteVideo:
   { note_id: 'x7eeb32370200',
     note_type: 2,
     source: [Object],
     uid: '979491155',
     be_liked: 749,
     share: 0,
     comment: 37,
     title: '',
     create_time: 1533174076,
     update_time: 1533174076,
     status: 3,
     bitpack: 0,
     location: '',
     content: '天气这么热，我给大家演奏一首凉凉吧',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 13620,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x5feb66620200',
     note_type: 2,
     source: [Object],
     uid: '979491155',
     be_liked: 835,
     share: 0,
     comment: 34,
     title: '',
     create_time: 1533128753,
     update_time: 1533128753,
     status: 0,
     bitpack: 0,
     location: '',
     content: '哎呦哎呦，其实我一点都不害怕，哈哈',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2032,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x5ae865370200',
     note_type: 2,
     source: [Object],
     uid: '1467037895',
     be_liked: 661,
     share: 5,
     comment: 41,
     title: '',
     create_time: 1532682505,
     update_time: 1532682505,
     status: 3,
     bitpack: 0,
     location: '北京中华民族园',
     content: '苗族的花鼓舞好难呀！',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 3554,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x43eb33340200',
     note_type: 2,
     source: [Object],
     uid: '979491155',
     be_liked: 858,
     share: 1,
     comment: 37,
     title: '',
     create_time: 1533124855,
     update_time: 1533124855,
     status: 0,
     bitpack: 0,
     location: '',
     content: '大家看到彩虹了吗？是不是美美哒💕',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2375,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x00e339660200',
     note_type: 2,
     source: [Object],
     uid: '2795554066',
     be_liked: 777,
     share: 1,
     comment: 55,
     title: '',
     create_time: 1532238641,
     update_time: 1532238641,
     status: 0,
     bitpack: 0,
     location: '',
     content: '让时间慢下来，让心情偶遇小确幸',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2012,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'xc1e036300200',
     note_type: 2,
     source: [Object],
     uid: '979491155',
     be_liked: 536,
     share: 1,
     comment: 33,
     title: '',
     create_time: 1531382560,
     update_time: 1531382560,
     status: 0,
     bitpack: 0,
     location: '',
     content: '#花厨#芬芳扑鼻清新醉，何须苦思少年郎？',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 3245,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x18eb61350200',
     note_type: 2,
     source: [Object],
     uid: '979491155',
     be_liked: 821,
     share: 0,
     comment: 38,
     title: '',
     create_time: 1533006072,
     update_time: 1533006073,
     status: 0,
     bitpack: 0,
     location: '',
     content: '园博园是集中国园林艺术之大成的集中展现，你有空也来逛一逛吧😊',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2019,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x69eb66350200',
     note_type: 2,
     source: [Object],
     uid: '2405317220',
     be_liked: 784,
     share: 0,
     comment: 52,
     title: '',
     create_time: 1533129805,
     update_time: 1533129805,
     status: 0,
     bitpack: 0,
     location: '',
     content: '#红邮筒#这是一个有格调的餐厅，我在这里等你',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2022,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x66ec36610200',
     note_type: 2,
     source: [Object],
     uid: '3237363216',
     be_liked: 831,
     share: 0,
     comment: 52,
     title: '',
     create_time: 1533233744,
     update_time: 1533233744,
     status: 0,
     bitpack: 0,
     location: '',
     content: '从故宫收藏的钟表，直接的反映了西方文化在中国宫廷的影响力。',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2072,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null },
{ feedType: 2,
  noteVideo:
   { note_id: 'x67ec63640200',
     note_type: 2,
     source: [Object],
     uid: '3237363216',
     be_liked: 829,
     share: 0,
     comment: 54,
     title: '',
     create_time: 1533234582,
     update_time: 1533234582,
     status: 0,
     bitpack: 0,
     location: '',
     content: '辛苦了一天终于开饭啦…服务还是那么的完美',
     ext: [Object],
     is_excellent: 0,
     user: [Object],
     self_like: 1,
     is_self: 0,
     relation_r: 1,
     pv: 2238,
     funInfo: [Object],
     rank: '',
     distance: -1,
     focusUser: 0 },
  notePic: null,
  fun: null } ]
