import array

# it is the most time taking sorting algo  , But performs best for small array which is already sorted

def insertionSort(a):
      for i in range(1 , len(a)):
            key = a[i]
            j = i-1
            while (key<a[j] and j>=0):
                  a[j+1]=a[j]
                  j-=1
            a[j+1]=key

a = array.array('i' , [])

n = int(input("Enter lenght of array  : "))

for i in range(n):
      c = int(input("Enter the number : "))
      a.append(c)


insertionSort(a)
print(list(a))

