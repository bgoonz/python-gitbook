# Graph DFS

```python
class Node(object):

    def __init__(self, name):
        self.name = name
        self.adjacencyList = []
        self.visited = False
        self.predecessor = None


class DepthFirstSearch(object):  # BFS -> queue + layer by layer algorithm   DFS -> stack + goes
    # as deep as possible into the tree !!!

    def dfs(self, node):

        node.visited = True
        print("%s " % node.name)

        for n in node.adjacencyList:
            if not n.visited:
                self.dfs(n)


node1 = Node("A")
node2 = Node("B")
node3 = Node("C")
node4 = Node("D")
node5 = Node("E")

node1.adjacencyList.append(node2)
node1.adjacencyList.append(node3)
node2.adjacencyList.append(node4)
node4.adjacencyList.append(node5)

dfs = DepthFirstSearch()
dfs.dfs(node1)

```

![](../../../.gitbook/assets/image%20%284%29.png)



```python
def graph_dfs(matrix):
    rows, cols = len(matrix), len(matrix[0])
    visited = set()
    directions = ((0, 1), (0, -1), (1, 0), (-1, 0))
    def dfs(i, j):
        if (i, j) in visited:
            return
        visited.add((i, j))
        # Traverse neighbors.
        for direction in directions:
            next_i, next_j = i + direction[0], j + direction[1]
            if 0 <= next_i < rows and 0 <= next_j < cols: # Check boundary.
                # Add any other checking here ^
                dfs(next_i, next_j)

    for i in range(rows):
        for j in range(cols):
            dfs(i, j)

graph_dfs([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
])

```

