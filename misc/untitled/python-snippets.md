# Python Snippets



#### Calculates the date of `n` days from the given date.

* Use `datetime.timedelta` and the `+` operator to calculate the new `datetime.datetime` value after adding `n` days to `d`.
* Omit the second argument, `d`, to use a default value of `datetime.today()`.

```python
from datetime import datetime, timedelta

def add_days(n, d = datetime.today()):
  return d + timedelta(n)
```

```python
from datetime import date

add_days(5, date(2020, 10, 25)) # date(2020, 10, 30)
add_days(-5, date(2020, 10, 25)) # date(2020, 10, 20)
```

#### Checks if all elements in a list are equal.

* Use `set()` to eliminate duplicate elements and then use `len()` to check if length is `1`.

```python
def all_equal(lst):
  return len(set(lst)) == 1
```

```python
all_equal([1, 2, 3, 4, 5, 6]) # False
all_equal([1, 1, 1, 1]) # True
```

#### Checks if all the values in a list are unique.

* Use `set()` on the given list to keep only unique occurrences.
* Use `len()` to compare the length of the unique values to the original list.

```python
def all_unique(lst):
  return len(lst) == len(set(lst))
```

```python
x = [1, 2, 3, 4, 5, 6]
y = [1, 2, 2, 3, 4, 5]
all_unique(x) # True
all_unique(y) # False
```

#### Generates a list of numbers in the arithmetic progression starting with the given positive integer and up to the specified limit.

* Use `range()` and `list()` with the appropriate start, step and end values.

```python
def arithmetic_progression(n, lim):
  return list(range(n, lim + 1, n))
```

```python
arithmetic_progression(5, 25) # [5, 10, 15, 20, 25]
```

#### Calculates the average of two or more numbers.

* Use `sum()` to sum all of the `args` provided, divide by `len()`.

```python
def average(*args):
  return sum(args, 0.0) / len(args)
```

```python
average(*[1, 2, 3]) # 2.0
average(1, 2, 3) # 2.0
```

#### Calculates the average of a list, after mapping each element to a value using the provided function.

* Use `map()` to map each element to the value returned by `fn`.
* Use `sum()` to sum all of the mapped values, divide by `len(lst)`.
* Omit the last argument, `fn`, to use the default identity function.

```python
def average_by(lst, fn = lambda x: x):
  return sum(map(fn, lst), 0.0) / len(lst)
```

```python
average_by([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], lambda x: x['n'])
# 5.0
```

#### Splits values into two groups, based on the result of the given `filter` list.

* Use a list comprehension and `zip()` to add elements to groups, based on `filter`.
* If `filter` has a truthy value for any element, add it to the first group, otherwise add it to the second group.

```python
def bifurcate(lst, filter):
  return [
    [x for x, flag in zip(lst, filter) if flag],
    [x for x, flag in zip(lst, filter) if not flag]
  ]
```

```python
bifurcate(['beep', 'boop', 'foo', 'bar'], [True, True, False, True])
# [ ['beep', 'boop', 'bar'], ['foo'] ]
```

#### Splits values into two groups, based on the result of the given filtering function.

* Use a list comprehension to add elements to groups, based on the value returned by `fn` for each element.
* If `fn` returns a truthy value for any element, add it to the first group, otherwise add it to the second group.

```python
def bifurcate_by(lst, fn):
  return [
    [x for x in lst if fn(x)],
    [x for x in lst if not fn(x)]
  ]
```

```python
bifurcate_by(['beep', 'boop', 'foo', 'bar'], lambda x: x[0] == 'b')
# [ ['beep', 'boop', 'bar'], ['foo'] ]
```

#### Calculates the number of ways to choose `k` items from `n` items without repetition and without order.

* Use `math.comb()` to calculate the binomial coefficient.

```python
from math import comb

def binomial_coefficient(n, k):
  return comb(n, k)
```

```python
binomial_coefficient(8, 2) # 28
```

#### Returns the length of a string in bytes.

* Use `str.encode('utf-8')` to encode the given string and return its length.

```python
def byte_size(s):
  return len(s.encode('utf-8'))
```

```python
byte_size('😀') # 4
byte_size('Hello World') # 11
```

#### Converts a string to camelcase.

* Use `re.sub()` to replace any `-` or `_` with a space, using the regexp `r"(_|-)+"`.
* Use `str.title()` to capitalize the first letter of each word and convert the rest to lowercase.
* Finally, use `str.replace()` to remove spaces between words.

```python
from re import sub

def camel(s):
  s = sub(r"(_|-)+", " ", s).title().replace(" ", "")
  return ''.join([s[0].lower(), s[1:]])
```

```python
camel('some_database_field_name') # 'someDatabaseFieldName'
camel('Some label that needs to be camelized')
# 'someLabelThatNeedsToBeCamelized'
camel('some-javascript-property') # 'someJavascriptProperty'
camel('some-mixed_string with spaces_underscores-and-hyphens')
# 'someMixedStringWithSpacesUnderscoresAndHyphens'
```

#### Capitalizes the first letter of a string.

* Use list slicing and `str.upper()` to capitalize the first letter of the string.
* Use `str.join()` to combine the capitalized first letter with the rest of the characters.
* Omit the `lower_rest` parameter to keep the rest of the string intact, or set it to `True` to convert to lowercase.

