import array
a = array.array('i' , []) 
n = int(input("Enter number of elements : "))

#The idea of binary search is to use the information that the array is sorted 
#and reduce the time complexity to O(Log n). 

for i in range(n):
      x = int(input("Enter next element"))
      a.append(x)

elem = int(input("Enter element to be searched"))
lb = 0 
ub = len(a)

while lb<ub:
      mid = (lb+ub)//2
      print(mid)

      if elem==a[mid]:
            print("Element found at" , mid)
            break
      elif elem<a[mid]:
            ub = mid - 1
      else:
            lb = mid + 1


# To comment multiple lines in python we use 'ctrl' '+'  '/' 