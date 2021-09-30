#this is the most easiest algorith which jst involves swapping of elements
import array 
def BubbleSort(a):
      n = len(a)

      for i in range(n):
            for j in range(i+1 , n):
                  if(a[i]>a[j]):
                        a[i] ,  a[j] = a[j] , a[i]

a = array.array('i' , [])

n = int(input("Enter lenght of array  : "))

for i in range(n):
      c = int(input("Enter the number : "))
      a.append(c)

BubbleSort(a)
print(list(a))