from models import Animal, Dog, Cat

if __name__ == "__main__":
    dog = Dog("Buddy", 5, "Huskey")
    cat = Cat("Luna", 3, "Siamese")
    generic = Animal("Unknown", 1, "Species X")

    animals = [dog, cat, generic]

    for animal in animals:
        print(animal)
        animal.sound()
        animal.sleeping()
        print("-" * 10)

    dog.sound()
    cat.isitcute()

