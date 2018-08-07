const  Sudoku="123456"
const  littleSudokuRow=3
const  littleSudokuCol=2
const  SudokuEndNum=parseInt(Sudoku.charAt(Sudoku.length-1))
// str.charAt(str.length-1)
// Math.sqrt( x )
const gridNumber=Math.pow(Sudoku.length,2)
console.log("gridNumber=",gridNumber)
//一个数组,长度是SudokuEndNum,每个元素也是一个数组,长度也是SudokuEndNum


//clear all the input
function clc(){
  for(var i=0; i<gridNumber; i++){
      document.getElementsByTagName("input")[i].value = "";
      document.getElementsByTagName("input")[i].style.color = 'blue';
  }
  document.body.style.backgroundImage = "url(mountain.jpg)";
}

//press "show answer" button and show answer then
function get_answer(){
  var bool = check_input();
  if(bool){
      var grid = readAPuzzle();
      if(!isValidGrid(grid)){
        // grid="5,4,0,6,1,3,0,0,0,0,3,0,4,2,5,0,0,0,4,5,1,0,6,2,0,0,0,2,6,0,1,5,4,0,0,0"
          alert("Invalid input, please try again!");
      }
      else{
          if(search(grid)){
              output_ans();
              document.body.style.backgroundImage = "url(sky.jpg)";
          }
          else{
              alert("Found no solution!");
          }
      }
  }
}

//check if the input are valid
function check_input(){
  var arr = new Array();

  for(var i=0; i<gridNumber; i++){
      arr[i] = Number(document.getElementsByTagName("input")[i].value);
      if(isNaN(arr[i])){
          alert('Input should be any number between 1 and SudokuEndNum !');
          return false
      }
  }

  if(arr.every(function isZero(x){return x== 0})){
      alert('There is no input!');
      return false
  }

  return true
}

//read a puzzle from the web page
function readAPuzzle(){
  var arr = new Array();
  total=0
  for(var i=0; i<81; i++){
  // for(var i=0; i<gridNumber; i++){
    //余数大于等于SudokuEndNum,就不要收集了


      console.log("i=",i,"i除以9的余数=",i % 9)
      if(i % 9 >=SudokuEndNum){

        continue
      }
      arr[total] = Number(document.getElementsByTagName("input")[i].value);
      console.log("i=",i,"数字=",arr[total])

      total++;
      if(total==gridNumber){

        console.log("total==gridNumber=",total)
        break
      }
  }
  // arr=[]
  var grid = new Array();
  for(var i=0; i<SudokuEndNum; i++){
      grid[i] = new Array();
      for(var j=0; j<SudokuEndNum; j++){
          grid[i][j] = 0;
      }
  }


  for(var i=0; i<gridNumber; i++){
      grid[Math.floor(i/SudokuEndNum)][i%SudokuEndNum] = arr[i];
  }
  alert(grid)

  console.log("grid=",grid)
  return grid
}

//Obtain a list of free cells from the puzzle
function getFreeCellList(grid){
  var freeCellList = new Array();
  index = 0

  for(var i=0; i<SudokuEndNum; i++){
      for(var j=0; j<SudokuEndNum; j++){
          if(grid[i][j] == 0){
              freeCellList[index] = new Array(i,j);
              index++;
          }
      }
  }

  return freeCellList
}

//Check whether grid[i][j] is valid in the grid
//怎样检测在行列九宫格是否有效
function isValid(i,j,grid){
  // var i = freeCellList[k][0];
  // var j = freeCellList[k][1];
  //行有效
  //Check whether grid[i][j] is valid at the i's row

  //遍历一列,
  //column != j除去他自身(自己和自己不能比较)
  //指定的格子的值,在他所在列,有相同的数字
  //返回false,这个数字无效
  for(var column=0; column<SudokuEndNum; column++){
      if((column != j) && (grid[i][column] == grid[i][j])){
          return false
      }
  }
  //列有效
  //Check whether grid[i][j] is valid at the j's column
  for(var row=0; row<SudokuEndNum; row++){
      if((row != i) && (grid[row][j] == grid[i][j])){
          return false
      }
  }
  //小九宫格有效

  //变异的九宫格,比如说6宫格
  //除以宫格的长度和高度,一开始就定义好的,
// const  littleSudokuRow=3
// const  littleSudokuCol=3
  //Check whether grid[i][j] is valid at the 3-by-3 box
  for(var row=Math.floor(i/littleSudokuRow)*littleSudokuRow; row < Math.floor(i/littleSudokuRow)*littleSudokuRow+littleSudokuRow; row++){
      for(var col=Math.floor(j/littleSudokuCol)*littleSudokuCol; col < Math.floor(j/littleSudokuCol)*littleSudokuCol+littleSudokuCol; col++){
          if((row != i) && (col != j) && (grid[row][col] == grid[i][j])){
              return false
          }
      }
  }
  // for(var row=Math.floor(i/3)*3; row < Math.floor(i/3)*3+3; row++){
  //     for(var col=Math.floor(j/3)*3; col < Math.floor(j/3)*3+3; col++){
  //         if((row != i) && (col != j) && (grid[row][col] == grid[i][j])){
  //             return false
  //         }
  //     }
  // }

  return true //The current value at grid[i][j] is valid
}

