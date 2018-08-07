#include <time.h>
#include <iostream>
#include <limits.h>
#include <vector>
#include <fstream>
using namespace std;

// 代码地址
// https://blog.csdn.net/bl0ss0m/article/details/17918705



// dlx原理
// https://blog.csdn.net/u014800748/article/details/47438683

// 精确覆盖问题的定义：给定一个由0-1组成的矩阵，是否能找到一个行的集合，使得集合中每一列都恰好包含一个1
// Dancing Links中的每个元素有6个分量

// 分别：Left指向左边的元素、Right指向右边的元素、Up指向上边的元素、Down指向下边的元素、Col指向列标元素、Row指示当前元素所在的行

// Dancing Links还要准备一些辅助元素（为什么需要这些辅助元素？没有太多的道理，大师认为这能解决问题，实际上是解决了问题）

// Ans（）：Ans数组，在求解的过程中保留当前的答案，以供最后输出答案用。

// Head元素：求解的辅助元素，在求解的过程中，当判断出Head.Right=Head（也可以是Head.Left=Head）时，求解结束，输出答案。Head元素只有两个分量有用。其余的分量对求解没啥用

// C元素：辅助元素，称列标元素，每列有一个列标元素。本文开始的题目的列标元素分别是C1、C2、C3、C4、C5、C6、C7。每一列的元素的Col分量都指向所在列的列标元素。列标元素的Col分量指向自己（也可以是没有）。在初始化的状态下，Head.Right=C1、C1.Right=C2、……、C7.Right=Head、Head.Left=C7等等。列标元素的分量Row=0，表示是处在第0行。


// 从以上的14步来看，可以把Dancing Links的求解过程表述如下



// 1、Dancing函数的入口

// 2、判断Head.Right=Head？，若是，输出答案，返回True，退出函数。

// 3、获得Head.Right的元素C

// 4、标示元素C

// 5、获得元素C所在列的一个元素

// 6、标示该元素同行的其余元素所在的列首元素

// 7、获得一个简化的问题，递归调用Daning函数，若返回的True，则返回True，退出函数。

// 8、若返回的是False，则回标该元素同行的其余元素所在的列首元素，回标的顺序和之前标示的顺序相反

// 9、获得元素C所在列的下一个元素，若有，跳转到步骤6

// 10、若没有，回标元素C，返回False，退出函数。







// 之前的文章的表述，为了表述简单，采用面向对象的思路，说每个元素有6个分量，分别是Left、Right、Up、Down、Col、Row分量。

// 但在实际的编码中，用数组也能实现相同的作用。例如：用Left（）表示所有元素的Left分量，Left（1）表示元素1的Left分量

// 在前文中，元素分为Head元素、列首元素（C1、C2等）、普通元素。在编码中，三种元素统一成一种元素。如上题，0表示Head元素，1表示元素C1、2表示元素C2、……、7表示元素C7，从8开始表示普通元素。这是统一后，编码的简便性。利用数组的下标来表示元素，宛若指针一般。



































struct Node{
    Node *up, *down, *left, *right, *colRoot, *rowRoot;//上下左右四个指针以及指向行列对象的指针
    int Num;//行对象特有,记录行数
    int Size;//列对象特有,记录该列元素数
    Node(int i = -1 ): Num(i),Size(0) {};//构造函数
};

class DLX{
public:
    DLX(vector<vector<int> > &matrix, int m, int n);
    ~DLX() { delete Head;};//析构有点难写
    void init();
    void link(vector<vector<int> > &matrix);
    void cover(Node *cRoot);
    void recover(Node *cRoot);
    bool Search(int k = 0);
    vector<int> getResult() const { return result;}
    int getUpdates() const { return _updates;}
private:
    Node *Head;
    vector<int> result;//结果存放在这里
    int _row, _col, _updates;//记录行列数,更新次数
};

DLX::DLX(vector<vector<int> > &matrix, int m, int n)
    :_row(m),_col(n),_updates(0)
{
    Head = new Node;
    Head->up = Head;
    Head->down = Head;
    Head->right = Head;
    Head->left = Head;
    init();
    link(matrix);
}

void DLX::init()
{
    Node *newNode;
    for (int ix = 0; ix < _col; ++ix)//表头位置向后插入,构造列对象
    {
        newNode = new Node;
        newNode->up = newNode;
        newNode->down = newNode;
        newNode->right = Head->right;
        newNode->left = Head;
        newNode->right->left = newNode;
        Head->right = newNode;
    }
    for (int ix = 0; ix < _row; ++ix)//表头位置向下插入,构造行对象
    {
        newNode = new Node(_row-ix);//注意序号是_row-ix
        newNode->down = Head->down;
        newNode->up = Head;
        newNode->down->up = newNode;
        Head->down = newNode;
    }
}

