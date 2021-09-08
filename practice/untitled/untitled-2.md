# Searching



{% tabs %}
{% tab title="First Tab" %}
```python
from collections import deque
from collections.abc import Sequence


def bfs_search_grid(grid: Sequence[Sequence[int]], start: tuple[int, int], goal: tuple[int, int]) -> bool:
    """On a grid of 0s and 1s, find if start is connected to goal via a path of 1s."""
    rows = range(len(grid))
    cols = range(len(grid[0]))
    seen = {start}
    to_visit = deque([start])
    while to_visit:
        r, c = to_visit.popleft()
        if (r, c) == goal:
            return True
        adjacent = {(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)}
        for next_node in adjacent - seen:
            r1, c1 = next_node
            # Using these range objects is a concise alternative to 0 <= r1 < len(graph) and 0 <= c1 < len(graph[0])
            if r1 in rows and c1 in cols and grid[r1][c1]:
                seen.add(next_node)
                to_visit.append(next_node)
    return False

```
{% endtab %}

{% tab title="bisect\_search.py" %}
```python
from collections.abc import Callable


def bisect_search(predicate: Callable[[int], bool], low: int, high: int) -> int:
    """Find the lowest int between low and high where predicate(int) is True."""
    while low < high:
        mid = low + (high - low) // 2  # Avoids integer overflow compared to mid = (low + high) // 2
        if predicate(mid):
            high = mid
        else:
            low = mid + 1
    return low

```
{% endtab %}

{% tab title="Binary Search" %}
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
    current_index = len(input_array) // 2
    input_index = current_index

    found_value = test_array[current_index]
    while len(test_array) > 1 and found_value != value:
        if found_value < value:
            test_array = test_array[current_index:]
            current_index = len(test_array) // 2
            input_index += current_index
            found_value = input_array[input_index]
        else:
            test_array = test_array[0:current_index]
            current_index = len(test_array) // 2
            # divmod needed to be used instead of round() since the behavior
            # for .5 changed from rounding up to rounding down in Python 3
            q, r = divmod(len(test_array), 2.0)
            input_index = int(input_index - q - r)
            found_value = input_array[input_index]
    else:
        if found_value == value:
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
    while test_cond:
        a = []
        for i in range(n):
            a.append(random.randint(0, 10 ** 9))
        a.sort()
        for i in range(m):
            b = random.randint(0, n - 1)
            print([linear_search(a, a[b]), binary_search(a, a[b])])
            # stops if the searches do not give identical answers
            if linear_search(a, a[b]) != binary_search(a, a[b]):
                test_cond = False
                print("broke here!")
                break


stress_test(100, 100000)


# test_list = [1,3,9,11,15,19,29, 35, 36, 37]
# test_val1 = 25
# test_val2 = 15
# print(binary_search(test_list, test_val1))
# print(binary_search(test_list, test_val2))
# print(binary_search(test_list, 11))

```
{% endtab %}

{% tab title="BST.py" %}
```python
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        # create a node for the new value
        new_node = BSTNode(value)
        # compare the node value to the self value
        if (
            new_node.value <= self.value
        ):  # less then or equal to will all go to the left if any duplicats too
            # we add to the left
            if self.left is None:
                self.left = new_node
            else:
                self.left.insert(value)
        else:
            # we add to the right
            # if space exists
            if self.right is None:
                self.right = new_node
            else:
                self.right.insert(value)

    def search(self, target):
        if target == self.value:
            return True
        # check if value is less than self.value

        if target < self.value:
            # look to the left
            if self.left is None:
                return False
            return self.left.search(target)

        else:
            # look to the right
            if self.right is None:
                return False
            return self.right.search(target)

    def find_minimum_value(self):
        # if self.left is None: #recursive here
        #     return self.value
        # min_value =  self.left.find_minimum_value()
        # return min_value
        curr_node = self
        while curr_node.left is not None:
            curr_node = curr_node.left
        return curr_node.value


root = BSTNode(10)
# root.left = BSTNode(6)
# root.right = BSTNode(12)
root.insert(6)
root.insert(7)
root.insert(12)
root.insert(5)
root.insert(14)
root.insert(8)

print(f"minimum value in tree is: {root.find_minimum_value()}")

print(f"does 8 exist? {root.search(8)}")
print(f"does 8 exist? {root.search(7)}")
print(f"does 8 exist? {root.search(15)}")

```
{% endtab %}
{% endtabs %}

```python
from collections import deque
from collections.abc import Callable, Iterable, Mapping

from src.typehints import Node


def bfs_search_dict(graph: Mapping[Node, Iterable[Node]], start: Node, predicate: Callable[[Node], bool]) -> bool:
    """Find the closest node to start that matches the predicate using breadth first search."""
    visited = set()
    to_visit = deque([start])
    while to_visit:
        node = to_visit.popleft()
        if node in visited:
            continue
        visited.add(node)
        if predicate(node):
            return True
        to_visit += graph[node]
    return False

```

