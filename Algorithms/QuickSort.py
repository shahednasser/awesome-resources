# This follows the same principle as Divide and conquer as in Merge Sort
import array

def partition(start , end , a):
      #Initializing pivot index to start
      pivot_index = start
      pivot = a[pivot_index]

      while start < end :

            while start<len(a) and a[start]<=pivot : 
                  start+=1

            #decrement the end pointer till it 
            # finds an element less than pivot

            while a[end] > pivot : 
                  end-=1

            #if start and end have not crossed each other
            #swap the numbers on start and end

            if(start < end):
                  a[start] , a[end] = a[end] , a[start]

      # Swap pivot element with element on end pointer
      # This puts pivot on its correct sorted place

      a[end] , a[pivot_index] = a[pivot_index] , a[end]

      return end

def quick_sort(start , end , a):

      if(start < end):
            p = partition(start , end , a)
            quick_sort(start , p-1 , a)
            quick_sort(p+1 , end , a)

a = array.array('i' , [])

n = int(input("Enter lenght of array  : "))

for i in range(n):
      c = int(input("Enter the number : "))
      a.append(c)

quick_sort(0 , len(a)-1 , a)
print(list(a))






            


