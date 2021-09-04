# Binary Search

```python
# Uses python3
import random
"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""

def binary_search(input_array, value):
    test_array = input_array
    current_index = len(input_array)//2
    input_index = current_index

    found_value = test_array[current_index]
    while(len(test_array)>1 and found_value!=value):
        if(found_value<value):
            test_array = test_array[current_index:]
            current_index = len(test_array)//2
            input_index += current_index
            found_value = input_array[input_index]
        else:
            test_array = test_array[0:current_index]
            current_index = len(test_array)//2
            # divmod needed to be used instead of round() since the behavior
            # for .5 changed from rounding up to rounding down in Python 3
            q, r = divmod(len(test_array), 2.0)
            input_index = int(input_index - q - r)
            found_value = input_array[input_index]
    else:
        if(found_value==value):
            return input_index

    return -1

def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

# compare naive algorithm linear search vs. binary search results
def stress_test(n, m):
    test_cond = True
    while(test_cond):
        a = []
        for i in range(n):
            a.append(random.randint(0, 10**9))
        a.sort()
        for i in range(m):
            b = random.randint(0, n-1)
            print([linear_search(a, a[b]), binary_search(a, a[b])])
            # stops if the searches do not give identical answers
            if(linear_search(a, a[b]) != binary_search(a, a[b])):
                test_cond = False
                print('broke here!')
                break



stress_test(100, 100000)



#test_list = [1,3,9,11,15,19,29, 35, 36, 37]
#test_val1 = 25
#test_val2 = 15
#print(binary_search(test_list, test_val1))
#print(binary_search(test_list, test_val2))
#print(binary_search(test_list, 11))

```

```python
# given array a and need to find value x
# left and right correspond to initial indices of array a bounding the search
# segment of array a above and below, respectively
def binary_search_recursive(a, x, left=0, right=(len(a)-1)):
"""Recursive Binary Search algorithm implemented using list indexing"""
    index = (left+right)//2
    if a[index]==x:
        return index
    elif x>(a[right]) or x<a[left]: # first case where x is not in the list!
        return -1
    elif left==right: # case where search is complete and no value x not found
        return -1
    elif left==right-1: # case where there are only two numbers left, check both!
        left = right
        return binary_search_recursive(a, x, left, right)
    elif a[index]<x:
        left = index
        return binary_search_recursive(a, x, left, right)
    elif a[index]>x:
        right = index
        return binary_search_recursive(a, x, left, right)

```

