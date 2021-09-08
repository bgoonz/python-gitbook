# Python3 Regex

Regex or Regular Expressions are an important part of Python Programming or any other Programming Language. It is used for searching and even replacing the specified text pattern. In the regular expression, a set of characters together form the search pattern. It is also known as reg-ex pattern. Tough thing about Regex is not learning or understanding it but remembering syntax and how to form pattern according to our requirements. So here we have provided a regex cheat sheet containing all the different character classes, special characters, modifiers, sets etc. which are used in regular expression.

#### Basic Characters:

| Expression  | Explanations |
| :--- | :--- |
| **^** | Matches the expression to its right, at the start of a string before it experiences a line break |
| **$** | Matches the expression to its left, at the end of a string before it experiences a line break |
| **.** | Matches any character except newline |
| **a** | Matches exactly one character a |
| **xy** | Matches the string xy |
| **a\|b** | Matches expression a or b. If a is matched first, b is left untried. |

**Example:**Python3

```text
import re

print(re.search(r"^x","xenon"))
print(re.search(r"s$","geeks"))
```

**Output:**

```text
<re.Match object; span=(0, 1), match='x'>
<re.Match object; span=(4, 5), match='s'>
```

**Explanation:**

First import the regex module with the command **import re**

Then, in the first example, we are searching for “**^x”** in the word **“xenon”** using regex. **^** this character matches the expression to its right, at the start of a string. So, **^x** will search for character x in the beginning of the string. Since **xenon** starts with **x,** it will find the match and will return the match\('x'\) and its position\(0,1\)

Similarly, in the second example **s$** will search for the character **s** at the end of the string, now since geeks end with **s**, so it will find the match and will return the match\('s'\) and its position\(4,5\).

#### Quantifiers:

| Expressions | Explanations |
| :--- | :--- |
| **+** | Matches the expression to its left 1 or more times. |
| **\*** | Matches the expression to its left 0 or more times. |
| **?** | Matches the expression to its left 0 or 1 times |
| **{p}** | Matches the expression to its left p times, and not less. |
| **{p, q}** | Matches the expression to its left p to q times, and not less. |
| **{p, }** | Matches the expression to its left p or more times. |
| **{ , q}** | Matches the expression to its left up to q times |

Their default searching method is Greedy. But if ? is added to qualifiers \(+, \*, and ? itself\) it will perform matches in a non-greedy manner.

**Examples:**Python3

```text
import re

print(re.search(r"9+","289908"))
print(re.search(r"\d{3}","hello1234"))
```

**Output:**

```text
<re.Match object; span=(2, 4), match='99'>
<re.Match object; span=(5, 8), match='123'>
```

**Explanation:**

In the first example, **9+** will search for the number **9** one or more times. Since **289908** contains **9** two times, the regex will match it and will print the match\('99'\) and its position\(2,4\)

In the second example, **\d{3}** will search for digits exactly 3 times. Since **hello1234** have digits, it will match exactly 3 digits which will be encountered first that are 123 and not 4, because **{3}** will match for exactly 3 digits. So it will print the match\('123'\) and its position\(5,8\)

#### Character Classes:

| Expressions | Explanations |
| :--- | :--- |
| **\w**  | Matches alphanumeric characters, that is a-z, A-Z, 0-9, and underscore\(\_\) |
| **\W** | Matches non-alphanumeric characters, that is except a-z, A-Z, 0-9 and \_ |
| **\d** | Matches digits, from 0-9. |
| **\D**  | Matches any non-digits. |
| **\s** | Matches whitespace characters, which also include the \t, \n, \r, and space characters. |
| **\S** | Matches non-whitespace characters. |
| **\A** | Matches the expression to its right at the absolute start of a string whether in single or multi-line mode. |
| **\Z**  | Matches the expression to its left at the absolute end of a string whether in single or multi-line mode. |
| **\n** | Matches a newline character |
| **\t** | Matches tab character |
| **\b** | Matches the word boundary \(or empty string\) at the start and end of a word. |
| **\B** | Matches where \b does not, that is, non-word boundary |

**Examples:**Python3

```text
import re

print(re.search(r"\s","xenon is a gas"))
print(re.search(r"\D+\d*","123geeks123"))
```

**Output:**

```text
<re.Match object; span=(5, 6), match=' '>
<re.Match object; span=(3, 11), match='geeks123'>
```

**Explanation:**

In the first example, **\s** will search for the blank space and whenever it encounters the first blank space it will print out that match. Since **xenon is a gas** that contains blank spaces, it will encounter the first blank space and print out that match\(' '\) and its position\(5,6\)

In the second example, **\D+\d\*** will search for one or more non-digits characters followed by 0 or more digits. In our case, **geeks123** best fits the description as it contains 1 or more non-digits characters\(geeks\) followed by 0 or more digit characters\(123\). So it will print the match\('geeks123'\) and its position\(3,11\).

#### Sets:

| Expressions | Explanations |
| :--- | :--- |
| **\[abc\]** |  Matches either a, b, or c. It does not match abc. |
| **\[a-z\]** | Matches any alphabet from a to z. |
| **\[A-Z\]** | Matches any alphabets in capital from A to Z |
| **\[a\-p\]** | Matches a, -, or p. It matches - because \ escapes it. |
| **\[-z\]** | Matches - or z |
| **\[a-z0-9\]** | Matches characters from a to z or from 0 to 9. |
| **\[\(+\*\)\]**  | Special characters become literal inside a set, so this matches \(, +, \*, or \) |
| **\[^ab5\]**  | Adding ^ excludes any character in the set. Here, it matches characters that are not a, b, or 5. |
| **\\[a\\]** | Matches \[a\] because both parentheses \[ \] are escaped  |

