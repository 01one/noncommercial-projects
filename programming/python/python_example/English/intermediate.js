let intermediateExamples = {

  "Simple Class": `# Python class Example 
class Bird:
    def __init__(self, name, species, age):
        self.name = name
        self.species = species
        self.age = age

    def sing(self):		
        print(self.name, 'the', self.species, 'is singing!')

    def fly(self, distance):
        print(self.name, 'flew',distance, 'meters.')

    def current_age(self):
        self.age += 1
        print(self.name, 'You are now', self.age, 'years old.')


# Create instances of the Bird class
#name, species, age
bird1 = Bird("Tweety", "Dove", 2)
bird2 = Bird("Twinkle", "Parrot", 5)

bird1.sing()
bird1.fly(100)

bird1.current_age()`


  
};
