/*Object oriented paradigm - it's a paradigm of writing code where concepts of objects comes into the picture, we want to create objects are the instances of classes

In world of JS every things is a object, even classes under the hood are objects. Core implementation of class is an object
*/
let car = {
    brand: "Volkswagan",
    model: "Polo",
    year: 2022,

    start: function () {
        return`${this.brand}'s ${this.model} was dicontinued on year ${this.year}.`
    }
}

console.log(car.start());
//out: Volkswagan's Polo was dicontinued on year 2022.
//the above code is limited to only one useacse, instead we can make constructor function for multile usage of function

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.describe = function () {
        return `The ${this.brand} brand makes ${this.model} model`
    }
}
let camry = new Car("Toyota", "Camry")
console.log(camry.describe());

function Animal(animal) {
    this.animal = animal
}
//prototypal chain
Animal.prototype.speak = function () {
    return `${this.animal} can make a sound`
}

//Another example for prototypal chaining
Array.prototype.bose = function () {
    return `Custom method references: ${this}`
}
//Above func in injected in whole array so it is accessible to any array.

let arr = [1, 2, 3]
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr.bose());
console.log(arr1.bose());
