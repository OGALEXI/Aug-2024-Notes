# Single Line Comment

# Compiled vs Interpreted 

# Computers can't understand programming languages
# Higher level languages

# So we have to turn these languages into Machine Language (binary)

#Two ways to turn programming languages into machine code

#Compiling and interpreting

# Compiling: 

# You take an entire file and turn it into machine code 
# Then once you have that file of machine code you can have the computer run that file
# You cannot any errors at all in order to compile
#Ex: C, C#, C++, Java, Golang, Visual Basic .NET

# Interpreted:

# Go line by line, translates code into machine language and executes it
# This is why you can run lots of code until you hit an error and then it stops running
# Ex: Javascript, Python, PHP, Perl, Ruby

#Instead of a console log we have print statement

#To run a file you say: python3 filename

# print("Hello World")

#PEP 8 is the python bible 
#Pep 8 a giant style guide

# """ This is a documentation string """

# Variables

# In python there is no let, const, or var equivalent

str_guy = "Hello world!!"

num_guy = 45.567657

# Booleans: in  python you have True and False with capital first letters

bool_guy = True

# FUNCTIONS
# JAVASCRIPT function funcName () {}

# Functions do have a keyword, it is def
# No curly braces to define what's inside the function instead
# you have : and indentation

def sum(x, y):
    print(x + y)

# sum(5, 8)

# Strings and arrays
# To find the length of a string call the len() method and pass in your string

len("howdy!")
# print(len("Goobles"))
# print(len(str_guy))

# Indexing into a string is pretty much the same
# "howdy"[2]
# var_guy = "howdy"

# var_guy[2]

# print("Howdy"[0])

# print("Howdy"[0:3]) #Print indices 0 through 3 not included

# print("Howdy"[-1]) #Print the last letter

# print("Howdy"[-3:])

# print("Howdy"[2:])

# JS has indexOf, python has .index()

# print("Howdy".index("H")) #Prints 0

# You can repeat strings very quickly using *

# print("Hi" * 5)

# Concatenation is the same

# print("Beep " + "Boop")

# Interplation in python uses f strings or "format" strings

first_name = 'Bob'
last_name = 'Bobert'

# print(f'Hello {first_name} {last_name}')

# Here is the old way:

# print("Hello {0} {1}".format(first_name, last_name))

# Other string methods
# .toUpperCase() -> python: .upper()
# toLowerCase() -> .lower()

# print("Hello World".split(' '))

# To split by every character

# print(list("Howdy"))

# List creates an array

# LIST === ARRAY

lett_list = ['H', 'o', 'w', 'd', 'y']

# print(''.join(lett_list)) #To join lists into strings

#  Comparison Operators (pretty much the same)

"""
>
<
>=
<=
==
!=

"""

# Logical operators 
#  JAVASCRIPT -> && || !,     PYTHON -> and, or, not

# Control flow in python

# If statements in python

# num_guy2 = 10

# if num_guy2 <= 20:
#     fruit = "apple"
#     print("Less than 20")
# elif num_guy2 >= 20:
#     print("Greater than 20")
# else:
#     print("Probably not a number?")


# i = 0

# while i < 10:
#     print(i)
#     i += 1

# Python For loop there is only one

# for x in ["apple", "lemon", "lime"]:
#     print(x)

'''

for (let i = 0; i < arr.length; i++) {

}

'''

# range in python

fruits = ["apple", "orange", "lemon", "lime", "blueberry"]

# print(range(len(fruits)))

# for i in range(len(fruits)):
#     print(fruits[i])

# for i in "Howdy":
#     print(i)

# nestedArr = [[1, 2], [3, 4]]

# for x in nestedArr:
#     print("ITeration: ", x)

# In Python objects are called dictionaries

cat = { 'name': 'King', 'age': 13, 'breed': 'cow'}

# print(cat['name'])

#  Python is HUGE on getters and setters

# def getStuffOut(obj, key):
#     return obj[key]

# print(cat.get('name'))

# Reassignment
cat['name'] = 'Kingifer'

# print(cat)

# print(cat.values())


# Iterating over a dictionary
# Automatically iterates over the keys of the dict
# for x in cat:
#     print(x)

# for x in cat.keys():
#     print(x)


# for x in cat.values():
#     print(x)


# Tuples!!!

# Tuples cannot be changed after creation
# Can contain duplicates
# in python you use () to create a tuple

tuple_guy = ("apple", "orange", "lemon", "lime", "blueberry")

# print(tuple_guy[0])

# print("apple" in tuple_guy) # Return true if this thing is in the tuple

# CANNOT REASSIGN
# tuple_guy[0] = "notApple"
# print(tuple_guy)

# SET 
# No duplicates, no order

fruits_set = {"apple", "orange", "lemon", "lime", "blueberry"}

print(fruits_set)

fruits_set.add("apple") #Can't add duplicates
print(fruits_set)


# LIST (Array) list = ["apple"] 
# CAN have duplicates, has indicies, and you can change it

# Tuple like a list, tuple = ("apple")
# Can have duplicates but it can NEVER BE CHANGED

# SET like a list, set = {"apple"}
# CANNOT HAVE DUPLICATES and it has no order, therefore no indices

