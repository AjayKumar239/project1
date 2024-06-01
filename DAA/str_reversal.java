import java.util.Scanner;

public class StringReversal {
    private String original;
    private String reversed;

    public StringReversal(String original) {
        this.original = original;
        this.reversed = reverseString();
    }

    private String reverseString() {
        StringBuilder reversed = new StringBuilder();
        for (int i = original.length() - 1; i >= 0; i--) {
            reversed.append(original.charAt(i));
        }
        return reversed.toString();
    }

    public String getReversedString() {
        return reversed;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = sc.next();
        
        StringReversal stringReversal = new StringReversal(input);
        System.out.println("Reversed string: " + stringReversal.getReversedString());
    }
}