//Check whether the fixed cells are valid in the grid
function isValidGrid(grid){
  // 5,4,0,6,1,3,0,0,0,0,3,0,4,2,5,0,0,0,4,5,1,0,6,2,0,0,0,2,6,0,1,5,4,0,0,0
  console.log("174行 isValidGrid(grid)  grid=",grid)
  for(var i=0; i<SudokuEndNum; i++){
      for(var j=0; j<SudokuEndNum; j++){
          if(grid[i][j] < 0){
            console.log("grid[i][j] < 0")
          }
          if(grid[i][j] > SudokuEndNum){
            console.log("(grid[i][j] > SudokuEndNum)")
          }
          if(grid[i][j] != 0){
            console.log("isValid(i,j,grid)",i,j,grid)
            console.log("((grid[i][j] != 0)")
          }
          if(isValid(i,j,grid)){
          }


          //如果这个数字小于0     或者大于9                       或者同时满足这两个条件  (     这个数字不等于0             &&                   )
          if((grid[i][j] < 0) || (grid[i][j] > SudokuEndNum) || ((grid[i][j] != 0) && (! isValid(i,j,grid)))){
              return false
          }
      }
  }
  return true
}


//Search for a solution
function search(grid){
  // freeCellList是一个一维数组,元素是一个数组,[i,j]
  var freeCellList = getFreeCellList(grid);
  var numberOfFreeCells = freeCellList.length;
  if(numberOfFreeCells == 0){
      return true
  }

  var k = 0;  //Start from the first free cell

  while(true){
      var i = freeCellList[k][0];
      var j = freeCellList[k][1];
      if(grid[i][j] == 0){
          grid[i][j] = 1;
      }

      if(isValid(i,j,grid)){
          if(k+1 == numberOfFreeCells){
              //no more free cells
              return true  //A solution is found
          }
          else{
              //Move to the next free cell
              k++;
          }
      }
      else{
          if(grid[i][j] < SudokuEndNum){
              //Fill the free cell with the next possible value
              grid[i][j]++;
          }

          else{
              //grid[i][j] is SudokuEndNum,backtrack
              while(grid[i][j] == SudokuEndNum){
                  if(k == 0){
                      return false  //No possible value
                  }
                  grid[i][j] = 0;  //Reset to free cell
                  k--;  //Backtrack to the preceding free cell
                  i = freeCellList[k][0];
                  j = freeCellList[k][1];

              }
              //Fill the free cell with the next possible value
              //search continues from this free cell at k
              grid[i][j]++;
          }
      }
  }

  return true  //A solution is found
}


//output the answer on the web page
function output_ans(){
  var grid = readAPuzzle();
  var grid_original = readAPuzzle();
  
  if(search(grid)){
      for(var i=0; i<gridNumber; i++){
          if(grid[Math.floor(i/SudokuEndNum)][i%SudokuEndNum] != grid_original[Math.floor(i/SudokuEndNum)][i%SudokuEndNum]){
              i2=getI(i)

              document.getElementsByTagName("input")[i2].value = grid[Math.floor(i/SudokuEndNum)][i%SudokuEndNum];
              document.getElementsByTagName("input")[i2].style.color = 'black';
          }
      }
  }

}


function getI(i){
  if(i % 9 >= 6){
    i=i+1
    return getI(i)
  }else{
    return i
  }
}
