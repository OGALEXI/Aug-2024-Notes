import time
# Python does not use camelCase it uses snake_case

# There is no declaration for variables in python
# This means that variables are either global or function scoped

username = "BobBobert"
# Strings can be indexed 
# get the length using len()
# print(len(username))
# print(username[0])
# print(username[0:4])
# print(username[::-1]) reverse a string
# print(username.index("t"))

# Concatenation
# print("Hello " + "World")
# print("Hello" * 5)

# Interpolation
# print(f"What's up is your name, {username}")

# print(username.upper())
# print(username.lower())

# print(username.split('o'))
# print(list(username))

# Indexing shorthand: variable[start:stop:step]

number_guy = 234.3445

boolean_guy = True
false_bool = False

# LISTS - like Javascript arrays
# fruit_list = ["apple", "orange", "lemon", "lime", "blueberry"]
# print(fruit_list[0])
# print(fruit_list[0:3])
# print(len(fruit_list))
# print(fruit_list.index("apple"))

# joined_fruits = ' '.join(fruit_list)

# print(joined_fruits)

# for picklerick in fruit_list:
#     print(picklerick)

# DICTIONARIES - like Javascript objects
# In python the keys of a dictionary are strings
cat = { 'name': "King", 'age': 13, 'likes_treats': True }

# print(cat)
# print(cat['name'])

# print(cat.keys())
# print(cat.values())

# print(cat['name'], cat['age'])

# TUPLES - Don't exist in javascript
# Immutable lists, you can't change them after creation
# They are denoted by ()

tuple_example = ("apple", "apple", "orange", "lemon")

# print(tuple_example)
# print(tuple_example[2])


# SETS - Javascript new Set()
# denoted by {} but with just commas, no key/value pairs
# You can manipulate them, but you cannot have duplicate values
# They are also unordered

set_example = {"apple", "orange", "lemon", "lime", "blueberry"}

# To add to a set you can use the add method
set_example.add("blackberry")

# print(set_example)

"""
Comparison Operators

>
<
>=
<=
== Strictly Equals
!= Does not equal


PYTHON DOES NOT HAVE LOOSE EQUALITY
Loosely Equals - We're checking if the values are the same and it doesn't matter if the
data types are different.
Example: "5" == 5 -> true

Strictly Equals - Checking if both the data type and the value are the same
Example "5" === 5 -> false
"""

# Logical Operators
# JAVASCRIPT -> && (and) ,  || (or), !(not)

# PYTHON -> and, or, not

num1 = 2
num2 = 7

# if num1 == 2 and num2 == 7:
#     print("Yay")

# Arithmetic Operators
#  +, -, *, /, %

# If statements

# color = "Pink"

# if color == "Blue":
#     print("blue")
# elif color == "Pink":
#     print("Pink!!")
# else:
#     print("idk man")

# While loops

# i = 0

# Since there is no setTimeout like in Javascript you have to import time
# and use time.sleep()
# while i < 9:
#     time.sleep(1)
#     print(i)
#     i += 1
     
# Break vs Continue
# Break keyword is going to stop the loop entirely

# Continue keyword skips the current iteraton but keeps looping

# i = 0

# while i < 9:
#     i += 1
#     if i == 7:
#         continue
#     print(i)


# For loop

fruit_list = ["apple", "orange", "lemon", "lime", "blueberry"]

# for fruit in fruit_list:
#     print(fruit)

# for i in range(len(fruit_list)):
#     print(i)



# Try ... except blocks
#  Similar to javascript try ... catch

# try:
#     print("Hii")
# except TypeError:
#     print("An error occurred")
# except NameError:
#     print("name error")
# except:
#     print("A random error occured")
# else:
#     print("This statement will run if no errors occurr")
# finally:
#     print("This will run after everybody else ")

# Pass keyword allows us to define an empty block of code
color = "Pink"
if color == "Pink":
    pass

# Default params exist in python
# Default params in py must be last
# (if you have any parameters without default values they must come first)

# def sum(x, y=7, g=8): #y will be 7 if a second param is not passed in
#     print(x + y + g)

# sum(5, 5)

# None -> undefined or null

none_var = None
# print(none_var)

# In javascript to make an anonymous function 
# JAVASCRIPT -> let anon = (x, y) => x + y

# In python you need to use the lambda keyword to do this
# It has an implicit return jut like in js 
example_func = lambda x, y: x + y

# print(example_func(5, 5))

# Javascript rest operator
# function sum(x, y, ...nums) {

# }

# Pythons equivalent is *name_of_args

def sum(x,y, *nums):
    sum = x + y
    for i in nums:
        sum += i
    return sum

print(sum(2, 2, 2, 2, 2))