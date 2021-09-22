Stack Part 3
============

#### Table of Contents <span id="table-of-contents"></span>

-   [Stack: Introduction](https://www.section.io/engineering-education/stack-data-structure-python/#stack:-introduction)
-   [Uses of Stacks](https://www.section.io/engineering-education/stack-data-structure-python/#uses-of-stacks)
-   [Implementing Stacks](https://www.section.io/engineering-education/stack-data-structure-python/#implementing-stacks)
-   [Practice Stacks](https://www.section.io/engineering-education/stack-data-structure-python/#practice-stacks)
-   [Conclusion](https://www.section.io/engineering-education/stack-data-structure-python/#conclusion)

#### Stack: Introduction <span id="stack-introduction"></span>

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th><img src="https://www.section.io/engineering-education/stack-data-structure-python/stack-books.jpg" alt="Stack, Books" /></th><th>A great analogy we can use is stacking a pile of books. We always keep a new book on top and remove the topmost book. Stacks are similar to queues in that they are linear collections of items, but they differ in the order in which they are accessed. Stacks are used in a variety of areas from Operating System Software, in Compilers and Language Parsing, and to implement other complex Data Structures like Trees and Graphs.</th></tr></thead><tbody></tbody></table>

![Push Pop](https://www.section.io/engineering-education/stack-data-structure-python/pushpop.png) `push` in a stack is putting an item on top of the stack.

`pop` in a stack is taking out the top item in the stack.

#### Uses of Stacks <span id="uses-of-stacks"></span>

Stacks are used extensively in a lot of places.

**Compilers and Parsers –** Expression evaluation is done by stacks by postfix or prefix using stacks in compilers.

**Activation Records –** An activation record is data that keeps track of the procedure activities during the runtime of a program.

-   When the function is called, an activation record is created for it and keeps track of parameters and information like local variables, return address, static and dynamic links, and the return value.
-   This activation record is the fundamental part of programming languages and is **implemented** using a **stack**.
-   **Web Browsers –** Web Browsers use a stack to keep track of URLs that you have visited previously. When you visit a new page, it is added to the stack and when you hit the back button, the stack is popped and the previous URL is accessed.
-   **To implement other Data Structures –** Stacks are used to implement searches in Graphs and Trees, which are other complex data structures.

#### Implementing Stacks <span id="implementing-stacks"></span>

**Stack Methods**

There are various functions that are associated with a stack. They are,

**stack.isEmpty()**

-   The `stack.isEmpty()` method returns `True` if the stack is empty. Else, returns `False`
-   Time Complexity - O(1)

**stack.length()**

-   The `stack.length()` method returns the length of the stack.
-   Time Complexity - O(1)

**stack.top()**

-   The `stack.top()` method returns a pointer/reference to the top element in the stack.
-   Time Complexity - O(1)

**stack.push(x)**

-   The `stack.push()` method inserts the element, `x` to the top of the stack.
-   Time Complexity - O(1)

**stack.pop()**

-   The `stack.pop()` method removes the top element of the stack and returns it.
-   Time Complexity - O(1)

#### Stack Implementations <span id="stack-implementations"></span>

In Python, we can implement the stack by various methods. We are going to dive into two of the methods - the **common method** and the **efficient method**.

#### Stack using a List <span id="stack-using-a-list"></span>

We use the list methods `append` and `pop` to implement a Stack.

    class Stack:

        def __init__(self):
            """
            Initializing Stack.
            """
            self.stack = []

        def isEmpty(self) -> bool:
            return True if len(self.stack) == 0 else False

        def length(self) -> int:
            return len(self.stack)

        def top(self) -> int:
            return self.stack[-1]

        def push(self, x: int) -> None:
            self.x = x
            self.stack.append(x)

        def pop(self) -> None:
            self.stack.pop()

#### Stack using collection.Deque <span id="stack-using-collectiondeque"></span>

Python `collections` are container classes that are used for data collection storage. They are highly optimized, are really fast, and have lots of methods built-in.

`Deque` is one such python collection that is used for inserting and removing items. We can use it to create a faster implementation of a stack.

    from collections import deque
    class Stack:

        def __init__(self):
            """
            Initializing Stack.
            """
            self.stack = deque()

        def isEmpty(self) -> bool:
            return True if len(self.stack) == 0 else False

        def length(self) -> int:
            return len(self.stack)

        def top(self) -> int:
            return self.stack[-1]

        def push(self, x: int) -> None:
            self.x = x
            self.stack.append(x)

        def pop(self) -> None:
            self.stack.pop()

#### Practice Stacks <span id="practice-stacks"></span>

Once you are done with understanding the stack and the basic implementation, practice the following problems and problem-sets in order to get a strong grasp on stacks.

-   Infix to Postfix - [GeeksForGeeks](https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/)
-   Next Greater Element - [GeeksForGeeks](https://www.geeksforgeeks.org/next-greater-element/)
-   Postfix to Prefix - [GeeksForGeeks](https://www.geeksforgeeks.org/postfix-prefix-conversion/)
-   Reverse a String using Stack - [GeeksForGeeks](https://www.geeksforgeeks.org/stack-set-3-reverse-string-using-stack/)
-   Mini Parser - [LeetCode](https://leetcode.com/problems/mini-parser/)
-   Simplify Path - [LeetCode](https://leetcode.com/problems/simplify-path/)
-   More Stack Problems - [LeetCode](https://leetcode.com/tag/stack/)
-   Stack Problem Set - [HackerRank](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks)

#### Conclusion <span id="conclusion"></span>

We have learned the implementation, importance, and application of stacks. This is one of the most important data structures to know and it is extensively asked in the computer science industry. It is important to have strong knowledge on this topic as it would give you an edge.
