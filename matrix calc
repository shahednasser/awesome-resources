
#include<stdio.h>
#include <iostream.h>
#include<conio.h>

int main()
{    clrscr();
     int arr1[20][20],arr2[10][10];
     int result[20][20];
     int m,n;
     int i,j;
     // prompts the user to enter the rows and columns of the matrix
     cout<<" Enter the number of rows (m) : ";
     cin>>m;
     cout<<" Enter the number of columns (n) : ";
     cin>>n;
     cout<<" \n Enter the elements of the 1st matrix \n ";

     for (i=0; i<m; i++)
     {
          for (j=0; j<n; j++)
          {
               cout<<" Element "<<i<<" : "<<j<<" --> ";
               cin>>arr1[i][j];
          }
     }

     cout<<"\n Enter the elements of the 2nd matrix : \n ";
     for (i=0; i<m; i++)
     {
          for (j=0; j<n; j++)
          {
               cout<<" Element "<<i<<" : "<<j<<" --> ";
               cin>>arr2[i][j];
          }
     }

     //------------ display matrics -----------------------

     cout<<"\n 1st matrix \n ";
     for (i=0; i<m; i++)
     {
          for (j=0; j<n; j++)
          {
               cout<<" "<<arr1[i][j];
          }
          cout<<"\n";
     }

     cout<<"\n 2nd matrix \n ";
     for (i=0; i<m; i++)
     {
          for (j=0; j<n;j++)
          {
               cout<<" "<<arr2[i][j];
          }
          cout<<"\n";
     }
    cout<<" \n Resultatn matrix \n";
    int k=0;
     // multiplies the two matrices together
     for(i=0;i< m;i++)
     {
          for(j=0;j< n;j++)
          {
               result[i][j] = 0;
          for(k=0;k< m;k++)
          {
               result[i][j] = result[i][j] + arr1[i][k] * arr2[k][j];
          }
          } // end of j sub loop
     } // end of i main loop

     // displays the resultant matrix

     for (i=0; i<m; i++)
     {
          for (j=0; j<n; j++)
          {
               cout<<result[i][j]<<"  ";
          }
          cout<<"\n \n";
     }
     return 0;

} // end of main