**Examples:**Python3

```text
import re

print(re.search(r"[^abc]","abcde"))
print(re.search(r"[a-p]","xenon"))
```

**Output:**

```text
<re.Match object; span=(3, 4), match='d'>
<re.Match object; span=(1, 2), match='e'>
```

**Explanation:**

In the first example, **\[^abc\]** will search for anything except a, b and c, so regex will match the first character which is not a or b or c and will print out that match. Since **abcde** contains **d** as its first match that is neither a nor b nor c, it will print out that match. So match would be \('d'\) and its position would be \(3,4\)

In the second example, **\[a-p\]** will search for the character between a to p. In **xenon** the first word between a-p is **e** it will print out that search. So match would be \('e'\) and its position would be \(1,2\)

#### Groups:

| Expressions | Explanations |
| :--- | :--- |
| **\( \)** | Matches the expression inside the parentheses and groups it which we can capture as required |
| **\(?\#...\)** | Read a comment |
| **\(?PAB\)** | Matches the expression AB, which can be retrieved with the group name. |
| **\(?:A\)** | Matches the expression as represented by A, but cannot be retrieved afterwards. |
| **\(?P=group\)** |  Matches the expression matched by an earlier group named “group” |

**Examples:**Python3

```text
import re

example = (re.search(r"(?:AB)","ACABC"))
print(example)
print(example.groups())

result = re.search(r"(\w*), (\w*)","geeks, best")
print(result.groups())
```

**Output:**

```text
<re.Match object; span=(2, 4), match='AB'>
()
('geeks', 'best')
```

**Explanation:**

In the first example, **\(?:AB\)** will search and matches the expression **AB** and will print out the match and its position. Since **ACABC** contains **AB,** it will print the match\('AB'\) and its position\(2,4\) but as stated, this cannot be retrieved afterward. So, if we try to print the group of the output, it will show an empty bracket.

In the second example, we have captured two groups, one group which has 0 or more alphanumeric characters followed by comma and space and then followed by another group which has again 0 or more alphanumeric characters. In **geeks, best geeks** and **best** are captured as the first and second groups. So, when we print out these groups we will have \('geeks', 'best\) as the groups captured. 

#### Assertions:

| Expression | Explanation |
| :--- | :--- |
| **A\(?=B\)** | This matches the expression A only if it is followed by B. \(Positive look ahead assertion\) |
| **A\(?!B\)** | This matches the expression A only if it is not followed by B. \(Negative look ahead assertion\) |
| **\(?&lt;=B\)A** | This matches the expression A only if B is immediate to its left.  \(Positive look behind assertion\) |
| **\(?&lt;!B\)A**  | This matches the expression A only if B is not immediately to its left. \(Negative look behind assertion\) |
| **\(?\(\)\|\)** | If else conditional |

**Examples:**Python3

```text
import re

print(re.search(r"z(?=a)", "pizza"))
print(re.search(r"z(?!a)", "pizza"))
```

**Output:**

```text
<re.Match object; span=(3, 4), match='z'>
<re.Match object; span=(2, 3), match='z'>
```

**Explanation:**

In the first example, **z\(?=a\)** will search for the character z which is followed by the character a. Since in **pizza,** we have a character **z** which is immediately followed by the character **a** \(piz**za**\), so there will be a match. Regex will print the match\('z'\) which is followed by **a** with its position\(3,4\)

In the second example, **z\(?!a\)** will search for the character **z** which is **not** followed by the character **a.** Since in **pizza,** we have a character **z** which is not followed by **a** but followed by **z** \(pi**zz**a\), so there will be a match. Regex will print the match\('z'\) not followed by **a** with its position \(2,3\)

#### Flags:

| Expression | Explanation |
| :--- | :--- |
| **a** | Matches ASCII only |
| **i**  | Ignore case |
| **L** | Locale character classes |
| **m** | ^ and $ match start and end of the line \(Multi-line\) |
| **s** | Matches everything including newline as well |
| **u** |  Matches Unicode character classes |
| **x** | Allow spaces and comments \(Verbose\) |

**Examples:**Python3

```text
import re

exp = """hello there
I am from
Geeks for Geeks"""

print(re.search(r"and", "Sun And Moon", flags=re.IGNORECASE)) 
print(re.findall(r"^\w", exp, flags = re.MULTILINE))
```

**Output:**

```text
<re.Match object; span=(4, 7), match='And'>
['h', 'I', 'G']
```

**Explanation:**

In the first example, the IGNORECASE flag will search for the word **and** irrespective of its case \(whether uppercase or lowercase\), So it ignores the case and matches **And** in the expression. So it will print the match\('And'\) and its position\(4,7\)

In the second example, the MULTILINE flag will search in each and every line and will match when the line is starting an alphanumeric character. Since in Multi-line **hello there I am from Geeks for Geeks,** every line is starting with an alphanumeric character, so it will match every line and will print the match in an array \(\['h', 'I', 'G'\]\).

Note: In MULTILINE flag, we have to use re.findall, since it has many matches \(for every line\)

