import java.util.Arrays;
import java.util.Scanner;

public class Main{
    class DLX {
        int maxn = 20010;
        //定义左右上下四个方向的整数数组
        int L[] = new int[maxn], R[] = new int[maxn], D[] = new int[maxn],
                U[] = new int[maxn];
        //
        int Row[] = new int[maxn], C[] = new int[maxn], S[] = new int[maxn];
        // 元素x所在行列 每列元素个数
        int m, id, rowid;
        int ans[] = new int[maxn], cnt;

        void init(int m) {
            this.m = m;
            mul = 0;
            for (int i = 0; i <= m; i++) {
                D[i] = U[i] = i;
                S[i] = 0;
                L[i] = i - 1;
                R[i] = i + 1;
            }
            L[0] = m;
            R[m] = 0;
            id = m + 1;
            cnt = rowid = 0;
            mul = 0;
        }

        void insert(int arr[], int len) {
            for (int i = 0; i < len; i++, id++) {
                int x = arr[i];
                C[id] = x;
                Row[id] = rowid;
                S[x]++;
                D[id] = x;
                U[id] = U[x];
                D[U[x]] = id;
                U[x] = id;
                if (i == 0)
                    L[id] = R[id] = id;
                else {
                    L[id] = id - 1;
                    R[id] = id - i;
                    L[id - i] = id;
                    R[id - 1] = id;
                }
            }
            rowid++;
        }

        void remove(int c) {
            L[R[c]] = L[c];
            R[L[c]] = R[c];
            for (int i = D[c]; i != c; i = D[i])
                for (int j = R[i]; j != i; j = R[j]) {
                    S[C[j]]--;
                    U[D[j]] = U[j];
                    D[U[j]] = D[j];
                }
        }

        void resume(int c) {
            for (int i = U[c]; i != c; i = U[i])
                for (int j = L[i]; j != i; j = L[j]) {
                    S[C[j]]++;
                    U[D[j]] = j;
                    D[U[j]] = j;
                }
            L[R[c]] = c;
            R[L[c]] = c;
        }

        int mul = 0;

        boolean dance() {
            if (R[0] == 0) {
                if (++mul > 1)
                    return true;
                for (int i = 0; i < cnt; i++)
                    res[p[ans[i]].i][p[ans[i]].j] = p[ans[i]].val;
                return false;
            }
            int c = R[0];
            for (int i = R[0]; i != 0; i = R[i])
                if (S[i] < S[c])
                    c = i;
            remove(c);
            for (int i = D[c]; i != c; i = D[i]) {
                ans[cnt++] = Row[i];
                for (int j = R[i]; j != i; j = R[j])
                    remove(C[j]);
                if (dance())
                    return true;
                for (int j = L[i]; j != i; j = L[j])
                    resume(C[j]);
                cnt--;
            }
            resume(c);
            return false;
        }

    }

    class plan {
        int i, j, val;

        plan(int i, int j, int v) {
            this.j = j;
            this.i = i;
            val = v;
        }
    }

    int map[][] = new int[20][20], res[][] = new int[20][20], m,
            hash[] = new int[255];
    char rehash[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
            'B', 'C', 'D', 'E', 'F', 'G' };
    boolean flag[] = new boolean[20];
    plan p[] = new plan[5010];
    DLX dlx = new DLX();
    Scanner scan = new Scanner(System.in);

    void build(int i, int j) {
        if (map[i][j] != 0) {
            Arrays.fill(flag, false);
            flag[map[i][j]] = true;
            return;
        }
        Arrays.fill(flag, true);
        for (int k = 1; k <= m * m; k++)
            flag[map[k][j]] = flag[map[i][k]] = false;
        i = (i - 1) / m * m + 1;
        j = (j - 1) / m * m + 1;
        for (int x = 0; x <m; x++)
            for (int y = 0; y <m; y++)
                flag[map[i + x][j + y]] = false;
    }

    int grid(int i, int j) {
        return (i - 1) / m * m + (j - 1) / m + 1;
    }

    void init() {
        int cnt = 0;
        for (int i = '0'; i <= '9'; i++)
            hash[i] = cnt++;
        for (int i = 'A'; i <= 'G'; i++)
            hash[i] = cnt++;
    }

    void work() {
        int M = m * m;
        dlx.init(M * M * 4);
        int arr[] = new int[4];
        int idx = 0;
        for (int i = 1; i <= M; i++)
            for (int j = 1; j <= M; j++) {
                build(i, j);
                for (int k = 1; k <= M; k++)
                    if (flag[k]) {
                        arr[0] = (i - 1) * M + k;// 行
                        arr[1] = M * M + (j - 1) * M + k;// 列
                        arr[2] = M * M * 2 + (grid(i, j) - 1) * M + k;// 块
                        arr[3] = M * M * 3 + (i - 1) * M + j;// 格子
                        dlx.insert(arr, 4);
                        p[idx++] = new plan(i, j, k);
                    }
            }
        dlx.dance();
    }

    void run() {
        init();
        while (scan.hasNext()) {
            m = scan.nextInt();
            for (int i = 1; i <= m * m; i++) {
                String s = scan.next();
                for (int j = 1; j <= m * m; j++)
                    map[i][j] = hash[s.charAt(j - 1)];
            }
            work();
            if (dlx.mul == 2)
                System.out.println("Multiple Solutions");
            if (dlx.mul == 0)
                System.out.println("No Solution");
            if (dlx.mul == 1)
                if (minimal()) {
                    work();
                    print();
                } else
                    System.out.println("Not Minimal");
        }
    }

    boolean minimal() {
        for (int i = 1; i <= m * m; i++)
            for (int j = 1; j <= m * m; j++)
                if (map[i][j] != 0) {
                    int temp = map[i][j];
                    map[i][j] = 0;
                    work();
                    map[i][j] = temp;
                    if (dlx.mul == 1){

                        return false;
                    }
                }
        return true;
    }

    void print() {
        for (int i = 1; i <= m * m; i++) {
            for (int j = 1; j <= m * m; j++)
                System.out.print(rehash[res[i][j]]);
            System.out.println();
        }
    }

    public static void main(String[] args) {
        new Main().run();
    }
}
