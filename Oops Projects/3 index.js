
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());
//Make: Toyota, Model: Camry, Year: 2020
//This JavaScript code defines two classes: Vehicle and Car, and then creates an instance of Car named myCar and logs its information to the console.
//Vehicle is a class with a constructor that takes make and model parameters and assigns them to the object's properties.
//It also has a method getInfo() that returns a string containing the make and model of the vehicle.
//Car is a subclass of Vehicle, meaning it inherits from Vehicle.
//It adds an additional property year to the constructor parameters and assigns it.
//It overrides the getInfo() method of the Vehicle class to include the year along with the make and model. It calls the superclass's getInfo() method using super.getInfo() to get the make and model part and then adds the year to it.