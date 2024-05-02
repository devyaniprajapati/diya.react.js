
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

//This JavaScript code defines two classes: Animal and Dog.

//Animal Class:
//The Animal class has a constructor that takes one parameter, name, and assigns it to a property with the same name.
//It has a method called speak() that logs a message indicating that the animal makes a noise, using the name property.
//Dog Class (Extends Animal):
//The Dog class extends the Animal class, inheriting its properties and methods.
//It overrides the speak() method of the Animal class.
//The overridden speak() method logs a message indicating that the dog barks, using the name property inherited from the Animal class.
//Finally, an instance of the Dog class named dog is created with the name "Buddy". The speak() method of dog is called, and it logs the message "Buddy barks." to the console.