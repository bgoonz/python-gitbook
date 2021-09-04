# Binary Tree

```python
# Implement a Binary Search Tree (BST) that can insert values and check if
# values are present

class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        if(self.root.left==None):
            if(self.root.value>new_val):
                self.root.left = Node(new_val)
        elif(self.root.right==None):
            if(self.root.value<new_val):
                self.root.right = Node(new_val)
        else:
            current = self.root
            while(current.left!=None or current.right!=None):
                if(current.value>new_val):
                    current = current.left
                else:
                    current = current.right

            if(current.left==None):
                current.left = Node(new_val)
            else:
                current.right = Node(new_val)

    def search(self, find_val):
        if(self.root.left==None and self.root.right==None and self.root.value!=find_val):
            return False
        else:
            current = self.root
            val_possible = True
            while(val_possible):
                if(current.value==find_val):
                        return True
                if(current.value<find_val):
                    current = current.right
                else:
                    current = current.left
                if(current==None):
                    return False
                if(current.value<find_val and (current.right==None or current.right>find_val)):
                    return False
                if(current.value>find_val and (current.left==None or current.left<find_val)):
                    return False

# Set up tree
tree = BST(4)

# Insert elements
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

# Check search
# Should be True
print tree.search(4)
# Should be False
print tree.search(6)

```

```python
class Solution(object):
    def topKFrequent(self, nums, k):
        number_frequency = {}
        frequency_list = {}
        for i in nums:
            if i not in number_frequency:
                number_frequency[i] = 1
            else:
                number_frequency[i] += 1
        for key, value in number_frequency.items():
            if value not in frequency_list:
                frequency_list[value] = [key]
            else:
                frequency_list[value].append(key)
        result = []
        for i in range(len(nums), 0, -1):
            if i in frequency_list:
                result.extend(frequency_list[i])
            if len(result) >= k:
                break
        return result


ob1 = Solution()
print(ob1.topKFrequent([1, 1, 1, 1, 2, 2, 3, 3, 3], 2))




```

## Balanced Binary Tree

## Balanced Binary Tree

Given a binary tree class that looks like this:

```javascript
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
```

write a function that checks to see if a given binary tree is perfectly balanced, meaning all leaf nodes are located at the same depth. Your function should return `true` if the tree is perfectly balanced and `false` otherwise.

Analyze the time and space complexity of your function.



JS Solution:

```javascript
/* 
  A recursive solution
  How would you solve this iteratively?
 */
const checkBalanced = (rootNode) => {
  // An empty tree is balanced by default
  if (!rootNode) return true;
  // recursive helper function to check the min depth of the tree
  const minDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  };
  // recursive helper function to check the max depth of the tree
  const maxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  };

  return maxDepth(rootNode) - minDepth(rootNode) === 0;
};

/* Some console.log tests */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const root = new BinaryTreeNode(5);
console.log(checkBalanced(root)); // should print true

root.insertLeft(10);
console.log(checkBalanced(root)); // should print false

root.insertRight(11);
console.log(checkBalanced(root)); // should print true;

```



```javascript
#  A recursive solution
#  How would you solve this iteratively?


def checkBalanced(rootNode):
    # An empty tree is balanced by default
    if rootNode == None:
        return True

    # recursive helper function to check the min depth of the tree
    def minDepth(node):
        if node == None:
            return 0
        return 1 + min(minDepth(node.left), minDepth(node.right))

    # recursive helper function to check the max depth of the tree
    def maxDepth(node):
        if node == None:
            return 0
        return 1 + max(maxDepth(node.left), maxDepth(node.right))

    return maxDepth(rootNode) - minDepth(rootNode) == 0


# Some console.log tests
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insertLeft(self, value):
        self.left = BinaryTreeNode(value)
        return self.left

    def insertRight(self, value):
        self.right = BinaryTreeNode(value)
        return self.right


root = BinaryTreeNode(5)
print(checkBalanced(root))  # should print True

root.insertLeft(10)
print(checkBalanced(root))  # should print False

root.insertRight(11)
print(checkBalanced(root))  # should print True

```