```python
def capitalize(s, lower_rest = False):
  return ''.join([s[:1].upper(), (s[1:].lower() if lower_rest else s[1:])])
```

```python
capitalize('fooBar') # 'FooBar'
capitalize('fooBar', True) # 'Foobar'
```

#### Capitalizes the first letter of every word in a string.

* Use `str.title()` to capitalize the first letter of every word in the string.

```python
def capitalize_every_word(s):
  return s.title()
```

```python
capitalize_every_word('hello world!') # 'Hello World!'
```

#### Casts the provided value as a list if it's not one.

* Use `isinstance()` to check if the given value is enumerable.
* Return it by using `list()` or encapsulated in a list accordingly.

```python
def cast_list(val):
  return list(val) if isinstance(val, (tuple, list, set, dict)) else [val]
```

```python
cast_list('foo') # ['foo']
cast_list([1]) # [1]
cast_list(('foo', 'bar')) # ['foo', 'bar']
```

### unlisted: true

Converts Celsius to Fahrenheit.

* Follow the conversion formula `F = 1.8 * C + 32`.

```python
def celsius_to_fahrenheit(degrees):
  return ((degrees * 1.8) + 32)
```

```python
celsius_to_fahrenheit(180) # 356.0
```

#### Creates a function that will invoke a predicate function for the specified property on a given object.

* Return a `lambda` function that takes an object and applies the predicate function, `fn` to the specified property.

```python
def check_prop(fn, prop):
  return lambda obj: fn(obj[prop])
```

```python
check_age = check_prop(lambda x: x >= 18, 'age')
user = {'name': 'Mark', 'age': 18}
check_age(user) # True
```

#### Chunks a list into smaller lists of a specified size.

* Use `list()` and `range()` to create a list of the desired `size`.
* Use `map()` on the list and fill it with splices of the given list.
* Finally, return the created list.

```python
from math import ceil

def chunk(lst, size):
  return list(
    map(lambda x: lst[x * size:x * size + size],
      list(range(ceil(len(lst) / size)))))
```

```python
chunk([1, 2, 3, 4, 5], 2) # [[1, 2], [3, 4], [5]]
```

#### Chunks a list into `n` smaller lists.

* Use `math.ceil()` and `len()` to get the size of each chunk.
* Use `list()` and `range()` to create a new list of size `n`.
* Use `map()` to map each element of the new list to a chunk the length of `size`.
* If the original list can't be split evenly, the final chunk will contain the remaining elements.

```python
from math import ceil

def chunk_into_n(lst, n):
  size = ceil(len(lst) / n)
  return list(
    map(lambda x: lst[x * size:x * size + size],
    list(range(n)))
  )
```

```python
chunk_into_n([1, 2, 3, 4, 5, 6, 7], 4) # [[1, 2], [3, 4], [5, 6], [7]]
```

#### Clamps `num` within the inclusive range specified by the boundary values.

* If `num` falls within the range \(`a`, `b`\), return `num`.
* Otherwise, return the nearest number in the range.

```python
def clamp_number(num, a, b):
  return max(min(num, max(a, b)), min(a, b))
```

```python
clamp_number(2, 3, 5) # 3
clamp_number(1, -1, -5) # -1
```

#### Inverts a dictionary with non-unique hashable values.

* Create a `collections.defaultdict` with `list` as the default value for each key.
* Use `dictionary.items()` in combination with a loop to map the values of the dictionary to keys using `dict.append()`.
* Use `dict()` to convert the `collections.defaultdict` to a regular dictionary.

```python
from collections import defaultdict

def collect_dictionary(obj):
  inv_obj = defaultdict(list)
  for key, value in obj.items():
    inv_obj[value].append(key)
  return dict(inv_obj)
```

```python
ages = {
  'Peter': 10,
  'Isabel': 10,
  'Anna': 9,
}
collect_dictionary(ages) # { 10: ['Peter', 'Isabel'], 9: ['Anna'] }
```

#### Combines two or more dictionaries, creating a list of values for each key.

* Create a new `collections.defaultdict` with `list` as the default value for each key and loop over `dicts`.
* Use `dict.append()` to map the values of the dictionary to keys.
* Use `dict()` to convert the `collections.defaultdict` to a regular dictionary.

```python
from collections import defaultdict

def combine_values(*dicts):
  res = defaultdict(list)
  for d in dicts:
    for key in d:
      res[key].append(d[key])
  return dict(res)
```

```python
d1 = {'a': 1, 'b': 'foo', 'c': 400}
d2 = {'a': 3, 'b': 200, 'd': 400}

combine_values(d1, d2) # {'a': [1, 3], 'b': ['foo', 200], 'c': [400], 'd': [400]}
```



#### Removes falsy values from a list.

* Use `filter()` to filter out falsy values \(`False`, `None`, `0`, and `""`\).

```python
def compact(lst):
  return list(filter(None, lst))
```

```python
compact([0, 1, False, 2, '', 3, 'a', 's', 34]) # [ 1, 2, 3, 'a', 's', 34 ]
```

#### Performs right-to-left function composition.

* Use `functools.reduce()` to perform right-to-left function composition.
* The last \(rightmost\) function can accept one or more arguments; the remaining functions must be unary.

