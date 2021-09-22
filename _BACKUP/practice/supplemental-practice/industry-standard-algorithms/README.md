# Industry Standard Algorithms

{% embed url=“https://replit.com/<span class="citation" data-cites="bgoonz/Data-Structures-6">@bgoonz/Data-Structures-6</span>\#main.py” %}

{% file src=“../../../.gitbook/assets/the-algorithms-python-data\_structures.zip” %}

{% embed url=“https://replit.com/<span class="citation" data-cites="bgoonz/main-prac">@bgoonz/main-prac</span>\#directed\_graph.py” %}

## Is Subsequence:

    def is_subsequence(s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) > len(t):
            return False
        matched_s = 0
        for char in t:
            if matched_s < len(s) and s[matched_s] == char:
                matched_s += 1
        return matched_s == len(s)

## Reverse String:

    def reverse(lines):
        return "Reverse order: " + lines[::-1] + "\n" + "Normal Order: " + lines
    print(reverse("I am printing a sentence in reverse order"))
    print(reverse("printing strings in reverse order using python"))

### Implement a function recursively to get the desired Fibonacci sequence value. Your code should have the same input/output as the iterative code in the instructions.

    def get_fib(position):

        output = 0
        if(position==0):
            return output

        if(position==1):
            return position
        else:
            output += get_fib(position-1)+get_fib(position-2)
            return output

    # Test cases
    print get_fib(9)
    print get_fib(11)
    print get_fib(0)
