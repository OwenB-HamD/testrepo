/* 
Console: - 
-    The console is a panel that displays important messages, like errors. In JavaScript, the 'console' keyword refers to an object, a collection of data and actions, that we can use in our code. Keywords are words that are built into the JavaScript language, so the computer recognises them and treats them specifically.
-    .log() = When we write console.log() what we put inside the parenthesis will get printed or logged to the console.
      For example, console.log(24) will print '24' in the console.

Data Types: -
Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types: -
-   Number = Any number, including numbers with decimals.
-   String = Any grouping of characters on your keyboard surrounded by single quotes ('...') or double quotes ("..."), mostly single quotes.
-   Boolean = This data type only has two possible values either "true" or "false". It's helpful to think of booleans as on and off switches or at the answeers to "yes" or "no" questions.
-   Null = This data type represents the intentional absence of a value and is represented by the keyword "null".
-   Undefined = This data type is denoted by the keyword "undefined". It also represents the absence of a value though it has a different use than "null". "Undefined" means that a given value does not exist.
-   Symbol = A newer feature to the language, symbols are unique identifiers, useful in more complex coding.
-   Object = Collections of related data.

The above are considered 'primitive'data types. They are the most basic data types in the language. "Objects" are more complex.

Arithmetic Operators: -
-   An 'operator' is a character that performs a task in our code.
-   JavaScript has several built-in arithmetic operators that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:
-   Add = +
-   Subtract = -
-   Multiply = *
-   Divide = /
-   Remainder = %

When we use 'console.log()', the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters of '3+4' we would wrap them in quotes and print them as a string instead.

The remainder operator, sometimes known as 'modulo', returns the number that reains after the right-hand number divides into the left-hand number as many times as it evenly can. For example, '11 % 3" equals 2 because 3 fits into 11 three times and leaves 2 as the remainder.

String Concatenation: -
-   Operators aren't just for numbers, when a '+' operator is used on two strings, it appends the right string to the left string. For example, 'console.log('hi'+'ya');' will print 'hiya'.
-   The process of appending one string to another is called 'concatenation'. The computer will join the string exactly, therefore, we need to make sure to include the space we wanted between the two strings.

Properties: -
-   When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. All data types have access to specific properties that are passed down to each instance. For example, every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name.
- The 'dot' '.' is another operator. For example, console.log('Hello'.length);' will print 5 as the string contains 5 characters.

Methods: -
-   Methods are actions that we can perform. Data types have access to specific methods that allow us to handle instances of that data type. JavaScript provides a number of string methods. The way we use these methods is to; include a dot operator before the method, use the name of the method then opening and closing parentheses afterwards. For example, 'example string'.methodName()'.
- Another example would be 'console.log()'. When we use this, we are using the '.log()' method on the 'console' object.
*/