```python
from functools import reduce

def compose(*fns):
  return reduce(lambda f, g: lambda *args: f(g(*args)), fns)
```

```python
add5 = lambda x: x + 5
multiply = lambda x, y: x * y
multiply_and_add_5 = compose(add5, multiply)
multiply_and_add_5(5, 2) # 15
```

#### Performs left-to-right function composition.

* Use `functools.reduce()` to perform left-to-right function composition.
* The first \(leftmost\) function can accept one or more arguments; the remaining functions must be unary.

```python
from functools import reduce

def compose_right(*fns):
  return reduce(lambda f, g: lambda *args: g(f(*args)), fns)
```

```python
add = lambda x, y: x + y
square = lambda x: x * x
add_and_square = compose_right(add, square)
add_and_square(1, 2) # 9
```

#### Groups the elements of a list based on the given function and returns the count of elements in each group.

* Use `collections.defaultdict` to initialize a dictionary.
* Use `map()` to map the values of the given list using the given function.
* Iterate over the map and increase the element count each time it occurs.

```python
from collections import defaultdict

def count_by(lst, fn = lambda x: x):
  count = defaultdict(int)
  for val in map(fn, lst):
    count[val] += 1
  return dict(count)
```

```python
from math import floor

count_by([6.1, 4.2, 6.3], floor) # {6: 2, 4: 1}
count_by(['one', 'two', 'three'], len) # {3: 2, 5: 1}
```

#### Counts the occurrences of a value in a list.

* Use `list.count()` to count the number of occurrences of `val` in `lst`.

```python
def count_occurrences(lst, val):
  return lst.count(val)
```

```python
count_occurrences([1, 1, 2, 1, 2, 3], 1) # 3
```

#### Creates a list of partial sums.

* Use `itertools.accumulate()` to create the accumulated sum for each element.
* Use `list()` to convert the result into a list.

```python
from itertools import accumulate

def cumsum(lst):
  return list(accumulate(lst))
```

```python
cumsum(range(0, 15, 3)) # [0, 3, 9, 18, 30]
```

#### Curries a function.

* Use `functools.partial()` to return a new partial object which behaves like `fn` with the given arguments, `args`, partially applied.

```python
from functools import partial

def curry(fn, *args):
  return partial(fn, *args)
```

```python
add = lambda x, y: x + y
add10 = curry(add, 10)
add10(20) # 30
```

#### Creates a list of dates between `start` \(inclusive\) and `end` \(not inclusive\).

* Use `datetime.timedelta.days` to get the days between `start` and `end`.
* Use `int()` to convert the result to an integer and `range()` to iterate over each day.
* Use a list comprehension and `datetime.timedelta()` to create a list of `datetime.date` objects.

```python
from datetime import timedelta, date

def daterange(start, end):
  return [start + timedelta(n) for n in range(int((end - start).days))]
```

```python
from datetime import date

daterange(date(2020, 10, 1), date(2020, 10, 5))
# [date(2020, 10, 1), date(2020, 10, 2), date(2020, 10, 3), date(2020, 10, 4)]
```

#### Calculates the date of `n` days ago from today.

* Use `datetime.date.today()` to get the current day.
* Use `datetime.timedelta` to subtract `n` days from today's date.

```python
from datetime import timedelta, date

def days_ago(n):
  return date.today() - timedelta(n)
```

```python
days_ago(5) # date(2020, 10, 23)
```

#### Calculates the day difference between two dates.

* Subtract `start` from `end` and use `datetime.timedelta.days` to get the day difference.

```python
def days_diff(start, end):
  return (end - start).days
```

```python
from datetime import date

days_diff(date(2020, 10, 25), date(2020, 10, 28)) # 3
```

#### Calculates the date of `n` days from today.

* Use `datetime.date.today()` to get the current day.
* Use `datetime.timedelta` to add `n` days from today's date.

```python
from datetime import timedelta, date

def days_from_now(n):
  return date.today() + timedelta(n)
```

```python
days_from_now(5) # date(2020, 11, 02)
```

#### Decapitalizes the first letter of a string.

* Use list slicing and `str.lower()` to decapitalize the first letter of the string.
* Use `str.join()` to combine the lowercase first letter with the rest of the characters.
* Omit the `upper_rest` parameter to keep the rest of the string intact, or set it to `True` to convert to uppercase.

```python
def decapitalize(s, upper_rest = False):
  return ''.join([s[:1].lower(), (s[1:].upper() if upper_rest else s[1:])])
```

```python
decapitalize('FooBar') # 'fooBar'
decapitalize('FooBar', True) # 'fOOBAR'
```

#### Deep flattens a list.

* Use recursion.
* Use `isinstance()` with `collections.abc.Iterable` to check if an element is iterable.
* If it is iterable, apply `deep_flatten()` recursively, otherwise return `[lst]`.

```python
from collections.abc import Iterable

def deep_flatten(lst):
  return ([a for i in lst for a in
          deep_flatten(i)] if isinstance(lst, Iterable) else [lst])
```

```python
deep_flatten([1, [2], [[3], 4], 5]) # [1, 2, 3, 4, 5]
```

#### Converts an angle from degrees to radians.