void DLX::link(vector<vector<int> > &matrix)
{
    Node *current_row, *current_col, *newNode, *current;//当前行对象,当前列对象,新节点,当前节点
    current_row = Head;
    for (int row = 0; row < _row; ++row)
    {
        current_row = current_row->down;
        current_col = Head;
        for (int col = 0; col < _col; ++col)
        {
            current_col = current_col->right;

            if (matrix[row][col] == 0)//矩阵上为0的位置不设置节点
                continue;

            newNode = new Node;

            newNode->colRoot = current_col;
            newNode->rowRoot = current_row;//设置当前节点对应的行列对象

            newNode->down = current_col;
            newNode->up = current_col->up;
            newNode->up->down = newNode;
            current_col->up = newNode;//链接当前节点到列双向链尾端

            if (current_row->Size == 0)//行双向链不应该把行对象包含进来
            {
                current_row->right = newNode;
                newNode->left = newNode;
                newNode->right = newNode;
                current_row->Size++;
            }
            current = current_row->right;//设置当前节点(即行对象右的节点)
            newNode->left = current->left;
            newNode->right = current;
            newNode->left->right = newNode;
            current->left = newNode;//链接当前节点到行双向链尾端

            current_col->Size++;
        }
    }
}

void DLX::cover(Node *cRoot)//覆盖列
{
    ++_updates;
    cRoot->left->right = cRoot->right;
    cRoot->right->left = cRoot->left;//删除该列对象
    Node *i, *j;
    i = cRoot->down;
    while (i != cRoot)
    {
        j = i->right;
        while (j != i)
        {
            j->down->up = j->up;
            j->up->down = j->down;
            j->colRoot->Size--;
            j = j->right;
        }
        i = i->down;
    }
}

void DLX::recover(Node *cRoot)//整个算法的精髓!!
{
    Node *i, *j;
    i = cRoot->up;
    while (i != cRoot)
    {
        j = i->left;
        while (j != i)
        {
            j->colRoot->Size++;
            j->down->up = j;
            j->up->down = j;
            j = j->left;
        }
        i = i->up;
    }
    cRoot->right->left = cRoot;
    cRoot->left->right = cRoot;
}

bool DLX::Search(int k)
{
    if (Head->right == Head)//表空,则成功找到一组行的集合
        return true;

    Node *cRoot, *c;
    int minSize = INT_MAX;
    for(c = Head->right; c != Head; c = c->right)//根据启发条件选择列对象
    {
        if (c->Size < minSize)
        {
            minSize = c->Size;
            cRoot = c;
            if (minSize == 1)
                break;
            if (minSize == 0)//有一列为空,失败
                return false;
        }
    }
    cover(cRoot);

    Node *current_row,*current;
    for (current_row = cRoot->down; current_row != cRoot; current_row = current_row->down)
    {
        result.push_back(current_row->rowRoot->Num);//将该行加入result中
        for (current = current_row->right; current != current_row; current = current->right)
        {
            cover(current->colRoot);
        }
        if (Search(k+1))
            return true;
        for (current = current_row->left; current != current_row; current = current->left)
            recover(current->colRoot);
        result.pop_back();//发现该行不符合要求,还原result
    }
    recover(cRoot);
    return false;
}

vector<vector<int> > sudoku2matrix(string &problem)//将数独转换为01矩阵
{
    vector<vector<int> > matrix;
    for (int ix = 0; ix < 81; ++ix)
    {
        int val = problem[ix] - '0';
        vector<int> current_row(324,0);
        if (val != 0)
        {
            current_row[ix] = 1;
            current_row[81 + ix/9*9 + val -1] = 1;
            current_row[162 + ix%9*9 +val -1] = 1;
            current_row[243 + (ix/9/3*3+ix%9/3)*9 +val -1] = 1;
            matrix.push_back(current_row);
            continue;
        }
        for (int jx = 0; jx < 9; ++jx)
        {
            vector<int> current_row2(324,0);
            current_row2[ix] = 1;
            current_row2[81 + ix/9*9 + jx] = 1;
            current_row2[162 + ix%9*9 +jx] = 1;
            current_row2[243 + (ix/9/3*3+ix%9/3)*9 +jx] = 1;
            matrix.push_back(current_row2);
        }
    }
    return matrix;
}

