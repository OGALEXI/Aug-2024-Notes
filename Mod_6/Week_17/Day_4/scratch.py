# Recap Academy

# No keywords to define variables
# All variables are either globally scoped or function scoped

str_var = 'ajsdlasjdlajsd'
str_var2 = "asdljalskjdlaksjdlkj"

# Concatenate in python
new_str = "Hello " + "World"

fruit = "apple"
int_str = f"My favorite fruit is {fruit}!"
non_int_str = "My favorite fruit is {fruit}"

# print(non_int_str)


fruit2 = "banana"
# print(f"{fruit2 = }") #Syntactic sugar

# To get the length of a string call len(string)
# print(len(fruit2))

# String also have indices in python
# We can use the indices to slice
# print(fruit2[1]) #'a'

# print(fruit2[1:]) # 'anana'

# print(fruit2[-2:]) #'na'

bool_guy = True
bool_2 = False

numbie = 24345.345345

# None or NoneType

nothing = None

# LISTS - (JS - Array)
# []
fruits = ["apple", "orange", "lemon", "lime", "blueberry"]

fruits.append("guava") #Js push()

last_fruit = fruits.pop() 

fruits.insert(0, "huh") #SHIFT
fruits.pop(0) #UNSHIFT

# print(fruits)
# print(last_fruit)
#to get the len()
#to index fruits[0]
# print(fruits[0:3])

# Dictionaries - (JS - Object)

cat = { 'name': 'King', 'age': 13, 'isEvil': True }
# print(cat)
# To access individual values from the dictionary use bracket notation
# YOU CAN'T USE DOT NOTATION

# print(cat['name'])

# Tuples - (doesn't exist natively in JS)
# Constant lists (lists that can never be changed)
# You cannot update, add, delete
#  ()

tuple_guy = ("apples", "oranges", 13, True, "apples")

# print(tuple_guy)

# SETS - (in JS - new Set())
# List like structure WITH NO ORDER (no indices)
# and NO DUPLICATES
#  {}

# If you try to give it a duplicate it will ignore it
set_guy = { "apple", "orange", "lemon", "apple" }

# print(set_guy)

set_guy.add("appley") #Set method

# print(set_guy)

# Functions
# Keyword to define is def
"""
SYNTAX

def funcName(params):
    stuff

funcName(args)
"""

def sum(x, y):
    return x + y

# print(sum(5, 4))


# If statements
# in python else if is elif

# color = "pink"

# if color == 'pink':
#     print("Yay pink")
# elif color == 'blue':
#     print("bluueee")
# elif color == "orange":
#     print("huh")
# else:
#     print("Idk what color that is")

# While loop

# i = 0

# while i < 5:
#     print(i)
#     i += 1

# For loop

# for x in fruits:
#     print(x)

# for i in range(0, len(fruits), 2): #Increment by 2
#     print(i)

new_list = [x for x in fruits if "m" in x]

# print(new_list)

# import in javascript

# import object from './scratch.js';
# # importing in python
# from scratch import object

# No exports in python, anything that is globally accessible can be imported
# by another file

# Decorators - they take in a function, make it pretty, spit out the new func
# You have to make a function that takes in a function and returns a new one
user = { 'name': 'bob' }

def decorator_func(func):
    def inner_func(new_name):
        user['name'] = new_name
        func(new_name)
        return user
    return inner_func
        

@decorator_func
def update_user(new_name):
    print(new_name)

# print(update_user('Bob Bobert'))

# Classes in python

class Car:
    def __init__(self, make, model, year, price):
        self.make = make
        self.model = model
        self.year = year
        self.price = price

    def breakdown(self):
        print(f"{self.make} {self.model} has broken down on the high way!")


bmw_guy = Car("BMW", "m3", 2005, 15000)

# You CAN use dot notation for instances of a class
# print(bmw_guy.price)

bmw_guy.breakdown()

# Inheritance in python

class Motorcycle(Car):
    def __init__(self, make, model, year, price, ccs):
        super().__init__(make, model, year, price)
        self.ccs = ccs

r6 = Motorcycle("Yamaha", "r6", "2016", 10000, 600)

print(r6.ccs)
print(r6.make)