* Use `math.pi` and the degrees to radians formula to convert the angle from degrees to radians.

```python
from math import pi

def degrees_to_rads(deg):
  return (deg * pi) / 180.0
```

```python
degrees_to_rads(180) # ~3.1416
```

#### Invokes the provided function after `ms` milliseconds.

* Use `time.sleep()` to delay the execution of `fn` by `ms / 1000` seconds.

```python
from time import sleep

def delay(fn, ms, *args):
  sleep(ms / 1000)
  return fn(*args)
```

```python
delay(lambda x: print(x), 1000, 'later') # prints 'later' after one second
```

#### Converts a dictionary to a list of tuples.

* Use `dict.items()` and `list()` to get a list of tuples from the given dictionary.

```python
def dict_to_list(d):
  return list(d.items())
```

```python
d = {'one': 1, 'three': 3, 'five': 5, 'two': 2, 'four': 4}
dict_to_list(d)
# [('one', 1), ('three', 3), ('five', 5), ('two', 2), ('four', 4)]
```

#### Calculates the difference between two iterables, without filtering duplicate values.

* Create a `set` from `b`.
* Use a list comprehension on `a` to only keep values not contained in the previously created set, `_b`.

```python
def difference(a, b):
  _b = set(b)
  return [item for item in a if item not in _b]
```

```python
difference([1, 2, 3], [1, 2, 4]) # [3]
```

#### Returns the difference between two lists, after applying the provided function to each list element of both.

* Create a `set`, using `map()` to apply `fn` to each element in `b`.
* Use a list comprehension in combination with `fn` on `a` to only keep values not contained in the previously created set, `_b`.

```python
def difference_by(a, b, fn):
  _b = set(map(fn, b))
  return [item for item in a if fn(item) not in _b]
```

```python
from math import floor

difference_by([2.1, 1.2], [2.3, 3.4], floor) # [1.2]
difference_by([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], lambda v : v['x'])
# [ { x: 2 } ]
```

#### Converts a number to a list of digits.

* Use `map()` combined with `int` on the string representation of `n` and return a list from the result.

```python
def digitize(n):
  return list(map(int, str(n)))
```

```python
digitize(123) # [1, 2, 3]
```

#### Returns a list with `n` elements removed from the left.

* Use slice notation to remove the specified number of elements from the left.
* Omit the last argument, `n`, to use a default value of `1`.

```python
def drop(a, n = 1):
  return a[n:]
```

```python
drop([1, 2, 3]) # [2, 3]
drop([1, 2, 3], 2) # [3]
drop([1, 2, 3], 42) # []
```

#### Returns a list with `n` elements removed from the right.

* Use slice notation to remove the specified number of elements from the right.
* Omit the last argument, `n`, to use a default value of `1`.

```python
def drop_right(a, n = 1):
  return a[:-n]
```

```python
drop_right([1, 2, 3]) # [1, 2]
drop_right([1, 2, 3], 2) # [1]
drop_right([1, 2, 3], 42) # []
```

#### Checks if the provided function returns `True` for every element in the list.

* Use `all()` in combination with `map()` and `fn` to check if `fn` returns `True` for all elements in the list.

```python
def every(lst, fn = lambda x: x):
  return all(map(fn, lst))
```

```python
every([4, 2, 3], lambda x: x > 1) # True
every([1, 2, 3]) # True
```

#### Returns every `nth` element in a list.

* Use slice notation to create a new list that contains every `nth` element of the given list.

```python
def every_nth(lst, nth):
  return lst[nth - 1::nth]
```

```python
every_nth([1, 2, 3, 4, 5, 6], 2) # [ 2, 4, 6 ]
```

#### Calculates the factorial of a number.

* Use recursion.
* If `num` is less than or equal to `1`, return `1`.
* Otherwise, return the product of `num` and the factorial of `num - 1`.
* Throws an exception if `num` is a negative or a floating point number.

```python
def factorial(num):
  if not ((num >= 0) and (num % 1 == 0)):
    raise Exception("Number can't be floating point or negative.")
  return 1 if num == 0 else num * factorial(num - 1)
```

```python
factorial(6) # 720
```

### unlisted: true

Converts Fahrenheit to Celsius.

* Follow the conversion formula `C = (F - 32) * 5/9`.

```python
def fahrenheit_to_celsius(degrees):
  return ((degrees - 32) * 5/9)
```

```python
fahrenheit_to_celsius(77) # 25.0
```

#### Generates a list, containing the Fibonacci sequence, up until the nth term.

* Starting with `0` and `1`, use `list.append()` to add the sum of the last two numbers of the list to the end of the list, until the length of the list reaches `n`.
* If `n` is less or equal to `0`, return a list containing `0`.

```python
def fibonacci(n):
  if n <= 0:
    return [0]
  sequence = [0, 1]
  while len(sequence) <= n:
    next_value = sequence[len(sequence) - 1] + sequence[len(sequence) - 2]
    sequence.append(next_value)
  return sequence
```

```python
fibonacci(7) # [0, 1, 1, 2, 3, 5, 8, 13]
```

#### Creates a list with the non-unique values filtered out.

* Use `collections.Counter` to get the count of each value in the list.
* Use a list comprehension to create a list containing only the unique values.

