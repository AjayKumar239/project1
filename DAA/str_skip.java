import java.util.*;

class str_skip{
    public static void main(String args[]) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter a string");
        String a=sc.next();
        System.out.println("enter a substring:");
        String b=sc.next();

        int m=a.length();
        int n=b.length();
      int f1=0;
      int count=0;  // to calculate no. of occurences..
        for(int i=0;i<=m-n;i++){
            int flag=0;
                if(a.charAt(i)==b.charAt(0)){
                  int k=i;
                  int skipper=1;
                for(int j=0;j<n;j++){
                 skipper+=1;
                    if(b.charAt(j)!=a.charAt((k))){  //for skip by 1 occurences..use(b.charAat(i)!=a.charAt((j*2)+i))
                                                        //TO SKIP BY 1 ITERAT, 2 ITERAT,3 ITERAT....(USE..  k+=(j+1+i))/.....
                         flag=1;
                        break;
                    }
                    k+=skipper;

                }
                if(flag==0){
                    System.out.println("yes, its matched");
                    f1=1;
                    break;
                    // count++; //to get know no. of occurences.
                }


              
                }
    



        }
         if(f1==0)
         System.out.println("not matched");
       // System.out.println("no.of occurencess"+count);

      
    }
}