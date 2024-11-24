function Person (name, age) {
    this.name = name;
    this.age = age;
}

function Car (company, model) {
    this.company = company;
    this.model = model;
}

// this let's you know the context of function
// here this & new have internal linking thus possible to access the internal variable
/* this Keyword: Refers to the object being created.
Instantiated with new: When new is used, it:
Creates a new empty object.
Sets the object's prototype to the constructor's prototype property.
Calls the constructor function with this pointing to the new object.
Returns the new object (implicitly). */

let myCar = new Car("Toyota", "Camry")
console.log(myCar);
//new is referring to the newly created object

let myNewCar = new Car("Volkswagan", "Polo")
console.log(myNewCar);

function tea(type) {
    this.type = type;
    this.describe = function () {
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new tea("lemon tea")
console.log(lemonTea);
console.log(lemonTea.describe())

function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let dog = new Animal("dog")
console.log(dog.sound());

// code with custom error that checks new keyword is used or not
function Drink(name) {
    if (!new.target) {
        throw new Error("Drink ust be called with new Keyword");
    }
    this.name = name;
}

let mytea = new Drink("Tea")
let mycoffee = Drink("coffee") // on this line error will appear
