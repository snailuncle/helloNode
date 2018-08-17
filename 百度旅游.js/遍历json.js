myJson = {"name":"caibaojian", "password":"1111"};

for(var p in myJson){//遍历json对象的每个key/value对,p为key

  log(p + " : " + myJson[p]);

}
