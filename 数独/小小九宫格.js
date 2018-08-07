for(var row=Math.floor(i/smallSudokuRows)*smallSudokuRows; row < Math.floor(i/smallSudokuRows)*smallSudokuRows+smallSudokuRows; row++){
  for(var col=Math.floor(j/smallSudokuCols)*smallSudokuCols; col < Math.floor(j/smallSudokuCols)*smallSudokuCols+smallSudokuCols; col++){
      if((row != i) && (col != j) && (grid[row][col] == grid[i][j])){
          return false
      }
  }
}