```python
from collections import Counter

def filter_non_unique(lst):
  return [item for item, count in Counter(lst).items() if count == 1]
```

```python
filter_non_unique([1, 2, 2, 3, 4, 4, 5]) # [1, 3, 5]
```

#### Creates a list with the unique values filtered out.

* Use `collections.Counter` to get the count of each value in the list.
* Use a list comprehension to create a list containing only the non-unique values.

```python
from collections import Counter

def filter_unique(lst):
  return [item for item, count in Counter(lst).items() if count > 1]
```

```python
filter_unique([1, 2, 2, 3, 4, 4, 5]) # [2, 4]
```

#### Finds the value of the first element in the given list that satisfies the provided testing function.

* Use a list comprehension and `next()` to return the first element in `lst` for which `fn` returns `True`.

```python
def find(lst, fn):
  return next(x for x in lst if fn(x))
```

```python
find([1, 2, 3, 4], lambda n: n % 2 == 1) # 1
```

#### Finds the index of the first element in the given list that satisfies the provided testing function.

* Use a list comprehension, `enumerate()` and `next()` to return the index of the first element in `lst` for which `fn` returns `True`.

```python
def find_index(lst, fn):
  return next(i for i, x in enumerate(lst) if fn(x))
```

```python
find_index([1, 2, 3, 4], lambda n: n % 2 == 1) # 0
```



#### Finds the indexes of all elements in the given list that satisfy the provided testing function.

* Use `enumerate()` and a list comprehension to return the indexes of the all element in `lst` for which `fn` returns `True`.

```python
def find_index_of_all(lst, fn):
  return [i for i, x in enumerate(lst) if fn(x)]
```

```python
find_index_of_all([1, 2, 3, 4], lambda n: n % 2 == 1) # [0, 2]
```

#### Finds the first key in the provided dictionary that has the given value.

* Use `dictionary.items()` and `next()` to return the first key that has a value equal to `val`.

```python
def find_key(dict, val):
  return next(key for key, value in dict.items() if value == val)
```

```python
ages = {
  'Peter': 10,
  'Isabel': 11,
  'Anna': 9,
}
find_key(ages, 11) # 'Isabel'
```

#### Finds all keys in the provided dictionary that have the given value.

* Use `dictionary.items()`, a generator and `list()` to return all keys that have a value equal to `val`.

```python
def find_keys(dict, val):
  return list(key for key, value in dict.items() if value == val)
```

```python
ages = {
  'Peter': 10,
  'Isabel': 11,
  'Anna': 10,
}
find_keys(ages, 10) # [ 'Peter', 'Anna' ]
```

#### Finds the value of the last element in the given list that satisfies the provided testing function.

* Use a list comprehension and `next()` to return the last element in `lst` for which `fn` returns `True`.

```python
def find_last(lst, fn):
  return next(x for x in lst[::-1] if fn(x))
```

```python
find_last([1, 2, 3, 4], lambda n: n % 2 == 1) # 3
```

#### Finds the index of the last element in the given list that satisfies the provided testing function.

* Use a list comprehension, `enumerate()` and `next()` to return the index of the last element in `lst` for which `fn` returns `True`.

```python
def find_last_index(lst, fn):
  return len(lst) - 1 - next(i for i, x in enumerate(lst[::-1]) if fn(x))
```

```python
find_last_index([1, 2, 3, 4], lambda n: n % 2 == 1) # 2
```

#### Finds the items that are parity outliers in a given list.

* Use `collections.Counter` with a list comprehension to count even and odd values in the list.
* Use `collections.Counter.most_common()` to get the most common parity.
* Use a list comprehension to find all elements that do not match the most common parity.

```python
from collections import Counter

def find_parity_outliers(nums):
  return [
    x for x in nums
    if x % 2 != Counter([n % 2 for n in nums]).most_common()[0][0]
  ]
```

```python
find_parity_outliers([1, 2, 3, 4, 6]) # [1, 3]
```

#### Flattens a list of lists once.

* Use a list comprehension to extract each value from sub-lists in order.

```python
def flatten(lst):
  return [x for y in lst for x in y]
```

```python
flatten([[1, 2, 3, 4], [5, 6, 7, 8]]) # [1, 2, 3, 4, 5, 6, 7, 8]
```

#### Executes the provided function once for each list element.

* Use a `for` loop to execute `fn` for each element in `itr`.

```python
def for_each(itr, fn):
  for el in itr:
    fn(el)
```

```python
for_each([1, 2, 3], print) # 1 2 3
```

#### Executes the provided function once for each list element, starting from the list's last element.

* Use a `for` loop in combination with slice notation to execute `fn` for each element in `itr`, starting from the last one.

```python
def for_each_right(itr, fn):
  for el in itr[::-1]:
    fn(el)
```

```python
for_each_right([1, 2, 3], print) # 3 2 1
```

#### Creates a dictionary with the unique values of a list as keys and their frequencies as the values.

* Use `collections.defaultdict()` to store the frequencies of each unique element.
* Use `dict()` to return a dictionary with the unique elements of the list as keys and their frequencies as the values.

```python
from collections import defaultdict

def frequencies(lst):
  freq = defaultdict(int)
  for val in lst:
    freq[val] += 1
  return dict(freq)
```

