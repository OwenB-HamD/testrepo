/* 
REPL: - Read, Evaluate, Print, Loop

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
-   Bigint = Used for really large numbers.

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

Built-In Objects: -
-   If we wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in 'Math' object.
-   If we use the '.random()' method, this will return a random number between and 0 and 1. To generate a random number between 0 and 50, we could multiply the reulst by 50 'console.log(Math.random()) * 50;'.
-   This example is likely to evaluate to a decimal. To ensure that the answer is a whole number, we can use another 'Math' method called 'Math.floor()' to round down a number 'console.log(Math.floor(Math.random() * 50));'.
-   In this case, 'Maths.random' generates a random number between 0 and 1. We then multiply that number by 50 which will now give us a number between 0 and 50. Then, 'Math.floor()' rounds the number down to the nearest whole number. If we wanted to see the number printed to the terminal, we would still need to us the 'console.log()' statement at the beginning of the code.

Variables: -
-   A 'variable' or 'var' is a container for a value and creates or declares a new variable.
-   In short, variables label and store data in memory. There are only a few things you can do with variables: Create a variable with a decriptive name, store or update information stored in a variable and reference or "get" information stored in a variable.
-   The name of the variable always follows the camel casing capitalisation (camelCaseEverything).

There are are few general rules for naming variables:
-   Variable names cannot start with numbers.
-   Variable names are case sensitive, so 'myname' and 'myName' would be different variables. It is bad practice to create two variables that have the same name using different cases.
-   Variable names cannot be the same as keywords.

-   The 'let' keyword signals that the variable can be reassigned a different value.
-   Another thing that we should be aware of when using 'let' and even 'var' is that we can declare a variable without assigning the variable a value. In that case, the variable will be automatically initialised with a value of 'undefined'.

-   The 'const' keyword is short for 'constant'.
-   Just like with 'var' and 'let' you can store any value in a 'const' variable. The way you declare a const variable and assign a value to it follows the same structure as 'let' and 'var'.
-   However, a 'const' variable cannot be reassigned because it is constant. If you try to reassign a 'const' variable you will get a 'TypeError'.
-   Constant variables must be assigned a value when declared. If you try to declare a 'const' variable without a value, you will get a 'SyntaxError'.
-   Think about which keyword to use, if you think you will need to reassign the variable later on, use 'let' instead of 'const'.

Increment & Decrement Operators: -
-   Increment Operator (++) and Decrement Operator (--).
-   The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1.

String Concatenation with Variables: -
-   The '+' operator can be used to combine two string values even if those values are being stored in variables.

String Interpolation: -
-   We can insert, or 'interpolate', vairables into strings using 'template literals'.
-   A template literal is wrapped in backticks (``).
-   Inside of the template literal, the placeholder is included in the format of '${placeholder}'. The value of 'placeholder' is inserted into the template literal.

Typeof Operator: -
-   While writing code, it can be useful to keep track of the data types of variables in your program.
-   If you need to check the data type of a variable's value, you can use the 'typeof' operator.
-   The 'typeof' operator checks the value to its right and 'returns', or passes back, a string of the data type.

Conditional Statements: -
-   A conditional statement checks a specific condition(s) and perfomrs a task based on the condition(s).

If Statement: -
-   Some tasks can be performed based on an 'if' statement.
-   The 'if' statement is composed of:
    -   The 'if' keyword followed by a set of parentheses which is followed by a 'code block' or 'block statement', indicated by a set of curly braces '{}'.
    -   Inside the parentheses, a condition is provided, e.g. true or false.
    -   Depending on the desired condition, the code inside of the curly braces runs, or executes.
    -   If the condition does not evaluate to the desired outcome, the block won't execute.

If Else Statements: -
-   If we wanted to add a default behaviour to an 'if' statement, we can add an 'else' statement to run a block of code when the condition evaluates to the opposite of the 'if' statement.
-   An 'else' statement must be paired with an 'if' statement and together they are referred to as an ' if else' statement.
-   'If else' statements allow us to automate solutions to yes-or-no questions, also known as 'binary decisions'.

Comparison Operators: -
-   When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are known as 'comparison operators'.
-   These are some of the handy comparison operators and their syntax:
        -   Less than:                  <
        -   Greater than:               >
        -   Less than or equal to:      <=
        -   Greater than or equal to:   >=
        -   Is equal to:                ===
        -   Is not equal to:            !==
-   Comparison operators compare the calue on the left with the value on the right.

Logical Operators: -
-   Logical Operators are operators that work with boolean values in JavaScript.
-   We can use logical operators to add more sophisticated logic to our conitionals.
-   There are three logical operators:
        -   The 'and' operator:                 &&
        -   The 'or' operator:                  ||
        -   The 'not' or 'bang' operator:       !

-   When we use the && operator,, we are checking that two conditions are 'true' therefore meaning that both conditions must be 'true' for the entire condition to evaluate to 'true' and execute. Otherwise, if either condition is 'false', the '&&' condition will evaluate to 'false' and the 'else' block will execute instead.

-   When using the '||' operator, only one of the conditions must evaluate to 'true' for the overall statement to evaluate to 'true'.
- If the first condition in an '||' statement evaluates to 'true', the second condition won't even be checked. Only if the first condition evaluates to 'false' will the second condition be evaluated. The code in the 'else' statement afterwards will only execute if both of the comparisons evaluate to 'false'.

-   The '!' operator reverses or 'negates' the value of a boolean.
-   Essentially, the '!' operator will either take a true value and pass back 'false' or it will take a 'false' value and pass back 'true'.
-   Logical operators are often used in conditional statements to add another layer of logic to our code. 

Truthy & Falsey: -
-   Sometimes, we may want to check if a variable exists and we won't necessarily want it to equal a specific value, we will only check to see if the variable has been assigned a value. For example:
            -   let myVariable = 'I Exist!';
 
                if (myVariable) {
                    console.log(myVariable)
                } else {
                    console.log('The variable does not exist.')
}
-   The code block in the 'if' statement will run because 'myVariable' has a truthy value even though the value of 'myVariable' is not explicitly 'true', when used in a boolean or conditional context, it evaluates to 'true' because it has been assigned a non-falsy value.
-   The list of falsy values include:
        -   '0'
        -   Empty strings like "" or ''
        -   'null' which represents when there is no value at all
        -   'undefined' which represents when a declared variable lacks a value
        -   'NaN' or Not a Number

Ternary Operators: -
-   We can use a ternary operator to simplify an 'if else' statement. For example:
        -    let isNightTime = true;
 
             if (isNightTime) {
               console.log('Turn on the lights!');
             } else {
               console.log('Turn off the lights!');
             }

Becomes:

             isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

-   In the example above:
             -  The condition, 'isNightTime', is provided before the '?'.
             -  Two expressions follow the '?' and are separated by a colon.
             -  If the condition evaluates to 'true', the first expression executes.
             -  If the condition evaluates to 'false', the second expression executes.
-   Like 'if else' statements, ternary operators can be used for conditions which evaluate to 'true' or 'false'.

Else IF Statements: -
-   We can add more conditions to our 'if else' statement with an 'else if' statement.
-   The 'else if' statement allows for more than two possible outcomes. You can add as many 'else if' statements as you'd like. 
-   The 'else if' statement comes after the 'if' statement and before the 'else' statement. The 'else if' statement also takes a condition.

The 'Switch' Keyword: -
-   If we need to check a large number of values, a 'switch' statement provides an alternative with it's own syntax and is easier to read and write.
-   For example:
             -  let groceryItem = 'papaya';
 
                switch (groceryItem) {
                  case 'tomato':
                    console.log('Tomatoes are $0.49');
                    break;
                  case 'lime':
                    console.log('Limes are $1.49');
                    break;
                  case 'papaya':
                    console.log('Papayas are $1.29');
                    break;
                  default:
                    console.log('Invalid item');
                    break;
                }
-   The 'switch' keyword initiates the statement and is followed by (...), which contains the value that each 'case' will compare.
-   Inside the block '{...}', there are multiple 'case's. The 'case' keyword checks if the expression matches the specified value that comes after it. The value following the first 'case' is 'tomato'. If the value of 'groceryItem' equalled 'tomato', that 'case's 'console.log' would run.
-   The value of 'groceryItem' is 'papaya', so the third case runs 'papyas are $1.29', this is logged to the console.
-   The 'break' keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block.
-   At the end of each 'switch' statement, there is a 'default' statement. If none of the 'case's are true, then the code in the 'default' statement will run. 

Function Declarations: -
-   One way to create a function in JavaScript is by using a 'function declaration'.
-   Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name or an 'identifier'.
-   A function declaration consists of:
                -   The 'function' keyword
                -   The name of the function, or it's identifier, followed by parentheses.
                -   A function boy, or the block of statements required to perform a specific task, enclosed in the function's curly brackets.
-   A function declaration is a function that is bound to an identifier, or name.
-   We should also be aware of the 'hoisting' feature in JavaScript which allows access to function declarations before they're defined (this isn't considered good practice).

Calling A Function: -
-   A 'function declaration does not ask the code inside the function body to run, it just declares the existence of the function.
-   The code inside a function body runs, or 'executes', only when the function is 'called'.
-   To call a function in your code, you type the function name followed by parentheses.

Parameters and Arguments: -
-   When declaring a function, we can specify it's 'parameters'.
-   Parameters allow functions to accept input(s) and perform a task using the input(s).
-   We use parameters as placeholders for information that will be passed to the function when it is called.
-   When calling a function that has parameters, we specify the values in the parentheses that follow the function name.
-   The values that are passed to the function when it is called are called 'arguments'.
-   Arguments can be passed to the function as values or variables.

Default Parameters: -
-   Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is 'undefined' when called.

Return: -
-   When a function is called, the computer will run through the function's code an evaluate the result of calling the function. By default that resulting value is 'undefined'.
-   To pass back information from the function call, we use a return statement. 
-   To create a return statement, we use the 'return' keyword followed by the value that we wish to return.
-   When a 'return' statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed.

Helper Functions: -
-   We can also use the return value of a function inside another function.
-   Tjese functions being called within another function are referred to as 'helper functions'.
-   Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
-   For example, if we wanted to define a function that converts the temperature from Celcius to Fahrenheit, we could write two functions like:
                -   function multiplyByNineFifths(number) {
                      return number * (9/5);
                    };
 
                    function getFahrenheit(celsius) {
                      return multiplyByNineFifths(celsius) + 32;
                    };
 
                    getFahrenheit(15); // Returns 59
-   In the example above:
                    -   'getFahrenheit()' is called and '15' is passed as an argument.
                    -   The code block inside of 'getFahrenheit()' calls 'multiplyByNineFifths()' and passes '15' as an argument.
                    - 'multiplyByNineFifths()' takes the argument of '15' for the 'number' parameter.
                    -   The code block inside of 'multiplyByNineFifths' function multiplies '15' by '(9/5)', which evaluates to '27'.
                    - '27' is returned back to the function call in 'getFahrenheit()'.
                    -   'getFahrenheit()' continues to execute. it adds '32' to '27', which evaluates to '59'.
                    -   Finally, '59' is returned back to the function call 'getFahrenheit(15)'.
-   We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

Function Expressions: -
-   Another way to define a function it to use a 'function expression'. To define a function inside an expression, we can use the 'function' keyword.
-   In a function expression, the function name is usually ommitted. A function with no name is called an 'anonymous function'.
-   A function expression is often stored in a variable i order to refer to it.
-   To declare a function expression: -
                    - Declare a variable to make the variable's name be the name, or identifier, of your function. It is common practice to use the 'const' as the keyword to declare a variable.
                    - Assign as that variable's value an anonymous function created by using the 'function' keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.
-   To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

Objects: -
-   Objects are essentially a set of properties.
-   
*/