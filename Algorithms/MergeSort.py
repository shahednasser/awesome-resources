import array

# Merge Sort
def merge_sort(arr):
      if len(arr) > 1:
            mid = len(arr)//2

            #Dividing the array elements
            L = arr[:mid]
            R = arr[mid:]

            #sorting the first half
            merge_sort(L)

            #sorting the second half
            merge_sort(R)

            i = j = k = 0 

            while i < len(L) and j < len(R):
                  if L[i] < R[j]:
                        arr[k]=L[i]
                        i+=1
                  else:
                        arr[k]= R[j]
                        j+=1
                  k+=1
            
            #checking for leftovers

            while i < len(L):
                  arr[k] = L[i]
                  i+=1
                  k+=1

            while j < len(R):
                  arr[k] = R[j]
                  j+=1
                  k+=1

a = array.array('i' , [])

n = int(input("Enter lenght of array  : "))

for i in range(n):
      c = int(input("Enter the number : "))
      a.append(c)

merge_sort(a)
print(list(a))


