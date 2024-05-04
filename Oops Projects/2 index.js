
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());
//This JavaScript code defines a hierarchy of classes for representing shapes, specifically circles, with color attributes.

//Here's a breakdown:

//Shape class: This is the base class for all shapes.
// It has a constructor that takes a color parameter and sets the color property accordingly. 
//It also has a method getColor() which returns the color of the shape.
//Circle class: This class extends the Shape class. It adds a radius property to represent the radius of the circle. 

//Its constructor takes two parameters, color and radius, and calls the superclass constructor (super(color)) to initialize the color property.
//ColoredCircle class: This class extends the Circle class. 
//It doesn't add any additional properties or methods of its own, but its constructor calls the superclass constructor (super(color, radius)) passing along the provided color and radius.
//In the end, an instance of ColoredCircle is created with a color of 'blue' and a radius of 5, then the color of the circle is logged to the console using the getColor() method inherited from the Shape class
