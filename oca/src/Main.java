public class Main {
    public static void main(String[] args) {
        int a = 1;

        a = 2;
        System.out.println(a);

        {
            a = 3;
            int b = 0;
            b++;
            System.out.println(a);
            System.out.println(b);
            {
                b++;
                a++;
                System.out.println(a);
                System.out.println(b);
            }
        }


    }
}