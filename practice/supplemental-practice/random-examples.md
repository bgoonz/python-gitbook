# Random Examples

{% tabs %}
{% tab title="Gists" %}


## Given an integer n, return any array containing n unique integers such that they add up to 0.

```text
---


```py
# Example 1:  Input: n = 5   |   Output: [-7,-1,1,3,4]
# Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
# Example 2:  Input: n = 3   |   Output: [-1,0,1]
# Example 3:  Input: n = 1   |   Output: [0]
```

```python
# Constraints:  1 <= n <= 1000
```

```python
## time complexity:  O(1 or n)
## space complexity:  O(1)


def sumZero(self, n: int):
    """
    :type n: int
    :rtype: List[int]
    """
    # time complexity: O(1); create one range of digits
    # space complexity:  O(1); one unit of space

    # What's going on here?  Let's say n = 5.
    # Return a range of numbers which starts at 1-5, ends at 5, steps every 2
    # So that means it starts at -4, ends at 5, steps every 2
    # And it would return:  [-4, -2, 0, 2, 4]

    return range(1 - n, n, 2)
```

```python
# Min Moves to Obtain String Without 3 Identical Consecutive Letters
```

```python
# You are given a string S consisting of N letters ‘a’ and/or ‘b’.
# In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).
# Write a function solution that, given such a string S, returns the minimum number
# of moves required to obtain a string containing no instances of three identical
# consecutive letters.
```

```python
# time complexity:  O(n) because of the one while loop
# space complexity:  O(1) since this all takes up only one unit of space


def calculate_current_moves(start_sub, end_sub):
    sub_length = end_sub - start_sub
    # get current number of moves to add to total
    current_moves = sub_length // 3
    # add current number of moves to total
    return current_moves


def calculate_min_moves(string):
    # initialize start and end of first possible subsequence
    start_sub = 0
    end_sub = 1
    # initialize counter for number of moves
    moves = 0
    # initialize string length
    length = len(string)

    # loop until index of subsequence end gets to end of string
    while end_sub < length:
        # if index of subsequence end is at least one after start
        if string[end_sub] != string[start_sub]:
            # add current number of moves to total
            moves += calculate_current_moves(start_sub, end_sub)
            # move to end of current subsequence
            start_sub = end_sub
        # new end of subsequence = 1 after current start
        end_sub += 1

    # in cases where sub-sequence ends the string
    # add current number of moves to total
    moves += calculate_current_moves(start_sub, end_sub)

    return moves
```

```python
# checks whether IP digits are valid or not
def is_valid(possible_ip):

    # splitting at period
    ip_address = possible_ip.split(".")

    # checking for corner cases
    for subaddress in ip_address:

        # get length of subaddress
        length_subaddress = len(subaddress)
        # get int of subaddress
        int_subaddress = int(subaddress)
        # get first digit of subaddress
        first_digit = subaddress[0]

        # if length > 3 OR subaddress int is outside 0-255 OR
        # if length > 1 AND subaddress int is 0 OR
        # if length > 1  AND subaddress int is NOT 0 and first digit is 0
        # return false for invalid ip
        if length_subaddress > 3 or int_subaddress < 0 or int_subaddress > 255:
            return False
        elif length_subaddress > 1 and int_subaddress is 0:
            return False
        elif length_subaddress > 1 and int_subaddress is not 0 and first_digit is "0":
            return False

    # else return true for valid ip
    return True
```

```python
# converts string to IP address
def convert_string_to_ip(string):

    # get string length
    length = len(string)

    # if string of digits > 12, it's not an IP; return empty array
    if length > 12:
        return []

    # else set current possible ip as string AND
    current_possible_ip = string
    # initialize empty valid ip list
    valid_ip_list = []

    # loop through possible ips:
    # first period loop
    for i in range(1, length - 2):
        # second period loop
        for j in range(i + 1, length - 1):
            # third period loop
            for k in range(j + 1, length):

                # add first period to ip to check
                begin_to_k = current_possible_ip[:k]
                k_to_end = current_possible_ip[k:]
                current_possible_ip = begin_to_k + "." + k_to_end

                # add second period to ip to check
                begin_to_j = current_possible_ip[:j]
                j_to_end = current_possible_ip[j:]
                current_possible_ip = begin_to_j + "." + j_to_end

                # add third period to ip to check
                begin_to_i = current_possible_ip[:i]
                i_to_end = current_possible_ip[i:]
                current_possible_ip = begin_to_i + "." + i_to_end

                # if current combination is valid, add to valid ip list
                is_ip_valid = is_valid(current_possible_ip)
                if is_ip_valid:
                    valid_ip_list.append(current_possible_ip)

                # reset current possible id to original string before looping again
                current_possible_ip = string

    # return valid ip list
    return valid_ip_list


A = "25525511135"
# B = "25505011535"
print(convert_string_to_ip(A))
# print(convert_string_to_ip(B))
```

```python
# Given a string, what is the minimum number of adjacent swaps required to convert a string into
# a palindrome.
# If not possible, return -1.

