---
description: >-
  A Binary Tree is a non-linear data structure that is used for searching and data organization. A binary tree is comprised of nodes. Each node being a data component, one a left child and the other the
---

# Binary Tree Explained

A Binary Tree is a non-linear data structure that is used for searching and data organization. A binary tree is comprised of nodes. Each node being a data component, one a left child and the other the right child. Let us dive into the concepts related to trees and implement them into the Python programming language.

For more background on the different types of data structures in Python, check out the following articles:

- [Introduction to Data Structures](https://www.section.io/data-structures-python-part-1/)
- [List](https://www.section.io/list-data-structure-python/)
- [Stack](https://www.section.io/stack-data-structure-python/)
- [Queue](https://www.section.io/queue-data-structure-python/)
- [Linked Lists](https://www.section.io/linked-list-data-structure-python/)

_Note: Prerequisites – Make sure you have basic Python knowledge before diving into this article. It also might be a good idea to check out some linear data structures. \(links are given above\)_

#### Table of Contents <a id="table-of-contents"></a>

- [Binary Trees: Introduction](https://www.section.io/engineering-education/binary-tree-data-structure-python/#binary-trees-introduction)
- [Applications of Binary Trees](https://www.section.io/engineering-education/binary-tree-data-structure-python/#applications-of-binary-trees)
- [Implementing a Binary Tree](https://www.section.io/engineering-education/binary-tree-data-structure-python/#implementing-a-binary-tree)
- [Practice Binary Trees](https://www.section.io/engineering-education/binary-tree-data-structure-python/#practice-binary-trees)
- [Conclusion](https://www.section.io/engineering-education/binary-tree-data-structure-python/#conclusion)

#### Binary Trees: Introduction <a id="binary-trees-introduction"></a>

![Binary Tree Diagram](https://www.section.io/engineering-education/binary-tree-data-structure-python/binarytree.png) _Figure: Binary Trees,_ [_Image Source_](https://www.studytonight.com/data-structures/introduction-to-binary-trees)

A binary tree **node** consists of the following components:

- Data
- Pointer to Left Child
- Pointer to Right Child

Below are some key terminologies related to a binary tree.

- **Node** – The most elementary unit of a binary tree.
- **Root** – The root of a binary is the topmost element. There is only one root in a binary tree.
- **Leaf** – The leaves of a binary tree are the nodes which have no children.
- **Level** – The level is the generation of the respective node. The root has level 0, the children of the root node is at level 1, the grandchildren of the root node is at level 2 and so on.
- **Parent** – The parent of a node is the node that is one level upward of the node.
- **Child** – The children of a node are the nodes that are one level downward of the node.

#### Applications of Binary Trees <a id="applications-of-binary-trees"></a>

A binary tree is a hierarchical data structure, a file system that is organized in the form of a tree. Trees can be used for efficient searching, when the elements are organized with some order. Some examples include:

- The HTML/XML [Document Object Model](https://www.section.io/document-object-model/) is organized in the form of a tree.
- Abstract Syntax Trees and Parse Trees are constructed by a compiler as a part of compilation.
- Trees are also used to efficiently index databases.

#### Implementing a Binary Tree <a id="implementing-a-binary-tree"></a>

**Initialize a Node Class**

Let us first define the Node class.

```python
# The Node Class defines the structure of a Node
class Node:
    # Initialize the attributes of Node
    def __init__(self, data):
        self.left = None # Left Child
        self.right = None # Right Child
        self.data = data # Node Data
```

Once we have defined the Node class, we can initialize our Binary Tree:

```python
class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

root = Node(10) # Instantiating the Tree
# Tree Structure
#        10
#      /    \
#     None   None

root.left = Node(34) # Setting the left child of the root to 34
root.right = Node(89) # Setting the right child of the root to 89

# Tree Structure
#          10
#        /    \
#       34      89
#     /    \  /    \
#  None  None None None
```

#### Traversals <a id="traversals"></a>

Since a binary tree is a non-linear data structure, there is more than one way to traverse through the tree data. Let’s look at the various types of traversals in a binary tree, including **inorder traversal**, **preorder traversal**, and **postorder traversal**.

**Inorder Traversal**

In an inorder traversal, the left child is visited first, followed by the parent node, then followed by the right child.

```python
def inorder(node):
    if node:
        # Recursively call inorder on the left subtree until it reaches a leaf node
        inorder(node.left)

        # Once we reach a leaf, we print the data
        print(node.data)

        # Now, since the left subtree and the root has been printed, call inorder on right subtree recursively until we reach a leaf node.
        inorder(node.right)

# For the tree,
#          10
#        /    \
#       34      89
#     /    \  /    \
#  20     45  56    54

# Inorder traversal: 20 34 45 10 56 89 54
```

**Preorder Traversal**

In a preorder traversal, the root node is visited first, followed by the left child, then the right child.

```python
def preorder(node):
    if node:
        # Print the value of the root node first
        print(node.data)

        # Recursively call preorder on the left subtree until we reach a leaf node.
        preorder(node.left)

        # Recursively call preorder on the right subtree until we reach a leaf node.
        preorder(node.right)

# For the tree,
#          10
#        /    \
#       34      89
#     /    \  /    \
#  20     45  56    54

# Preorder traversal: 10 34 20 45 89 56 54
```

**Postorder Traversal**

In a postorder traversal, the left child is visited first, followed by the right child, then the root node.

```python
def postorder(node):
    if node:
        # Recursively call postorder on the left subtree until we reach a leaf node.
        postorder(node.left)

        # Recursively call postorder on the right subtree until we reach a leaf node.
        postorder(node.right)

        # Print the value of the root node
        print(node.data)

# For the tree,
#          10
#        /    \
#       34      89
#     /    \  /    \
#  20     45  56    54

# Postorder traversal: 20 45 34 56 54 89 10
```

#### Practice Binary Trees <a id="practice-binary-trees"></a>

Once you have understood the core concepts of a binary tree, practice the problem sets given below to strengthen and test your knowledge on trees.

- Flatten Binary Tree to Linked List - [LeetCode](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
- Sum Root to Leaf Numbers - [LeetCode](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
- Symmetric Tree - [LeetCode](https://leetcode.com/problems/symmetric-tree/)
- Binary Trees - [Carnegie Mellon University](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html)