```python
frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']) # { 'a': 4, 'b': 2, 'c': 1 }
```

#### Converts a date from its ISO-8601 representation.

* Use `datetime.datetime.fromisoformat()` to convert the given ISO-8601 date to a `datetime.datetime` object.

```python
from datetime import datetime

def from_iso_date(d):
  return datetime.fromisoformat(d)
```

```python
from_iso_date('2020-10-28T12:30:59.000000') # 2020-10-28 12:30:59
```

#### Calculates the greatest common divisor of a list of numbers.

* Use `functools.reduce()` and `math.gcd()` over the given list.

```python
from functools import reduce
from math import gcd as _gcd

def gcd(numbers):
  return reduce(_gcd, numbers)
```

```python
gcd([8, 36, 28]) # 4
```

#### Initializes a list containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.

Returns an error if `step` equals `1`.

* Use `range()`, `math.log()` and `math.floor()` and a list comprehension to create a list of the appropriate length, applying the step for each element.
* Omit the second argument, `start`, to use a default value of `1`.
* Omit the third argument, `step`, to use a default value of `2`.

```python
from math import floor, log

def geometric_progression(end, start=1, step=2):
  return [start * step ** i for i in range(floor(log(end / start)
          / log(step)) + 1)]
```

```python
geometric_progression(256) # [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometric_progression(256, 3) # [3, 6, 12, 24, 48, 96, 192]
geometric_progression(256, 1, 4) # [1, 4, 16, 64, 256]
```

#### Retrieves the value of the nested key indicated by the given selector list from a dictionary or list.

* Use `functools.reduce()` to iterate over the `selectors` list.
* Apply `operator.getitem()` for each key in `selectors`, retrieving the value to be used as the iteratee for the next iteration.

```python
from functools import reduce
from operator import getitem

def get(d, selectors):
  return reduce(getitem, selectors, d)
```

```python
users = {
  'freddy': {
    'name': {
      'first': 'fred',
      'last': 'smith'
    },
    'postIds': [1, 2, 3]
  }
}
get(users, ['freddy', 'name', 'last']) # 'smith'
get(users, ['freddy', 'postIds', 1]) # 2
```

#### Groups the elements of a list based on the given function.

* Use `collections.defaultdict` to initialize a dictionary.
* Use `fn` in combination with a `for` loop and `dict.append()` to populate the dictionary.
* Use `dict()` to convert it to a regular dictionary.

```python
from collections import defaultdict

def group_by(lst, fn):
  d = defaultdict(list)
  for el in lst:
    d[fn(el)].append(el)
  return dict(d)
```

```python
from math import floor

group_by([6.1, 4.2, 6.3], floor) # {4: [4.2], 6: [6.1, 6.3]}
group_by(['one', 'two', 'three'], len) # {3: ['one', 'two'], 5: ['three']}
```

#### Calculates the Hamming distance between two values.

* Use the XOR operator \(`^`\) to find the bit difference between the two numbers.
* Use `bin()` to convert the result to a binary string.
* Convert the string to a list and use `count()` of `str` class to count and return the number of `1`s in it.

```python
def hamming_distance(a, b):
  return bin(a ^ b).count('1')
```

```python
hamming_distance(2, 3) # 1
```

#### Checks if there are duplicate values in a flat list.

* Use `set()` on the given list to remove duplicates, compare its length with the length of the list.

```python
def has_duplicates(lst):
  return len(lst) != len(set(lst))
```

```python
x = [1, 2, 3, 4, 5, 5]
y = [1, 2, 3, 4, 5]
has_duplicates(x) # True
has_duplicates(y) # False
```

#### Checks if two lists contain the same elements regardless of order.

* Use `set()` on the combination of both lists to find the unique values.
* Iterate over them with a `for` loop comparing the `count()` of each unique value in each list.
* Return `False` if the counts do not match for any element, `True` otherwise.

```python
def have_same_contents(a, b):
  for v in set(a + b):
    if a.count(v) != b.count(v):
      return False
  return True
```

```python
have_same_contents([1, 2, 4], [2, 4, 1]) # True
```

#### Returns the head of a list.

* Use `lst[0]` to return the first element of the passed list.

```python
def head(lst):
  return lst[0]
```

```python
head([1, 2, 3]) # 1
```

#### Converts a hexadecimal color code to a tuple of integers corresponding to its RGB components.

* Use a list comprehension in combination with `int()` and list slice notation to get the RGB components from the hexadecimal string.
* Use `tuple()` to convert the resulting list to a tuple.

```python
def hex_to_rgb(hex):
  return tuple(int(hex[i:i+2], 16) for i in (0, 2, 4))
```

```python
hex_to_rgb('FFA501') # (255, 165, 1)
```

#### Checks if the given number falls within the given range.

* Use arithmetic comparison to check if the given number is in the specified range.
* If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.

```python
def in_range(n, start, end = 0):
  return start <= n <= end if end >= start else end <= n <= start
```

```python
in_range(3, 2, 5) # True
in_range(3, 4) # True
in_range(2, 3, 5) # False
in_range(3, 2) # False
```

#### Checks if all the elements in `values` are included in `lst`.

* Check if every value in `values` is contained in `lst` using a `for` loop.
* Return `False` if any one value is not found, `True` otherwise.

