
const  Sudoku="1234"
const  littleSudokuRows=4
const  littleSudokuCols=4
const  smallSudokuRows=2
const  smallSudokuCols=2



const  SudokuEndNum=parseInt(Sudoku.charAt(Sudoku.length-1))
console.log('SudokuEndNum=',SudokuEndNum)
// str.charAt(str.length-1)
// Math.sqrt( x )
const gridNumber=Math.pow(Sudoku.length,2)
console.log("gridNumber=",gridNumber)
//一个数组,长度是SudokuEndNum,每个元素也是一个数组,长度也是SudokuEndNum

//read a puzzle from the web page
function readAPuzzle(knownGrid){
  //数独中,已知的数字,未知的为空0,这是一维数组
  var arr = new Array();
  for(var i=0; i<gridNumber; i++){
      arr[i] = Number(knownGrid[i]);
  }
  //新建一个格子,全部为0,这是二维数组
  var grid = new Array();
  for(var i=0; i<littleSudokuRows; i++){
      grid[i] = new Array();
      for(var j=0; j<littleSudokuCols; j++){
          grid[i][j] = 0;
      }
  }

  for(var i=0; i<gridNumber; i++){
    grid[Math.floor(i/SudokuEndNum)][i%SudokuEndNum] = arr[i];
  }
  return grid
}

knownGrid='2301140202140023'
autojsGrid=readAPuzzle(knownGrid)
console.log("autojsGrid=",autojsGrid)
// autojsGrid= [ [ 2, 3, 0, 1 ], [ 1, 4, 0, 2 ], [ 0, 2, 1, 4 ], [ 0, 0, 2, 3 ] ]


freeCells=getFreeCellList(autojsGrid)
console.log("freeCells=",freeCells)
// freeCells= [ [ 0, 2 ], [ 1, 2 ], [ 2, 0 ], [ 3, 0 ], [ 3, 1 ] ]



if(search(autojsGrid)){
  console.log("数独答案=")
  logSudoku(autojsGrid)
}else{
  console.log('无解')
}

//输入答案
function inputAnswer(freeCells,resultSudoku){
  for(let i=0;i<freeCells.length;i++){
    let num=resultSudoku[freeCells[i][0]][freeCells[i][1]]
    inputNum(num,[[freeCells[i][0]],[freeCells[i][1]]])
  }
}

function inputNum(num,grid){
  clickGrid(grid)
  clickSmallSudoku(smallSudokuCoordinate)
  chooseNumClick(num)

}



function logSudoku(sudoku){
  for(let i=0;i<sudoku.length;i++){
    console.log(sudoku[i])
  }
}



//Obtain a list of free cells from the puzzle
//返回格子为空的坐标信息
function getFreeCellList(grid){
  var freeCellList = new Array();
  index = 0

  for(var i=0; i<littleSudokuRows; i++){
      for(var j=0; j<littleSudokuCols; j++){
          if(grid[i][j] == 0){
              freeCellList[index] = new Array(i,j);
              index++;
          }
      }
  }

  return freeCellList
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
      //将所有空值都填写为1
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
  for(var column=0; column<littleSudokuCols; column++){
      if((column != j) && (grid[i][column] == grid[i][j])){
          return false
      }
  }
  //列有效
  //Check whether grid[i][j] is valid at the j's column
  for(var row=0; row<littleSudokuRows; row++){
      if((row != i) && (grid[row][j] == grid[i][j])){
          return false
      }
  }
  //小九宫格有效

  //变异的九宫格,比如说6宫格
  //除以宫格的长度和高度,一开始就定义好的,

//遍历所有小九宫格
// const  littleSudokuRow=3
// const  littleSudokuCol=3
  //Check whether grid[i][j] is valid at the 3-by-3 box
  for(var row=Math.floor(i/smallSudokuRows)*smallSudokuRows; row < Math.floor(i/smallSudokuRows)*smallSudokuRows+smallSudokuRows; row++){
    for(var col=Math.floor(j/smallSudokuCols)*smallSudokuCols; col < Math.floor(j/smallSudokuCols)*smallSudokuCols+smallSudokuCols; col++){
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
