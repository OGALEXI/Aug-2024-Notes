from sum_file import sum, fruit

# sum(5, 4)

# No exports in python, anything that is in the global scope
# can be imported by another file

# print(fruit)

# Decorators
# Very similar to closures
# Functions that return other functions and they typically modify the function they take in

#  function -> decorator -> special function!


def decorator_func(func):
    def manipulated_func(fruit):
        # Oooo other fun stuff
        print(func(fruit))
    return manipulated_func


@decorator_func # Syntactic Sugar
def print_fruit(fruit):
    return "Your fruit is " + fruit

#In the three lines above we are replacing print_fruit with the function returned by decorator_func

# print_fruit = decorator_func(print_fruit) This is replaced by @decorator_func above the function

print_fruit("Pear")

# Decorator functions take in a function, make it pretty, spit it out

# CLASSES
"""
Javascript classes:

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

}

let cat = new Animal("King", 13)

"""
# In python you can use dot notation for class instance dictionaries
# but not regular dictionaries

rando_dog = {'name': 'Rover', 'age': 13}

# print(rando_dog.name) 
print(rando_dog['name'])


class Animal:
    def __init__(self, name, age): #__init__ is a dunder
        self.name = name
        self.age = age

    def breathe(self):
        print(self.name + " took a deep breathe")

    #GETTER
    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age
    
    #SETTER
    def update_name(self, new_name):
        self.name = new_name
        return self.name
    
    def update_age(self, new_age):
        self.age = new_age
        return self.age
    
    def get_info(self):
        return f"Animal(name={self.name}, age={self.age})"

# dog = Animal("Onyx", 13)
# print(dog.name) #We can use dot notation because dog was made by a class
# dog.breathe()
# print(dog.update_name("Onyxxxxx"))
# print(dog.get_info())

# Inheritance in python

class Cat(Animal):
    def __init__(self, name, age=0):
        super().__init__(name, age)
        self._is_evil = True


    def mrow(self):
        print(self.name + " goes mrow")

king = Cat("King", 13)

king.mrow()

print(king._is_evil)


# JAVASCRIPT -> Express (SERVER) Sequelize (ORM, aka allowing us to make queries using js like syntax)

# PYTHON -> Flask (SERVER) SQLAlchemy (ORM, aka allowing us to make queries using python like syntax)

