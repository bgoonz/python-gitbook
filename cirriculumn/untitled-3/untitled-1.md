# D3



### Overview <a id="overview"></a>

A dictionary is like a list, but instead of accessing values with an index, you access values with a "key." A "key" can be any type of object \(string, number, list, etc.\). Also, unlike lists, dictionaries do not have an order.

### Follow Along <a id="follow-along"></a>

Let's use a dictionary to create a collection that maps first names as keys \(strings\) to phone numbers as values.

```text
phonebook = {} # creates an empty dictionary
phonebook["Abe"] = 4569874321
phonebook["Bill"] = 7659803241
phonebook["Barry"] = 6573214789

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

Instead of adding one key-value pair at a time, we can initialize the dictionary to have the same values.

```text
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

print(phonebook)
# {'Abe': 4569874321, 'Bill': 7659803241, 'Barry': 6573214789}
```

We can iterate over a dictionary as we iterated over a list. We can use the `items()` method, which returns a tuple with the key and value for each item in the dictionary.

```text
for name, number in phonebook.items():
    print("Name: %s, Number: %s" % (name, number))

# Name: Abe, Number: 4569874321
# Name: Bill, Number: 7659803241
# Name: Barry, Number: 6573214789
```

To remove a key-value pair from a dictionary, you need to use the `del` keyword or use the `pop()` method available on dictionary objects. The difference is `pop()` deletes the item from the dictionary and returns the value. When you use the `del` keyword, you've written a statement that doesn't evaluate to anything.

```text
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

del phonebook["Abe"]

print(phonebook.pop("Bill"))
# 7659803241
```



{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-dictionaries-1\#main.py" %}



![](../../.gitbook/assets/devider%20%284%29.png)













![](../../.gitbook/assets/devider%20%284%29.png)







![](../../.gitbook/assets/devider%20%284%29.png)

















