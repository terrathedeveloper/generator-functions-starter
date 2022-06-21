# generator-functions-starter
Starter file for generator functions lecture

Lecture Interview
The lecture interview is a 10-minute presentation that covers the three following learning objectives. The student profile to which you would give the lecture follow the learning objectives.

The learning objectives
Consider these three performance-based learning objectives.
The student will be able to write a generator function with a parameter that accepts a 2-dimensional rectangular list and generates the sequence of elements returned one at a time of the transpose of the array navigated in row-first order.
The student will be able to write in the idiom of the language the creation of a new list that is populated with the contiguous pairwise sums of the elements of an iterable.
The student will be able to find two consecutive values in a list that sum to a specified value
The first learning objective would create a generator function that accomplishes the following:

Input: A 2-d rectangular list. An example is `[[1, 2, 3], [6, 5, 4]]`.
Output: The sequence of the transpose. For the given example, the sequence is 1, 6, 2, 5, 3, 4.

The second learning objective would transform a list into pairwise sums of contiguous entries:

Input: A list of values. An example is [1, 9, 2, 4, 1, 4].
Output: The pairwise sums of the elements. For the given example, the return value is a list containing [10, 11, 6, 5, 5].

The third learning objective would find two consecutive entries in a list (it doesn’t have to be unique) that sum to a specified value.

Input: A list of values and a target sum. An example is a list [1, 9, 2, 4, 7, 4] and a specified target sum of 11.
Output: The procedure will identify any of these pairs: (9, 2), (2, 9), (4, 7), or (7, 4)

The student profile
 - At this point in the course, you can rely on the student’s pool of  knowledge to contain the following skills.
 - Can use a text editor
 - Can run the unit tests for a programming challenge using pytest for Python or Jest for JavaScript
 - Can declare, initialize, and use variables
 - Can use all scalar values and objects built into the programming  - language’s core
 - Can use Boolean, arithmetic, and comparison operators
 - Can build compound truthy expressions
 - Can use conditional and flow-control structures, basically if and all of the loops
 - Can use list comprehensions in Python, can use for-of loops in  JavaScript
 - Can declare and invoke functions
 - Can use functions as first-class objects, that is, can pass  functions as parameters, invoke those functions within functions  they declare, and write functions that have functions as return  values
 - Can directly invoke methods on objects
 - Can recall and use the built-in methods to interact with lists in  - Python (built-in functions) or arrays in JavaScript (Array.prototype  methods)