```python
def includes_all(lst, values):
  for v in values:
    if v not in lst:
      return False
  return True
```

```python
includes_all([1, 2, 3, 4], [1, 4]) # True
includes_all([1, 2, 3, 4], [1, 5]) # False
```

#### Checks if any element in `values` is included in `lst`.

* Check if any value in `values` is contained in `lst` using a `for` loop.
* Return `True` if any one value is found, `False` otherwise.

```python
def includes_any(lst, values):
  for v in values:
    if v in lst:
      return True
  return False
```

```python
includes_any([1, 2, 3, 4], [2, 9]) # True
includes_any([1, 2, 3, 4], [8, 9]) # False
```

#### Returns a list of indexes of all the occurrences of an element in a list.

* Use `enumerate()` and a list comprehension to check each element for equality with `value` and adding `i` to the result.

```python
def index_of_all(lst, value):
  return [i for i, x in enumerate(lst) if x == value]
```

```python
index_of_all([1, 2, 1, 4, 5, 1], 1) # [0, 2, 5]
index_of_all([1, 2, 3, 4], 6) # []
```

#### Returns all the elements of a list except the last one.

* Use `lst[:-1]` to return all but the last element of the list.

```python
def initial(lst):
  return lst[:-1]
```

```python
initial([1, 2, 3]) # [1, 2]
```

#### Initializes a 2D list of given width and height and value.

* Use a list comprehension and `range()` to generate `h` rows where each is a list with length `h`, initialized with `val`.
* Omit the last argument, `val`, to set the default value to `None`.

```python
def initialize_2d_list(w, h, val = None):
  return [[val for x in range(w)] for y in range(h)]
```

```python
initialize_2d_list(2, 2, 0) # [[0, 0], [0, 0]]
```

#### Initializes a list containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.

* Use `list()` and `range()` to generate a list of the appropriate length, filled with the desired values in the given range.
* Omit `start` to use the default value of `0`.
* Omit `step` to use the default value of `1`.

```python
def initialize_list_with_range(end, start = 0, step = 1):
  return list(range(start, end + 1, step))
```

```python
initialize_list_with_range(5) # [0, 1, 2, 3, 4, 5]
initialize_list_with_range(7, 3) # [3, 4, 5, 6, 7]
initialize_list_with_range(9, 0, 2) # [0, 2, 4, 6, 8]
```

#### Initializes and fills a list with the specified value.

* Use a list comprehension and `range()` to generate a list of length equal to `n`, filled with the desired values.
* Omit `val` to use the default value of `0`.

```python
def initialize_list_with_values(n, val = 0):
  return [val for x in range(n)]
```

```python
initialize_list_with_values(5, 2) # [2, 2, 2, 2, 2]
```

#### Returns a list of elements that exist in both lists.

* Create a `set` from `a` and `b`.
* Use the built-in set operator `&` to only keep values contained in both sets, then transform the `set` back into a `list`.

```python
def intersection(a, b):
  _a, _b = set(a), set(b)
  return list(_a & _b)
```

```python
intersection([1, 2, 3], [4, 3, 2]) # [2, 3]
```

#### Returns a list of elements that exist in both lists, after applying the provided function to each list element of both.

* Create a `set`, using `map()` to apply `fn` to each element in `b`.
* Use a list comprehension in combination with `fn` on `a` to only keep values contained in both lists.

```python
def intersection_by(a, b, fn):
  _b = set(map(fn, b))
  return [item for item in a if fn(item) in _b]
```

```python
from math import floor

intersection_by([2.1, 1.2], [2.3, 3.4], floor) # [2.1]
```

#### Inverts a dictionary with unique hashable values.

* Use `dictionary.items()` in combination with a list comprehension to create a new dictionary with the values and keys inverted.

```python
def invert_dictionary(obj):
  return { value: key for key, value in obj.items() }
```

```python
ages = {
  'Peter': 10,
  'Isabel': 11,
  'Anna': 9,
}
invert_dictionary(ages) # { 10: 'Peter', 11: 'Isabel', 9: 'Anna' }
```

#### Checks if a string is an anagram of another string \(case-insensitive, ignores spaces, punctuation and special characters\).

* Use `str.isalnum()` to filter out non-alphanumeric characters, `str.lower()` to transform each character to lowercase.
* Use `collections.Counter` to count the resulting characters for each string and compare the results.

```python
from collections import Counter

def is_anagram(s1, s2):
  return Counter(
    c.lower() for c in s1 if c.isalnum()
  ) == Counter(
    c.lower() for c in s2 if c.isalnum()
  )
```

```python
is_anagram('#anagram', 'Nag a ram!')  # True
```

#### Checks if the elements of the first list are contained in the second one regardless of order.

* Use `count()` to check if any value in `a` has more occurrences than it has in `b`.
* Return `False` if any such value is found, `True` otherwise.

```python
def is_contained_in(a, b):
  for v in set(a):
    if a.count(v) > b.count(v):
      return False
  return True
```

```python
is_contained_in([1, 4], [2, 4, 1]) # True
```

### unlisted: true

Checks if the first numeric argument is divisible by the second one.

* Use the modulo operator \(`%`\) to check if the remainder is equal to `0`.

