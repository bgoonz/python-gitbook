# Classes



1. [Home](https://thepythonguru.com/)
2. 3. [Blog](https://thepythonguru.com/blog/)
4. 5. Python Classes and Interfaces

\(Sponsors\) Get started learning Python with [DataCamp's](https://www.datacamp.com/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials) free [Intro to Python tutorial](https://www.datacamp.com/courses/intro-to-python-for-data-science/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials). Learn Data Science by completing interactive coding challenges and watching videos by expert instructors. [Start Now!](https://www.datacamp.com/courses/intro-to-python-for-data-science/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials)

## Python Classes and Interfaces

 Updated on Jan 07, 2020

 **Note:**

This is a except from [Effective Python: 90 Specific Ways to Write Better Python, 2nd Edition](http://www.informit.com/store/effective-python-90-specific-ways-to-write-better-python-9780134853987)

As an object-oriented programming language, Python supports a full range of features, such as inheritance, polymorphism, and encapsulation. Getting things done in Python often requires writing new classes and defining how they interact through their interfaces and hierarchies.

Python's classes and inheritance make it easy to express a program's intended behaviors with objects. They allow you to improve and expand functionality over time. They provide flexibility in an environment of changing requirements. Knowing how to use them well enables you to write maintainable code.

### Item 37: Compose Classes Instead of Nesting Many Levels of Built-in Types

Python's built-in dictionary type is wonderful for maintaining dynamic internal state over the lifetime of an object. By dynamic, I mean situations in which you need to do bookkeeping for an unexpected set of identifiers. For example, say that I want to record the grades of a set of students whose names aren't known in advance. I can define a class to store the names in a dictionary instead of using a predefined attribute for each student:



```python
class SimpleGradebook:
    def __init__(self):
        self._grades = {}
    def add_student(self, name):
        self._grades[name] = []
    def report_grade(self, name, score):
        self._grades[name].append(score)

   def average_grade(self, name):
        grades = self._grades[name]
        return sum(grades) / len(grades)
```





```python
book = SimpleGradebook()
book.add_student('Isaac Newton')
book.report_grade('Isaac Newton', 90)
book.report_grade('Isaac Newton', 95)
book.report_grade('Isaac Newton', 85)
print(book.average_grade('Isaac Newton'))
>>>
90.0
```

 Dictionaries and their related built-in types are so easy to use that there's a danger of overextending them to write brittle code. For example, say that I want to extend the SimpleGradebook class to keep a list of grades by subject, not just overall. I can do this by changing the `_grades` dictionary to map student names \(its keys\) to yet another dictionary \(its values\). The innermost dictionary will map subjects \(its keys\) to a list of grades \(its values\). Here, I do this by using a `defaultdict` instance for the inner dictionary to handle missing subjects \(see Item 17: "Prefer defaultdict Over setdefault to Handle Miss ing Items in Internal State" for background\):

