A simple approach is to do a linear search, i.e  

Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
If x matches with an element, return the index.
If x doesn’t match with any of elements, return -1.

<h1>Time Complexity</h1>

The time complexity of the above algorithm is O(n). 

Linear search is rarely used practically because other search algorithms such as the binary search algorithm and hash tables allow significantly faster-searching comparison to Linear search.

Improve Linear Search Worst-Case Complexity

<h2>if element Found at last  O(n) to O(1)</h2>
<h2>if element Not found O(n) to O(n/2)</h2>