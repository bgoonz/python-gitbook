# D4



## Objective 01 - Understand logarithms and recall the common cases where they come up in technical interviews

### Overview <a id="overview"></a>

#### What is a logarithm? <a id="what-is-a-logarithm"></a>

Logarithms are a way of looking differently at exponentials. I know that this is a bit of a vague definition, so let's look at an example.

![2^5](https://i.upmath.me/svg/2%5E5)

What does the mathematical expression above _mean_? It's an abbreviation for the following expression:

![2 \* 2 \* 2 \* 2 \* 2](https://i.upmath.me/svg/2%20*%202%20*%202%20*%202%20*%202)

What we are looking at above is two different ways to express an object that doubles in size with each iteration.

Another way to think about `2^5 = 32` is that `2` is the "growth rate" and `5` is the number of times you went through the growth \(doubling\). `32` is the final result.

Let's look at a few more expressions:

![2^5 = 32](https://i.upmath.me/svg/2%5E5%20%3D%2032)

![2^0 = 1](https://i.upmath.me/svg/2%5E0%20%3D%201)

![2^{-1} = \frac{1}{2}](https://i.upmath.me/svg/2%5E%7B-1%7D%20%3D%20%5Cfrac%7B1%7D%7B2%7D)

Now, to begin looking at logarithms, let's rewrite the exponential expressions above in logarithmic form.

![log\_2 32 = 5](https://i.upmath.me/svg/log_2%2032%20%3D%205)

![log\_2 1 = 0](https://i.upmath.me/svg/log_2%201%20%3D%200)

![log\_2 \frac{1}{2} = 1](https://i.upmath.me/svg/log_2%20%5Cfrac%7B1%7D%7B2%7D%20%3D%201)

Notice how we have essentially just moved around different pieces of the expression.

For our first expression,

![2^5 = 32](https://i.upmath.me/svg/2%5E5%20%3D%2032)

`2` was the "growth rate", `5` was the "time" spent growing, and `32` was where we ended up. When we rewrite this logarithmically, we have

![log\_2 32 = 5](https://i.upmath.me/svg/log_2%2032%20%3D%205)

In this case, `2` still represents the "growth rate" and `32` still represents where we end up. The `5` also still represents the "time" spent growing.

So, the difference between when we would use a logarithm and when we use exponentiation depends on what factors we know ahead of time. If you know the growth rate and you know how long you are growing, you can use exponentiation \(`2^5`\) to figure out where you end up \(`32`\). However, if you know the growth rate and where you end up but do not know the time spent growing, you can use a logarithm \(`log_2 32`\) to figure that out.

Logarithms have an _inverse_ relationship with exponents, just like division and multiplication have an inverse relationship.

For example, if you know that you have one group of `5` items and you want to identify the total you would have if you had `4` of those groups instead of just one, you could express that with `5 * 4 = 20`. However, if you knew that you had a total of `20` items and you wanted to know how many groups of `5` you could make out your total, you could express that with `20 \ 5 = 4`.

### Follow Along <a id="follow-along"></a>

#### Why should I care? What does this have to do with programming and interview preparation? <a id="why-should-i-care-what-does-this-have-to-do-with-programming-and-interview-preparation"></a>

In computer science, you often ask questions like _"How many times must `n` be divided in half before we get to one?"_ or _"How many times will we halve this collection before the collection has only one item?"_ To answer these questions, **you can use logarithms!** Halving is like doubling, so we can say that `log_2 n` would give us the answer we're seeking.

You will see this come up when analyzing the time complexity of specific algorithms. Any algorithm that doubles or halves a number or collection on each iteration of a loop is likely to have `O(log n)` time complexity. You will see this come up specifically when we talk about binary search and its time complexity. You will also see this come up in specific sorting algorithms \(like merge sort\). In simple terms, merge sort divides a collection in half and then merges the sorted halves. The fact that the algorithm repeatedly _halves_ something is your clue that it includes a logarithm in its time complexity. One last place you're likely to see logarithms come up is with a perfect binary tree. One property of these binary trees is that the number of nodes _doubles_ at each level.

### Challenge <a id="challenge"></a>

1. Write a logarithmic expression that is identical to this exponential expression:

   ![2^n = 64](https://i.upmath.me/svg/2%5En%20%3D%2064)

2. Write an exponential expression that is identical to this logarithmic expression:

   ![log\_2 128 = n](https://i.upmath.me/svg/log_2%20128%20%3D%20n)

3. What keywords should you look out for that might alert you that logarithms are involved?

### Additional Resources <a id="additional-resources"></a>

* [https://www.mathsisfun.com/algebra/logarithms.html \(Links to an external site.\)](https://www.mathsisfun.com/algebra/logarithms.html)
* [https://www.interviewcake.com/article/python3/logarithms](https://www.interviewcake.com/article/java/logarithms)

![](../../.gitbook/assets/devider%20%284%29.png)

## Objective 02 - Write a linear search algorithm

### Overview <a id="overview"></a>

Imagine that I've chosen a random number from 1 to 20. Then, you must guess the number. One approach would be to start picking at 1 and increment your guess by 1 with each guess. If the computer randomly selected 20, then it would take you 20 guesses to get the correct answer. If the computer guessed 1, then you would have the right answer on your very first guess. On average, you will get the correct answer on the 10th or 11th guess.

If the collection we are searching through is random and unsorted, linear search is the most efficient way to search through it. Once we have a sorted list, then there are more efficient approaches to use.

### Follow Along <a id="follow-along"></a>

We want to write a simple program to conduct a linear search on a collection of data. Let's write a function that takes a list \(`arr`\) and an integer \(`target`\) as its input and returns the integer `idx` where the target is found. If the `target` does not exist in the `arr`, then the function should return `-1`.

```text
def linear_search(arr, target):
    # loop through each item in the input array
    for idx in range(len(arr)):
        # check if the item at the current index is equal to the target
        if arr[idx] == target:
            # return the current index as the match
            return idx
    # if we were able to loop through the entire array, the target is not present
    return -1
```

### Challenge <a id="challenge"></a>

{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-2-module-4-linear-search-2" %}



![](../../.gitbook/assets/devider%20%284%29.png)







![](../../.gitbook/assets/devider%20%284%29.png)







![](../../.gitbook/assets/devider%20%284%29.png)







![](../../.gitbook/assets/devider%20%284%29.png)