"""
Example 1:  Input: "mamad"  | Output:  3
Example 2:  Input: "asflkj" | Output: -1
Example 3:  Input: "aabb"   | Output:  2
Example 4:  Input: "ntiin"  | Output:  1
    Explanation: swap 't' with 'i' => "nitin"
"""
```

```python
# time complexity:  O(n^2)
# space complexity: O(1)


def min_swap(string):
    # convert string to list
    list_of_string = list(string)
    # check if list_of_string can be palindrome
    odd = 0
    letter = [0] * 26

    for i in list_of_string:
        # get unicode char of current letter
        unicode_i = ord(i)
        # get unicode char of letter 'a'
        unicode_a = ord("a")
        # get alphabet index
        alphabet_index = unicode_i - unicode_a
        # get current letter count for each letter in string
        letter[alphabet_index] += 1

    for l in letter:
        if l & 1 == 1:
            odd += 1

    if odd > 1:
        return -1

    i, j, res = 0, len(list_of_string) - 1, 0

    while i < j:
        if list_of_string[i] == list_of_string[j]:
            i, j = i + 1, j - 1
            continue
        t = j - 1

        # find same letter with list_of_string[i] from right to left
        while t > i and list_of_string[t] != list_of_string[i]:
            t -= 1

        # if t == i, means this is the only letter in the list_of_string, should be swap to the middle
        # otherwise should be swap to the position of j

        target = len(list_of_string) // 2 if t == i else j

        while t < target:
            # swap
            tmp = list_of_string[t]
            list_of_string[t] = list_of_string[t + 1]
            list_of_string[t + 1] = tmp
            res, t = res + 1, t + 1

    return res


print(min_swap("racecra"))
```

```python
# Longest Substring Without 3 Contiguous Occurrences of Letter
```

```python
# Given a string s containing only a and b, find longest substring of s such that
# s does not contain more than two contiguous occurrences of a and b.
```

```python
## time complexity:  O(n)
## space complexity:  O(1)

"""
Example 1:  Input: "aabbaaaaabb"   |   Output: "aabbaa"
Example 2:  Input: "aabbaabbaabbaa"   |   Output: "aabbaabbaabbaa"
"""


def longest_substring(s):
    # initialize final string
    final_string = ""
    length = len(s)
    x = 0
    # loop through s
    while len(s) >= 2:
        beginning = s[0]
        middle = s[1]
        if len(s) > 2:
            end = s[2]
        # if current index + 1 != value of current index
        if beginning != middle:
            # add value of current index to final string
            final_string = final_string + beginning
        # if current index + 1 == value of current index
        elif beginning == middle:
            # check current index + 2
            # if current index + 2 == value of current index
            if beginning == end:
                # add value of current & current + 1 to final string
                final_string = final_string + beginning + middle
                # return string
                return final_string
            # if current index + 2 != value of current index
            else:
                # add value of current & current + 1 to final string
                final_string = final_string + beginning + middle
                # add 1 to index
                s = s[2:]
        elif len(s) == 2:
            final_string = final_string + beginning + middle
    # return string
    return final_string
```

```python
## aabbaa
print(longest_substring("aabbaaaaabb"))
## aabbaabbaabbaa
print(longest_substring("aabbaabbaabbaa"))
```

```python
# Mixed sorting

"""
Given a list of integers nums, sort the array such that:

All even numbers are sorted in increasing order
All odd numbers are sorted in decreasing order
The relative positions of the even and odd numbers remain the same
Example 1
Input

nums = [8, 13, 11, 90, -5, 4]
Output

[4, 13, 11, 8, -5, 90]
Explanation

The even numbers are sorted in increasing order, the odd numbers are sorted in 
decreasing number, and the relative positions were 
[even, odd, odd, even, odd, even] and remain the same after sorting.
"""
```

```python
# solution

import unittest


def mixed_sorting(nums):
    positions = []
    odd = []
    even = []
    sorted_list = []
    for i in nums:
        if i % 2 == 0:
            even.append(i)
            positions.append("E")
        else:
            odd.append(i)
            positions.append("O")
    even.sort()
    odd.sort()
    odd.reverse()
    j, k = 0, 0
    for i in range(len(nums)):
        if positions[i] == "E":
            while j < len(even):
                sorted_list.append(even[j])
                j += 1
                break
        else:
            while k < len(odd):
                sorted_list.append(odd[k])
                k += 1
                break

    return sorted_list
```

```python
# Lexicographically Smallest String
```

```python
# Lexicographically smallest string formed by removing at most
# one character.
```

```python
# Example 1:  Input: "abczd"   |   Output: "abcd"
```

```python
## time complexity:  O(n)
## space complexity:  O(1)


