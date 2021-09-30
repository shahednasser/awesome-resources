import java.math.*;
import java.util.Scanner;

public class Question {
      public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int N = sc.nextInt() ;

            if(N%2!=0){
                  System.out.println("Weird");
            }else{
                  if(2<=N && N<=5){
                        System.out.println("Not Weird");
                  }else if(6<=N && N<=20){
                        System.out.println("Weird");
                  }
                  else if(N>20){
                        System.out.println("Not Weird");
                  }
            }
      }
      
}
