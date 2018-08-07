//构造链表
// problem.txt文件内容：
// 027380010010006735000000029305692080000000000060174503640000000951800070080065340
// 000000520080400000030009000501000600200700000000300000600010000000000704000000030
// 800000000003600000070090200050007000000045700000100030001000068008500010090000400

// 运行后生成的solution.txt内容
// 027380010010006735000000029305692080000000000060174503640000000951800070080065340
// 5 2 7 3 8 9 4 1 6
// 8 1 9 4 2 6 7 3 5
// 4 3 6 7 5 1 8 2 9
// 3 7 5 6 9 2 1 8 4
// 1 9 4 5 3 8 2 6 7
// 2 6 8 1 7 4 5 9 3
// 6 4 3 2 1 7 9 5 8
// 9 5 1 8 4 3 6 7 2
// 7 8 2 9 6 5 3 4 1

// 矩阵 324列   9行
// vector<vector<int> > sudoku2matrix(string &problem)//将数独转换为01矩阵
// {
//     vector<vector<int> > matrix;
//     for (int ix = 0; ix < 81; ++ix)
//     {
//         int val = problem[ix] - '0';
//         vector<int> current_row(324,0);
//         if (val != 0)
//         {
//             current_row[ix] = 1; //有数字
//             current_row[81 + ix/9*9 + val -1] = 1; //行
//             current_row[162 + ix%9*9 +val -1] = 1; //列
//             current_row[243 + (ix/9/3*3+ix%9/3)*9 +val -1] = 1; //九宫格
//             matrix.push_back(current_row);
//             continue;
//         }
//         for (int jx = 0; jx < 9; ++jx)
//         {
//             vector<int> current_row2(324,0);
//             current_row2[ix] = 1;
//             current_row2[81 + ix/9*9 + jx] = 1;
//             current_row2[162 + ix%9*9 +jx] = 1;
//             current_row2[243 + (ix/9/3*3+ix%9/3)*9 +jx] = 1;
//             matrix.push_back(current_row2);
//         }
//     }
//     return matrix;
// }



Array.dim = function(dimension, initial){
  var a = [],i;
  for(i = 0;i < dimension;i += 1){
      a[i] = initial;
  }
  return a;
};

function createRow(dimension, initial){
  var myArray = Array.dim(dimension, initial);
  return myArray
}

function sudoku2matrix(problem)//将数独转换为01矩阵
{
    matrix=[]
    for (ix = 0; ix < 81; ix++)
    {
        //提取字符串中的数字,并转换为数字类型
        val=problem.charAt(ix)
        val=parseInt(val)
        current_row=createRow(324,0);
        if (val != 0)
        {
            current_row[ix] = 1; //有数字
            current_row[81 + ix/9*9 + val -1] = 1; //行
            current_row[162 + ix%9*9 +val -1] = 1; //列
            current_row[243 + (ix/9/3*3+ix%9/3)*9 +val -1] = 1; //九宫格
            matrix.push(current_row);
            log('第',ix,"个数字\n","矩阵=\n",matrix)

            continue;
        }
        for (jx = 0; jx < 9; ix++)
        {
            current_row2=createRow(324,0);
            current_row2[ix] = 1;
            current_row2[81 + ix/9*9 + jx] = 1;
            current_row2[162 + ix%9*9 +jx] = 1;
            current_row2[243 + (ix/9/3*3+ix%9/3)*9 +jx] = 1;
            matrix.push(current_row2);
            log('第',ix,"个数字\n","矩阵=\n",matrix)

        }
    }
    log('第',ix,"个数字\n","矩阵=\n",matrix)
    return matrix;
}


problem='027380010010006735000000029305692080000000000060174503640000000951800070080065340'

matrix=sudoku2matrix(problem)

log(matrix)
