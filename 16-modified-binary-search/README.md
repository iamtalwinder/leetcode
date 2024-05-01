1. Continue the binary search it will stop at next greater element

2. 
a) For far left change right pointer, when there is match
b) For far right change left pointer, when there is match

3. For infinite sorted array, first we need to low and high bound, the binary search

```python
def find_position(arr, target):
    # Step 1: Find the range
    low, high = 0, 1
    while arr[high] < target:
        low = high
        high = high * 2
    
    # Step 2: Binary search within the range
    return binary_search(arr, target, low, high)
```

