class Animal:
    def __init__(self, name: str, age: int, breed: str):
        self.name = name
        self.age = age
        self.breed = breed
    def sound(self):
        print("Making some noise")
    
    def sleeping(self):
        print(f"{self.name} is sleeping")
        
    def __str__(self):
        return f'This is {self.name}, it is {self.age} y.o'
        

class Dog(Animal):
    def walking(self):
        print(f"{self.name} is walking")
    def sound(self):
        print("Bark Bark")
    

class Cat(Animal):
    def isitcute(self):
        print("Yes, of course. WYM? ")
        
    def sound(self):
        print("Meow meow")
        