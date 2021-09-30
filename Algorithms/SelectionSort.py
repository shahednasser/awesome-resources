import array

def SelectionSort(a):
      n = len(a)
      #i will go through len(a) - 1 array size -1(till)

      for i in range(n):
            min_index = i
            for j in range(i+1 , n):
                  if(a[j] < a[min_index]):
                        #we will take new min index
                        min_index = j

            # Swap the found minimum element with
            # the first element  
            a[i] , a[min_index] = a[min_index] , a[i]


a = array.array('i' , [])
n = int(input("Enter lenght of array  : "))

for i in range(n):
      c = int(input("Enter the number : "))
      a.append(c)

# Time Complexity: O(n2) as there are two nested loops.

SelectionSort(a)
print(list(a))