```python
def is_divisible(dividend, divisor):
  return dividend % divisor == 0
```

```python
is_divisible(6, 3) # True
```

### unlisted: true

Checks if the given number is even.

* Check whether a number is odd or even using the modulo \(`%`\) operator.
* Return `True` if the number is even, `False` if the number is odd.

```python
def is_even(num):
  return num % 2 == 0
```

```python
is_even(3) # False
```

### unlisted: true

Checks if the given number is odd.

* Checks whether a number is even or odd using the modulo \(`%`\) operator.
* Returns `True` if the number is odd, `False` if the number is even.

```python
def is_odd(num):
  return num % 2 != 0
```

```python
is_odd(3) # True
```

#### Checks if the provided integer is a prime number.

* Return `False` if the number is `0`, `1`, a negative number or a multiple of `2`.
* Use `all()` and `range()` to check numbers from `3` to the square root of the given number.
* Return `True` if none divides the given number, `False` otherwise.

```python
from math import sqrt

def is_prime(n):
  if n <= 1 or (n % 2 == 0 and n > 2):
    return False
  return all(n % i for i in range(3, int(sqrt(n)) + 1, 2))
```

```python
is_prime(11) # True
```

#### Checks if the given date is a weekday.

* Use `datetime.datetime.weekday()` to get the day of the week as an integer.
* Check if the day of the week is less than or equal to `4`.
* Omit the second argument, `d`, to use a default value of `datetime.today()`.

```python
from datetime import datetime

def is_weekday(d = datetime.today()):
  return d.weekday() <= 4
```

```python
from datetime import date

is_weekday(date(2020, 10, 25)) # False
is_weekday(date(2020, 10, 28)) # True
```

#### Checks if the given date is a weekend.

* Use `datetime.datetime.weekday()` to get the day of the week as an integer.
* Check if the day of the week is greater than `4`.
* Omit the second argument, `d`, to use a default value of `datetime.today()`.

```python
from datetime import datetime

def is_weekend(d = datetime.today()):
  return d.weekday() > 4
```

```python
from datetime import date

is_weekend(date(2020, 10, 25)) # True
is_weekend(date(2020, 10, 28)) # False
```

#### Converts a string to kebab case.

* Use `re.sub()` to replace any `-` or `_` with a space, using the regexp `r"(_|-)+"`.
* Use `re.sub()` to match all words in the string, `str.lower()` to lowercase them.
* Finally, use `str.join()` to combine all word using `-` as the separator.

```python
from re import sub

def kebab(s):
  return '-'.join(
    sub(r"(\s|_|-)+"," ",
    sub(r"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+",
    lambda mo: ' ' + mo.group(0).lower(), s)).split())
```

```python
kebab('camelCase') # 'camel-case'
kebab('some text') # 'some-text'
kebab('some-mixed_string With spaces_underscores-and-hyphens')
# 'some-mixed-string-with-spaces-underscores-and-hyphens'
kebab('AllThe-small Things') # 'all-the-small-things'
```

#### Checks if the given key exists in a dictionary.

* Use the `in` operator to check if `d` contains `key`.

```python
def key_in_dict(d, key):
  return (key in d)
```

```python
d = {'one': 1, 'three': 3, 'five': 5, 'two': 2, 'four': 4}
key_in_dict(d, 'three') # True
```

#### Finds the key of the maximum value in a dictionary.

* Use `max()` with the `key` parameter set to `dict.get()` to find and return the key of the maximum value in the given dictionary.

```python
def key_of_max(d):
  return max(d, key = d.get)
```

```python
key_of_max({'a':4, 'b':0, 'c':13}) # c
```

#### Finds the key of the minimum value in a dictionary.

* Use `min()` with the `key` parameter set to `dict.get()` to find and return the key of the minimum value in the given dictionary.

```python
def key_of_min(d):
  return min(d, key = d.get)
```

```python
key_of_min({'a':4, 'b':0, 'c':13}) # b
```

#### Creates a flat list of all the keys in a flat dictionary.

* Use `dict.keys()` to return the keys in the given dictionary.
* Return a `list()` of the previous result.

```python
def keys_only(flat_dict):
  return list(flat_dict.keys())
```

```python
ages = {
  'Peter': 10,
  'Isabel': 11,
  'Anna': 9,
}
keys_only(ages) # ['Peter', 'Isabel', 'Anna']
```

### unlisted: true

Converts kilometers to miles.

* Follows the conversion formula `mi = km * 0.621371`.

```python
def km_to_miles(km):
  return km * 0.621371
```

```python
km_to_miles(8.1) # 5.0331051
```

#### Returns the last element in a list.

* Use `lst[-1]` to return the last element of the passed list.

```python
def last(lst):
  return lst[-1]
```

```python
last([1, 2, 3]) # 3
```

#### Returns the least common multiple of a list of numbers.

* Use `functools.reduce()`, `math.gcd()` and `lcm(x,y) = x * y / gcd(x,y)` over the given list.

```python
from functools import reduce
from math import gcd

def lcm(numbers):
  return reduce((lambda x, y: int(x * y / gcd(x, y))), numbers)
```

```python
lcm([12, 7]) # 84
lcm([1, 3, 4, 5]) # 60
```