def lexi_smallest(s):
    length = len(s)
    length_one_short = length - 1

    for x in range(length_one_short):
        i_one_short = x - 1
        x_one_long = x + 1
        if s[x] > s[x_one_long]:
            return s[:x] + s[x_one_long:]
    return s[:-1]
```

```python
# abcd
print(lexi_smallest("abczd"))
```

```python
# String Without 3 Identical Consecutive Letters
```

```python
# Write a function solution that, given a string S of N lowercase English letters,
# returns a string with no instances of three identical consecutive letters,
# obtained from S by deleting the minimum possible number of letters.

"""
Examples:
Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.
"""
```

```python
# Write an efficient algorithm for the following assumptions:
# N is an integer within the range [1..200,000]
# string S consists only of lowercase letters (a-z)
```

```python
## time complexity:  O(n)
## space complexity:  O(1)


def no_three_consecutive(s):
    final_string = s[0:2]
    length = len(s)
    # loop through original string
    for x in range(2, length):
        string_x = s[x]
        string_x_one_short = s[x - 1]
        string_x_two_short = s[x - 2]
        if string_x == string_x_one_short and string_x == string_x_two_short:
            # don't append if previous chars are same
            continue
        else:
            final_string += string_x
    return final_string
```

```python
# eedaad
print(no_three_consecutive("eedaaad"))
```

```python
# xxtxx
print(no_three_consecutive("xxxtxxx"))
```

```python
# uuxaaxuu
print(no_three_consecutive("uuuuxaaaaxuuu"))
```

```python
# You are given a string s of length n containing only characters a and b.
# A substring of s called a semi-alternating substring if it does not
# contain three identical consecutive characters.
# Return the length of the longest semi-alternating substring.
```

```python
# Example 1:  Input: "baaabbabbb"   |   Output: 7
# Explanation: "aabbabb"
# Example 2:  Input: "abaaaa"   |   Output: 4
# Explanation: "abaa"
```

```python
# time complexity:  O(n)
# space complexity:  O(1)


def longest_semialternating_ss(s):
    length = len(s)
    if not s or length == 0:
        return 0

    if length < 3:
        return length

    beginning = 0
    end = 1
    # first character
    comparison_char = s[0]
    # count the occurrence of the first char
    count_first_char = 1
    max_length = 1

    while end < length:
        end_char = s[end]
        if end_char == comparison_char:
            # add one to char count
            count_first_char += 1
            # if char found at least two times
            if count_first_char == 2:
                x = end - beginning + 1
                if x > max_length:
                    max_length = x
            elif count_first_char > 2:
                # reset beginning pointer
                beginning = end - 1
        else:
            comparison_char = end_char
            count_first_char = 1
            if end - beginning + 1 > max_length:
                max_length = end - beginning + 1
        end += 1

    return max_length
```

```python
# alternate solution
def longest_semi(s):
    max_length = 0
    left = 0
    for right in range(len(s)):
        if right - left + 1 >= 3 and s[right] == s[right - 1] == s[right - 2]:
            left = right - 1
        max_length = max(max_length, right - left + 1)
    return max_length
```

```python
# 7
print(longest_semialternating_ss("baaabbabbb"))
```

```python
# 4
print(longest_semialternating_ss("abaaaa"))
```
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}







{% file src="../../.gitbook/assets/backpedal.py" %}



{% file src="../../.gitbook/assets/bfs\_search\_dict.py" %}

{% file src="../../.gitbook/assets/bfs\_paths\_dict \(2\).py" %}

{% file src="../../.gitbook/assets/bfs\_search\_grid \(1\).py" %}

{% file src="../../.gitbook/assets/bipartite\_matching\_single.py" %}

{% file src="../../.gitbook/assets/bisect\_search \(1\).py" %}

{% file src="../../.gitbook/assets/bst\_make\_balanced\_recur.py" %}

{% file src="../../.gitbook/assets/bt\_inorder\_traversal\_recur \(1\).py" %}

{% file src="../../.gitbook/assets/bt\_level\_order\_traversal\_iter.py" %}

{% file src="../../.gitbook/assets/celebrity.py" %}



{% file src="../../.gitbook/assets/counting\_sort\_dict \(1\).py" %}

{% file src="../../.gitbook/assets/counting\_sort\_list.py" %}

{% file src="../../.gitbook/assets/dfs\_component\_dict \(2\).py" %}



{% file src="../../.gitbook/assets/selection\_sort\_recur.py" %}



{% file src="../../.gitbook/assets/selection\_sort\_iter.py" %}

{% file src="../../.gitbook/assets/dijkstras\_path\_pq.py" %}



{% file src="../../.gitbook/assets/dijkstras\_distances\_min \(1\).py" %}

{% file src="../../.gitbook/assets/quicksort \(2\).py" %}

{% file src="../../.gitbook/assets/counting\_sort\_list \(1\).py" %}



{% file src="../../.gitbook/assets/dfs\_component\_dict.py" %}

{% file src="../../.gitbook/assets/dfs\_component\_dict\_recur \(1\).py" %}



















































