vector<int> matrix2sudoku(vector<vector<int> > &matrix, vector<int> result)//将01矩阵翻译为数独
{
    vector<int> solution(81);
    for (int ix = 0; ix < 81; ++ix)
    {
        vector<int> current = matrix[result[ix]-1];
        int pos = 0, val = 0;
        for (int jx = 0; jx < 81; ++jx)
        {
            if (current[jx] == 1)
                break;
            ++pos;
        }
        for (int kx = 81; kx < 162; ++kx)
        {
            if (current[kx] == 1)
                break;
            ++val;
        }
        solution[pos] = val%9 + 1;
    }
    return solution;
}

void solve_sudoku(string &problem, ostream &os = cout)
{
// 构造01矩阵用时
    clock_t start_1 = clock();
    vector<vector<int> > matrix = sudoku2matrix(problem);
    clock_t end_1 = clock();
    float time_1=(float)(end_1-start_1)/CLOCKS_PER_SEC;
// 构造链表用时
    clock_t start_2 = clock();
    DLX sudoku(matrix,matrix.size(),324);
    clock_t end_2 = clock();
    float time_2=(float)(end_2-start_2)/CLOCKS_PER_SEC;
// Dancing用时
    clock_t start_3 = clock();
    if (!sudoku.Search())
    {
        os << "该数独无解!\n\n";
        return;
    }
    clock_t end_3 = clock();
    float time_3=(float)(end_3-start_3)/CLOCKS_PER_SEC;
// 翻译结果用时
    clock_t start_4 = clock();
    vector<int> solution = matrix2sudoku(matrix, sudoku.getResult());
    clock_t end_4 = clock();
    float time_4=(float)(end_4-start_4)/CLOCKS_PER_SEC;

    for (int ix = 0; ix < 81; ++ix)
        os << solution[ix] << ((ix+1)%9 ? '\0' : '\n');

    os << "构造01矩阵用时: " << time_1 << "s\n"
         << "构造链表用时: " << time_2 << "s\n"
         << "Dancing用时: " << time_3 << "s\n"
         << "Dancing更新次数: " << sudoku.getUpdates() << "次\n"
         << "翻译结果用时: " << time_4 << "s\n" << endl;
}

int main()
{
    string problem;
    ofstream outfile("solution.txt");
    ifstream infile("problem.txt");
    while (infile >> problem)
    {
        outfile << problem << endl;
        if (problem.size() != 81)
        {
            outfile << "数独不合法\n\n";
            continue;
        }
        solve_sudoku(problem, outfile);
    }
}




problem.txt文件内容：
027380010010006735000000029305692080000000000060174503640000000951800070080065340
000000520080400000030009000501000600200700000000300000600010000000000704000000030
800000000003600000070090200050007000000045700000100030001000068008500010090000400

运行后生成的solution.txt内容
027380010010006735000000029305692080000000000060174503640000000951800070080065340
5 2 7 3 8 9 4 1 6
8 1 9 4 2 6 7 3 5
4 3 6 7 5 1 8 2 9
3 7 5 6 9 2 1 8 4
1 9 4 5 3 8 2 6 7
2 6 8 1 7 4 5 9 3
6 4 3 2 1 7 9 5 8
9 5 1 8 4 3 6 7 2
7 8 2 9 6 5 3 4 1
构造01矩阵用时: 0.002s
构造链表用时: 0.002s
Dancing用时: 0s
Dancing更新次数: 324次
翻译结果用时: 0s

000000520080400000030009000501000600200700000000300000600010000000000704000000030
4 1 6 8 3 7 5 2 9
9 8 2 4 6 5 3 7 1
7 3 5 1 2 9 4 6 8
5 7 1 2 9 8 6 4 3
2 9 3 7 4 6 1 8 5
8 6 4 3 5 1 2 9 7
6 4 7 9 1 3 8 5 2
3 5 9 6 8 2 7 1 4
1 2 8 5 7 4 9 3 6
构造01矩阵用时: 0.002s
构造链表用时: 0.002s
Dancing用时: 0s
Dancing更新次数: 419次
翻译结果用时: 0s

800000000003600000070090200050007000000045700000100030001000068008500010090000400
8 1 2 7 5 3 6 4 9
9 4 3 6 8 2 1 7 5
6 7 5 4 9 1 2 8 3
1 5 4 2 3 7 8 9 6
3 6 9 8 4 5 7 2 1
2 8 7 1 6 9 5 3 4
5 2 1 9 7 4 3 6 8
4 3 8 5 2 6 9 1 7
7 9 6 3 1 8 4 5 2
构造01矩阵用时: 0.002s
构造链表用时: 0.002s
Dancing用时: 0.001s
Dancing更新次数: 8321次
翻译结果用时: 0s
