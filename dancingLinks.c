
#define head 100
int U[N],D[N],L[N],R[N];
int C[N],H[N],ans[N];//C[N]表示N的列标，H[N]表示N的行标，ans[]用来储存结果
bool dance(int k)
{
     int c = R[head];
     if(c==head) {
           Output();//Output the solution
           return true;
     }
     remove(c);
     for(int i=D[c]; i!=c; i=D[i])
     {
           ans[k] = H[i];
           for(int j=R[i]; j!=i; j=R[j]) remove(C[j]);
           if(dance(k+1)) return true;
           for(int j=L[i]; j!=i; j=L[j]) resume(C[j]);
     }
     resume(c);
     return false;
}

void remove(int c)
{
     L[R[c]] = L[c];
     R[L[c]] = R[c];
     for(int i=D[c]; i!=c; i=D[i]) {
           for(int j=R[i]; j!=i; j=R[j]) {
                U[D[j]] = U[j];
                D[U[j]] = D[j];
           }
     }
}

void resume(int c)
{
     L[R[c]] = c;
     R[L[c]] = c;
     for(int i=U[c]; i!=c; i=U[i]) {
           for(int j=R[i]; j!=i; j=R[j]) {
                 U[D[j]] = j;
                 D[U[j]] = j;
           }
     }
}
