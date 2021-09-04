# D1

![](../../.gitbook/assets/image.png)



#### Windows <a id="windows"></a>

Windows machines usually do not ship with Python installed. Installing on Windows is pretty simple.

1. Download the latest Python 3 Installer from [python.org \(Links to an external site.\)](https://www.python.org/downloads/windows/) \(make sure you pay attention to 32-bit vs. 64-bit and select the right one for your machine\).
2. Run the installer and **make sure you check the box that says "Add Python 3.x to PATH" to ensure that you place the interpreter in your execution path.**

#### Linux <a id="linux"></a>

Most likely, your Linux distribution already has Python installed. However, it is likely to be Python 2 and not Python 3.

You can determine what version you have by opening a terminal and typing `python --version`. If the version shown is `Python 2.x.x`, then you want to install the latest version of Python 3.

The procedure for installing the latest version of Python depends on which distribution of Linux you are running.

Use [this article \(Links to an external site.\)](https://realpython.com/installing-python/#reader-comments) to find instructions specific to your Linux distribution.

#### macOS / Mac OS X <a id="macos--mac-os-x"></a>

Current versions of macOS include a version of Python 2, but you want to be using Python 3.

The best way to install Python 3 on macOS is to use the Homebrew package manager.

**Install Homebrew**

1. Go to [http://brew.sh/ \(Links to an external site.\)](http://brew.sh/) and select the Homebrew bootstrap code under "Install Homebrew" and copy the complete command to your clipboard.
2. Open a terminal window, paste the Homebrew bootstrap code, and hit "Enter."
3. It may take some time to install Homebrew, so you need to wait for that process to complete before moving on.

After Homebrew has finished its installation process, you then need to install Python.

**Install Python**

1. Open a terminal and run the following command `brew install python3`. This command will download and install the latest version of Python.
2. Ensure that everything was installed correctly by opening a terminal window and running the command `pip3`.
3. If you see help text from Python's "pip" package manager, you have a working Python installation.

#### Online Interpreters <a id="online-interpreters"></a>

Here are a few websites that give you online access to the Python interpreter:

* [Repl.it \(Links to an external site.\)](https://repl.it/)
* [Trinket \(Links to an external site.\)](https://trinket.io/)
* [Python Fiddle \(Links to an external site.\)](http://pythonfiddle.com/)
* [Python.org Online Console \(Links to an external site.\)](https://www.python.org/shell)
* [Python Anywhere](https://www.pythonanywhere.com/)

![](../../.gitbook/assets/devider.png)



#### Search and Research <a id="search-and-research"></a>

Before you do anything else, search for a solution to your problem on your own. One thing you should start doing is keeping track of all your research when solving a problem. One easy way to do this is to have a browser window represent a specific search for a solution, and each open tab represents an attempt at solving it. Keeping track of your research is vital because it's helpful to provide examples of similar questions or similar problems and explain why those didn't answer your specific problem or question. It also helps the person answering your question avoid pointing you toward resources you've already explored, and lets them know that you've already put in the work.

#### Introduce the Problem <a id="introduce-the-problem"></a>

The first thing you do when you ask a question￼￼￼￼ is to introduce the problem. The first paragraph of your written question should serve as an executive summary of the problem. All the following paragraphs should fill in the details of the problem.

An important thing to include in your problem introduction is a precise explanation of how you encountered the problem. Write about the difficulties that kept you from solving it. Describe what you already tried and include the results of the research you've done.

You should also provide as much detail about the context as possible. For instance, include the language version, the platform version, the operating system, the database type, specific IDE, and any web server information. You should also include your particular constraints. For example, you may not be allowed to use feature A or B that would provide an obvious solution. If you have an odd constraint, it may also help explain why you have that constraint.

#### Help Others Reproduce the Problem <a id="help-others-reproduce-the-problem"></a>

One thing to remember is that not all questions benefit from including code. However, if you include code, definitely do not just copy in your entire program! By having irrelevant details, you make your question much harder to answer and decrease the chances of someone helping you.

Here are some guidelines for when to include code in your question.

#### **Minimal** <a id="minimal"></a>

Include just enough code to allow others to reproduce your specific problem.￼￼ One way to do this is to restart from scratch. Do not include snippets of your entire program. Instead, create a new program, but only add what's necessary to recreate the problem.

If you aren't exactly sure where the problem code is, one way to find it is by removing code chunks one at a time until the problem disappears — then add back the last part. This way, you can deduce that the last piece of code you added back is likely the source of your problem.

Be careful not to remove too much code, either. Keep your question brief, but maintain enough context for clarity.

#### Complete <a id="complete"></a>

Make sure you include all the portions of the code needed to reproduce the problem. It would be best if you assumed that the person who is answering your question would not write any code to reproduce your issue. Again, remember, do not use images of code—those trying to help you need direct access to the code you include in your question.

#### Reproducible <a id="reproducible"></a>

When you include your code, it's also important to tell the reader exactly what you expect the behavior to be. Be sure to show the reader the exact wording of the error message you encountered \(if there was one\). It's also crucial to double-check that your included example reproduces the problem.

One other thing you can do is create a live example on a site like sqlfiddle.com or jsbin.com. If you do, make sure you also include a copy of your code in your question. Not everyone will utilize the link to the live example.

And to reiterate, do not post images of any code, data, or error messages—reserve images for things like rendering bugs—things that are impossible to describe accurately with just text.

#### Proofread <a id="proofread"></a>

Don't send a question you haven't proofread. When you post your question, you should have already read and reread it, taking care to follow all the best practices and making sure your question makes sense. It would be best if you imagined that you're coming to your question fresh, with no other context but the question itself. You want to make your question as easy for someone to answer as possible. Remember, the reader is likely choosing between several questions they could answer. You want your question to stand out as something concise and approachable. Don't forget to double-check your spelling, grammar, and formatting. Keep it as straightforward as you can; you're not writing a novel.

#### Respond to Feedback <a id="respond-to-feedback"></a>

As feedback and responses to your question begin coming in, respond as quickly as possible. You'll likely receive clarifying questions, and your readers need that clarification to help you.￼￼￼￼

### Follow Along <a id="follow-along"></a>

Now let's look at an example of a question posted to Stack Overflow and analyze it to see if it follows the best practices outlined above.

[The question \(Links to an external site.\)](https://stackoverflow.com/questions/522563/accessing-the-index-in-for-loops):

![https://camo.githubusercontent.com/9be35d94fd27e59fc716b00942c22b5b3438a99a/68747470733a2f2f746b2d6173736574732e6c616d6264617363686f6f6c2e636f6d2f64383031393630662d626530662d346633362d383634612d3564626666616435306631635f53637265656e53686f74323032302d30332d33306174332e31352e3330504d2e706e67](https://camo.githubusercontent.com/9be35d94fd27e59fc716b00942c22b5b3438a99a/68747470733a2f2f746b2d6173736574732e6c616d6264617363686f6f6c2e636f6d2f64383031393630662d626530662d346633362d383634612d3564626666616435306631635f53637265656e53686f74323032302d30332d33306174332e31352e3330504d2e706e67)

The first thing to notice is that the post has a short but descriptive title that adequately summarizes the question.

> Accessing the index in 'for' loops?

Next, did the questioner provide any additional context or proof of the research they've done so far? It doesn't look like it. They could improve the question by including what they tried and the resources they explored.

The questioner did an excellent job of introducing the question and including code that shows what they are trying to do. In this case, they did not need to include experience vs. expected behavior; they just needed to have the expected behavior. By clearly stating what the desired result was, it helped the person answering to respond appropriately.

The code they included is a minimal and complete example, allowing someone to reproduce the problem quickly. The questioner left out irrelevant details and code that would've distracted from the primary question. They also included an example of what the desired output would be, which is helpful.

It appears the questioner proofread their question beforehand as it does not contain any glaring spelling, grammar, or formatting problems. However, we could critique this example for including a redundant sentence at the end. Instead of including that sentence, they might have rephrased the first sentence of the question to be more precise.

### Challenge <a id="challenge"></a>

1. Choose a real-world example from a recent problem/challenge. Use the guidelines and process outlined above to ask for help in your cohort-specific help channel.
2. Identify an unanswered question in your cohort-specific help channel. Do your best to provide a helpful response to that question.
3. Find an example of a **bad** question on Stack Overflow. Analyze the question using the guidelines above and write a short response explaining _why_ you believe it is a **bad** question.
4. Find an example of a **good** question on Stack Overflow. Analyze the question using the guidelines above and write a short response explaining _why_ you believe it is a **good** question.

### Additional Resources <a id="additional-resources"></a>

* [Stack Overflow: How Do I Ask a Good Question? \(Links to an external site.\)](https://stackoverflow.com/help/how-to-ask)
* [Writing the Perfect Question \(Links to an external site.\)](https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/)
* [How to Ask Questions the Smart Way \(Links to an external site.\)](http://catb.org/esr/faqs/smart-questions.html)
* [How to Debug Small Programs \(Links to an external site.\)](https://ericlippert.com/2014/03/05/how-to-debug-small-programs/)

![](../../.gitbook/assets/devider%20%281%29.png)

## Objective 04 - Use a print statement

### Overview <a id="overview"></a>

Learning to use the `print` function in Python is the perfect way to start writing Python code. When learning to write in any new programming language, one of the first things you want to do is get some _output_ from your program. The `print` function is how you output the value of an object to the screen. You will learn how to use the `print` function in Python.

### Follow Along <a id="follow-along"></a>

#### Using `print` with different objects <a id="using-print-with-different-objects"></a>

Let's start by executing the print function to print different types of objects in Python. There are numerous types of objects that you can print using the `print` function.

Using `print` with no arguments:

```text
>>> print()

>>>
```

Notice the empty line after calling the `print` function. The default `end` value when calling print is the newline character `\n`.

Using `print` with a string literal:

```text
>>> print("Lambda School is awesome!")
Lambda School is awesome!
>>>
```

Notice how calling `print` with the string literal printed the exact string we passed in onto the screen.

Using `print` with a variable:

```text
>>> slogan = "i love lamp"
>>> print(slogan)
i love lamp
>>>
```

Notice how calling `print` with the `slogan` variable prints the value assigned to the `slogan` variable.

Using `print` with an expression:

```text
>>> superlative = "wonderful"
>>> school = "Lambda School"
>>> print(school + " is " + superlative)
Lambda School is wonderful
>>>
```

Notice how the argument for the `print` function can be an expression. Once the expression is resolved to a string object, the `print` function can output it to the screen.

Using `print` with other object types:

```text
print(2020)
2020
>>> print(123.456)
123.456
>>> print(False)
False
>>> print(["Lambda", "School", 2, 0, 2, 0])
['Lambda', 'School', 2, 0, 2, 0]
>>> print(("Lambda", "School"))
('Lambda', 'School')
>>> print({"school": "Lambda School", "year": 2020})
{'school': 'Lambda School', 'year': 2020}
>>>
```

Any object passed as an argument into `print` will get converted into a string type before outputted to the screen.

You can see how the `print` function is easy to use and how it can handle any object type that you pass into it.

#### Passing multiple arguments into `print` <a id="passing-multiple-arguments-into-print"></a>

Now, let's look at how we can pass multiple arguments into the `print` function. Using `print` with multiple arguments gives you a flexible and easy way to output items to the screen.

We can pass multiple objects, all of the same or different types, into `print`.

```text
>>> print("Lambda School", 2020, True)
Lambda School 2020 True
>>>
```

Notice how each object we passed in was converted to a string and then output to the screen. Notice also that `print` used `" "` as the default separator value.

We can change the separator value by assigning a value to the keyword argument `sep`.

```text
>>> print("Lambda School", 2020, True, sep="!!!")
Lambda School!!!2020!!!True
>>> print("Lambda School", 2020, True, sep="\t")
Lambda School   2020    True
>>> print("Lambda School", 2020, True, sep="\n")
Lambda School
2020
True
>>> print("Lambda School", 2020, True, sep="")
Lambda School2020True
>>>
```

#### Specifying the `end` value with `print` <a id="specifying-the-end-value-with-print"></a>

You can also specify the `end` value by assigning a value to the `end` keyword argument when you call the `print` function. Being able to print a value to the screen but allow the user to stay on the same line is useful and necessary in some cases.

Here is how you can change the default `end` value \(which is `\n`\) when calling the `print` function.

```text
>>> print("Are you a Lambda School student?", end=" (Y or N)")
Are you a Lambda School student? (Y or N)>>>
```

Customizing the `end` value when calling the `print` function can be useful and necessary in some circumstances.

You have now learned the basics of using the `print` function in Python. You learned how to call the `print` function to print objects of different types. You now know how to use `print` with multiple positional arguments. In certain necessary situations, you also know how to change the default `end` value when calling the `print` function.

Now, get some practice using the `print` function by completing the challenge below.



{% embed url="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-print-3\#main.py" %}







![](../../.gitbook/assets/devider%20%282%29.png)













![](../../.gitbook/assets/devider%20%283%29.png)





![](../../.gitbook/assets/devider%20%284%29.png)





