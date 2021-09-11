# Heap

```python
"""
Heaps (priority queues)
"""
# the maximum number of items that can be stored in the heap
CAPACITY = 10

"""
*** Max Heap ***
----------------
"""


# define the heap class
class Heap(object):

    def __init__(self):
        # create array with as many slots as the CAPACITY
        self.heap = [0] * CAPACITY
        # track the size of the heap (the number of items in the heap)
        self.heap_size = 0

    # insertion takes O(1) running time BUT we have to make sure that hte
    # heap properties are not violated (it takes O(logN) because of the
    # fixUp() method)
    def insert(self, item):
        # if the heap is at CAPACITY already we can not insert any more items
        if CAPACITY == self.heap_size:
            return

        # insert the item at the index of the size of the heap (the last
        # empty spot) and then increment the counter
        self.heap[self.heap_size] = item
        self.heap_size += 1

        # after insert check to see if the heap properties were violated and
        # if so fix them
        self.fix_up(self.heap_size - 1)

    # we consider the last item and check whether swaps are needed or not
    # running time O(logN)
    def fix_up(self, index):

        # get the parent index of the given node in the heap
        parent_index = (index - 1) // 2

        # while the index > 0 means until we consider all the items "above"
        # the one we inserted we have to swap the node with the parent if the
        # heap property is violated
        # this is a MAX HEAP: largest items are in the higher layers (max
        # item == root node)
        if index > 0 and self.heap[index] > self.heap[parent_index]:
            self.swap(index, parent_index)
            # run the check again after the swap on the parent
            self.fix_up(parent_index)

    # Get max, return the root node.  Because this is a max heap the root is
    # the max item.  Because this is an array it takes O(1) time
    # this is the peek() method
    def get_max(self):
        return self.heap[0]

    # Get poll, returns the max item and also REMOVES the item from the heap
    # note: we just dont care about that item anymore but because we have an
    # array with fixed size we aren't able to get rid of it completely
    # O(logN) running time
    def poll(self):

        max = self.get_max()

        # first swap the first item with the last item
        self.swap(0, self.heap_size - 1)
        # then decrement the heap size ( excludes the last item from the heap
        # going forward thus 'removing it')
        self.heap_size = self.heap_size - 1

        # nex check if the heap properties have been violated and if so fix
        # them ( fix down is similar to fix up but works from the root down )
        self.fix_down(0)

        # finally return the max item removed
        return max

    # fix down, we have a given item in the heap and we consider all the
    # items below and check whether the heap properties are violated or not
    def fix_down(self, index):

        # every node has 2 children so in the array the node i has left child
        # with index *i+1 and right child with index 2*i+2
        index_left = 2 * index + 1
        index_right = 2 * index + 2
        # this is a max heap so the parent is always greater than the children
        index_largest = index

        # if the left child is greater than the parent: largest is the left node
        if index_left < self.heap_size and self.heap[index_left] > self.heap[
            index]:
            index_largest = index_left

        # figure out if the left child or right child is the greater one
        # first check if the given index is valid ( not larger than the heap
        # size)
        # if the right child is greater than the left child: largest is the
        # right node
        if index_right < self.heap_size and self.heap[index_right] > \
                self.heap[index_largest]:
            index_largest = index_right

        # we don't want to swap items with themselves
        if index != index_largest:
            self.swap(index, index_largest)
            # recursively check down the tree for any other heap violations
            # and fix them as needed
            self.fix_down(index_largest)

    # we have N items and we want to sort them with a heap
    # every poll operation takes O(logN) time because of the fix down
    # method thats why the overall running time is O(NlogN) for heapsort
    def heap_sort(self):

        # we decrease the size of hte heap in the poll method so we have to
        # store it
        size = self.heap_size

        for i in range(0, size):
            max = self.poll()
            print(max)

    # swap two items with (index1, index2) in the heap array
    def swap(self, index1, index2):
        self.heap[index2], self.heap[index1] = self.heap[index1], self.heap[index2]

heap = Heap()
heap.insert(10)
heap.insert(8)
heap.insert(12)
heap.insert(20)
heap.insert(-2)
heap.insert(0)
heap.insert(1)
heap.insert(321)

heap.heap_sort()

```

```python
# Implements a min-heap. For max-heap, simply reverse all comparison orders.
#
# Note on alternate subroutine namings (used in some textbooks):
#     - _bubble_up = siftdown
#     - _bubble_down = siftup

def _bubble_up(heap, i):
    while i > 0:
        parent_i = (i - 1) // 2
        if heap[i] < heap[parent_i]:
            heap[i], heap[parent_i] = heap[parent_i], heap[i]
            i = parent_i
            continue
        break

def _bubble_down(heap, i):
    startpos = i
    newitem = heap[i]
    left_i = 2 * i + 1
    while left_i < len(heap):
        # Pick the smaller of the L and R children
        right_i = left_i + 1
        if right_i < len(heap) and not heap[left_i] < heap[right_i]:
            child_i = right_i
        else:
            child_i = left_i

        # Break if heap invariant satisfied
        if heap[i] < heap[child_i]:
            break
        
        # Move the smaller child up.
        heap[i], heap[child_i] = heap[child_i], heap[i]
        i = child_i
        left_i = 2 * i + 1

def heapify(lst):
    for i in reversed(range(len(lst) // 2)):
        _bubble_down(lst, i)

def heappush(heap, item):
    heap.append(item)
    _bubble_up(heap, len(heap) - 1)

def heappop(heap):
    if len(heap) == 1:
        return heap.pop()
    min_value = heap[0]
    heap[0] = heap[-1]
    del heap[-1]
    _bubble_down(heap, 0)
    return min_value



# Example usage
heap = [3, 2, 1, 0]
heapify(heap)
print('Heap(0, 1, 2, 3):', heap)
heappush(heap, 4)
heappush(heap, 7)
heappush(heap, 6)
heappush(heap, 5)
print('Heap(0, 1, 2, 3, 4, 5, 6, 7):', heap)

sorted_list = [heappop(heap) for _ in range(8)]
print('Heap-sorted list:', sorted_list)

# Large test case, for randomized tests
import random

# Heapify 0 ~ 99
heap = list(range(100))
random.shuffle(heap)
heapify(heap)

# Push 100 ~ 199 in random order
new_elems = list(range(100, 200))
random.shuffle(new_elems)
for elem in new_elems:
    heappush(heap, elem)

sorted_list = [heappop(heap) for _ in range(200)]
print(sorted_list == sorted(sorted_list))

```



{% page-ref page="array/" %}

{% page-ref page="tree/binary-search-tree/" %}

{% page-ref page="untitled-4/" %}

{% page-ref page="array/extra-array.md" %}

{% page-ref page="stack/" %}

{% page-ref page="tree/binary-tree/" %}

{% page-ref page="untitled-6/" %}

{% page-ref page="untitled-5/" %}

{% page-ref page="untitled-2/" %}

{% page-ref page="untitled-3/" %}

{% page-ref page="queue/queue-sandbox.md" %}

{% page-ref page="untitled-5/" %}

{% page-ref page="untitled-4/double-linked-list.md" %}

{% page-ref page="untitled-1/" %}

{% page-ref page="untitled/" %}

{% page-ref page="heap.md" %}



