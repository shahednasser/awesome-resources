# Searching an element in a list/array in python
# can be simply done using \'in\' operator
# Example:
# if x in arr:
#   print arr.index(x)
  
# If you want to implement Linear Search in python
  
# Linearly search x in arr[]
# If x is present then return its location
# else return -1
  
def search(arr, x):
  
    for i in range(len(arr)):
  
        if arr[i] == x:
            return i
  
    return -1