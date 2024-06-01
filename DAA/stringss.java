import java.util.*;

public class stringss
{
    int m,n;
            String a,b;
         stringss(int m,int n,String a,String b)
         {
             this.n=n;
            this.m=m;
            this.a=a;
            this.b=b;
         }

         public void str()
         {
            int f1=0;

         

       

        for( int i=0 ; i< m-n ; i++)
        {
           
            if(a.charAt(i) == b.charAt(0))
            // if(a.charAt(i)==b.charAt(0))
            {
                int f=0;
                for(int j=0;j<n;j++)
                {
                    if(b.charAt(j) != a.charAt(i+j))
                    {
                        f=1;
                        break;
                    }
                 }
                 if(f == 0)
                 {
                     
                     System.out.println("String is matched ");
                     break;
                     
                    }
                   else if(f == 1)
                    {
                        System.out.println("String is not matched ");
                        break;
                    }
                } 
        }
     }

     public void str2()
     {
        // Scanner sc = new Scanner(System.in);
        // String c = sc.String(n);
        StringBuilder c = new StringBuilder();
        for(int i=n;i>=0;i--)
        {
             c.append(a.charAt(i));
        }
        int f1 =0;
        for(int i=0;i< m-n ;i++)
        {
            if(a.charAt(i) == c.charAt(0))
            {
                int f=0;
                for(int j=0;j<n;j++)
                {
                    if(b.charAt(i) != a.charAt(i+j))
                    {
                        f = 1;
                        break;
                    }
                }
                if(f == 0)
                {
                    System.out.println("String is found ");
                }
                else if(f == 1)
                {
                    System.out.println("String is not found ");
                }
            }
        }
     }
    

        
            public static void main(String[] args)
            {
                Scanner sc = new Scanner(System.in);
                System.out.println("Enter Str :");
                String  a = sc.next();
                System.out.println("Enter sub Str :");
                String  b = sc.next();
        
                int m = a.length();
                int n =  b.length();
                stringss obj = new stringss(m,n,a,b);
                obj.str();
                obj.str2();

            } 
        }  
    