import java.util.Scanner;

class rev {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter a String");
        String a = sc.next();
        System.out.println("enter a subsring");
        String str = sc.next();
        StringBuilder b = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            b.append(str.charAt(i));

        }

        int m = a.length();
        int n = b.length();
        int f1 = 0;
        for (int i = 0; i <= m - n; i++) {
            int flag = 0;
            if (a.charAt(i) == b.charAt(0)) {
                for (int j = 0; j < n; j++) {
                    if (b.charAt(j) != a.charAt(i + j)) {
                        flag = 1;
                        break;
                    }

                }
                if (flag == 0) {
                    System.out.println("yes, its found");
                    f1 = 1;
                    break;
                }

            }

        }
        if (f1 == 0)
            System.out.println("not found");

    }
}
