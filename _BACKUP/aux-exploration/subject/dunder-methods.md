# Dunder Methods

#### 1. Introduction <span id="1-introduction"></span>

Implementing dunder methods for classes is a good form of Polymorphism. If you have ever created a class in Python and used the init function, then you have already been using dunder methods.

#### 2. Table of contents <span id="2-table-of-contents"></span>

- [1. Introduction](https://www.section.io/engineering-education/dunder-methods-python/#1-introduction)
- [2. Table of Contents](https://www.section.io/engineering-education/dunder-methods-python/#2-table-of-contents)
- [3. Prerequisites](https://www.section.io/engineering-education/dunder-methods-python/#3-prerequisites)
- [4. Why do we need Dunder Methods?](https://www.section.io/engineering-education/dunder-methods-python/#4-why-do-we-need-dunder-methods)
- [5. Our custom class](https://www.section.io/engineering-education/dunder-methods-python/#5-our-custom-class)
- [6. Dunder Methods for our class](https://www.section.io/engineering-education/dunder-methods-python/#6-dunder-methods-for-our-class)
  - [6.1. init](https://www.section.io/engineering-education/dunder-methods-python/#61-init)
  - [6.2. str](https://www.section.io/engineering-education/dunder-methods-python/#62-str)
  - [6.3. setitem](https://www.section.io/engineering-education/dunder-methods-python/#63-setitem)
  - [6.4. getitem](https://www.section.io/engineering-education/dunder-methods-python/#64-getitem)
  - [6.5. delitem](https://www.section.io/engineering-education/dunder-methods-python/#65-delitem)
  - [6.6. len](https://www.section.io/engineering-education/dunder-methods-python/#66-len)
  - [6.7. contains](https://www.section.io/engineering-education/dunder-methods-python/#67-contains)
  - [6.8. Complete code](https://www.section.io/engineering-education/dunder-methods-python/#68-complete-code)
- [7. Some more dunder methods](https://www.section.io/engineering-education/dunder-methods-python/#7-some-more-dunder-methods)
  - [7.1. add](https://www.section.io/engineering-education/dunder-methods-python/#71-add)
  - [7.2. iadd](https://www.section.io/engineering-education/dunder-methods-python/#72-iadd)
  - [7.3. Other Operators](https://www.section.io/engineering-education/dunder-methods-python/#73-other-operators)
  - [7.4. call](https://www.section.io/engineering-education/dunder-methods-python/#74-call)
  - [7.5. Complete code](https://www.section.io/engineering-education/dunder-methods-python/#75-complete-code)
- [8. Conclusion](https://www.section.io/engineering-education/dunder-methods-python/#8-conclusion)

#### 3. Prerequisites <span id="3-prerequisites"></span>

Before we continue it will be important to have the following:

- A basic understanding of Object Oriented Programming using Python.
- Experience working with classes in Python.
- Familiarity with built-in functions such as len, get, set, etc.

#### 4. Why do we need Dunder methods? <span id="4-why-do-we-need-dunder-methods"></span>

Consider a case where we have the following class:

    class point:
        x = 4
        y = 5

    p1 = point()
    print(p1)

The print statement would print something like `<__main__.point object at 0x7fb992998d00>`. But, we might want the print statement to display something in the format `(4,10)`. We can achieve this by overriding the `__str__` method of our class.

We could also override other methods such as the `len, +, []` etc. We will create a new class and override many of the built-in functions in this article.

#### 5. Our custom class <span id="5-our-custom-class"></span>

    class softwares:
        names = []
        versions = {}

This class will be used to save a list of software and their versions. `names` is a list to store the names of the software and `versions` is a dictionary where the key is the software name and the value is the version number. By default, all softwares start with a version of 1.

#### 6. Dunder methods for our class <span id="6-dunder-methods-for-our-class"></span>

Before moving on, please ensure that your indentation is correct. The methods that will be discussed below are methods belonging to the class we created and must be indented appropriately.

**6.1. init**

This is a method you must have already used if you have worked with classes. The `init` method is used to create an instance of the class.

    def __init__(self,names):
        if names:
            self.names = names.copy()
            for name in names:
                self.versions[name] = 1
        else:
            raise Exception("Please Enter the names")

The `init` method defined above accepts a list of names as parameters and stores it in the class??? `names` list. Additionally, it also populates the `versions` dictionary. We have also put a check on the `names` list.

If the list is empty, an exception is raised. Below is how we would use the `init` method.

    p = softwares(['S1','S2','S3'])
    p1 = softwares([])

The first statement would work fine but the second line would raise an exception since an empty list was passed in as a parameter.

**6.2. str**

The `str` method is useful when we want to use instances of our class in a print statement. As discussed earlier, it usually returns a memory object. But we can override the `str` method to meet our requirements.

    def __str__(self):
        s ="The current softwares and their versions are listed below: \n"
        for key,value in self.versions.items():
            s+= f"{key} : v{value} \n"
        return s

The above `str` method returns the software and their versions. Ensure that the function returns a string. Below is how we would call the method.

    print(p)

**6.3. setitem**

When assigning values in a dictionary, the `setitem` method is invoked.

    d = {}
    d['key'] = value

We can give instances of our class a similar feature with the help of the `setitem` method.

    def __setitem__(self,name,version):
        if name in self.versions:
            self.versions[name] = version
        else:
            raise Exception("Software Name doesn't exist")

The method above is going to update the version number of the software. If the software is not found, it will raise an error.

In the 3rd line, we use the built-in `setitem` method of a dictionary.

We can invoke the `setitem` method in the following way:

    p['S1'] = 2
    p['2'] = 2

The first line would update the version of software S1 to 2. But the second line would raise an exception since software 2 doesn???t exist.

**6.4. getitem**

The `getitem` method is like the `setitem` method, the major difference being that the `getitem` method is called when we use the `[]` operator of a dictionary.

    d = {'val':key}
    print(d['val'])

Instances of our class can also be given a similar feature.

    def __getitem__(self,name):
        if name in self.versions:
            return self.versions[name]
        else:
            raise Exception("Software Name doesn't exist")

The above method essentially returns the version of the software. If the software is not found, it raises an exception. To invoke the `getitem` method, we can write the following line of code.

    print(p['S1'])
    print(p['1'])

The first line would print the version of S1. But, the second line would raise an Exception since 1 doesn???t exist.

**6.5. delitem**

The `delitem` is like the `setitem` and `getitem` method. To avoid repetition, we will move on to the implementation and use case.

    def __delitem__(self,name):
        if name in self.versions:
            del self.versions[name]
            self.names.remove(name)
        else:
            raise Exception("Software Name doesn't exist")

The `delitem` method deletes the software from the dictionary as well as the list.

It can be used as follows.

    del p['S1']

**6.6. len**

In a dictionary, the `len` method returns the number of elements in a list or the number of key-value pairs in a dictionary.

We can define a `len` method for our class as well.

    def __len__(self):
        return len(self.names)

The `len` method for our class returns the number of softwares. As you might have noticed, we are using the built-in `len` method of a list to return the number of software.

The `len` method of our class can be used in the following way.

    print(len(p))

**6.7. contains**

The `contains` method is used when using the `in` operator. The return value has to be a boolean.

    def __contains__(self,name):
        if name in self.versions:
            return True
        else:
            return False

The method checks if the name is found in the dictionary. We will be using the dictionary???s built-in `contains` method for that.

    if 'S2' in p:
        print("Software Exists")
    else:
        print("Software DOESN'T exist")

The code above prints the statement inside the if blocks since software S2 is present inside the `versions` dictionary.

**6.8. Complete code**

    class softwares:
        names = []
        versions = {}

        def __init__(self,names):
            if names:
                self.names = names.copy()
                for name in names:
                    self.versions[name] = 1
            else:
                raise Exception("Please Enter the names")

        def __str__(self):
            s ="The current softwares and their versions are listed below: \n"
            for key,value in self.versions.items():
                s+= f"{key} : v{value} \n"
            return s

        def __setitem__(self,name,version):
            if name in self.versions:
                self.versions[name] = version
            else:
                raise Exception("Software Name doesn't exist")

        def __getitem__(self,name):
            if name in self.versions:
                return self.versions[name]
            else:
                raise Exception("Software Name doesn't exist")

        def __delitem__(self,name):
            if name in self.versions:
                del self.versions[name]
                self.names.remove(name)
            else:
                raise Exception("Software Name doesn't exist")

        def __len__(self):
            return len(self.names)

        def __contains__(self,name):
            if name in self.versions:
                return True
            else:
                return False

#### 7. Some more dunder methods <span id="7-some-more-dunder-methods"></span>

Before looking at some more dunder methods, let???s create a new class.

    class point:
        x = None
        y = None

        def __init__(self, x , y):
            self.x = x
            self.y = y

        def __str__(self):
            s = f'({self.x},{self.y})'
            return s

    p1 = point(5,4)
    p2 = point(2,3)

We have created a class point which is basically a 2D point. The class has an `init` method and a `str` method. We have also created a couple of instances of the class.

**7.1. add**

The `add` method is called when using the `+` operator. We can define a custom `add` method for our class.

`p1 + p2` is equal to `p1._add__(p2)`

    def __add__(self,p2):
        x = self.x + p2.x
        y = self.y + p2.y
        return point(x,y)

The above method adds the x and y coordinates of the first instance of `point` and the second instance of `point`. It will create a new instance of `point` and then return it.

    p3 = p1 + p2

The line of code above invokes the `add` method.

**7.2. iadd**

The `iadd` method is like the `add` method. It is invoked when using the `+=` operator

    def __iadd__(self,p2):
        self.x += p2.x
        self.y += p2.y
        return self

The method above just updates an instance???s coordinates by adding the coordinates of `p2`. Make sure you are returning `self`, otherwise it will return None and won???t work as expected.

    p1 += p2
    print(p1)

The above method invokes the `iadd` method.

**7.3. Other operators**

- `__sub__(self,p2)` ( - )
- `__isub__(self,p2)` ( -= )
- `__mul__(self,p2)` ( \* )
- `__imul__(self,p2)` ( \*= )
- `__truediv__(self,p2)`( ??)
- `__itruediv__(self,p2)` ( = )
- `__floordiv__(self,p2)` ( \\ )
- `__ifloordiv__(self,p2)` ( = )

**7.4. call**

When invoking a function like `func()`, we are invoking the `call` method.

If we put in place a `call` method for our class, we can do the following:

    p1()
    p2()

Below is an example call method:

    def __call__(self):
        print(f"Called Point {self.x},{self.y}")

**7.5. Complete code**

    class point:
        x = None
        y = None

        def __init__(self, x , y):
            self.x = x
            self.y = y

        def __str__(self):
            s = f'({self.x},{self.y})'
            return s

        def __add__(self,p2):
            print("In add")
            x = self.x + p2.x
            y = self.y + p2.y
            return point(x,y)

        def __iadd__(self,p2):
            self.x += p2.x
            self.y += p2.y
            return self

        def __isub__(self,p2):
            self.x -= p2.x
            self.y -= p2.y
            return self

        def __imul__(self,p2):
            self.x *= p2.x
            self.y *= p2.y
            return self

        def __itruediv__(self,p2):
            self.x /= p2.x
            self.y /= p2.y
            return self

        def __ifloordiv__(self,p2):
            self.x //= p2.x
            self.y //= p2.y
            return self

        def __call__(self):
            print(f"Called Point {self.x},{self.y}")
