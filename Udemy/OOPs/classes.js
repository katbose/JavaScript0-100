class Vehicle {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }

    //lets create a methods inside a class(doesn't require a function keyword)
    start(){
        return `${this.brand} brand has ${this.model} model`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.brand} : can accessible in class Car(inheritance achieved)`
    }
}

let myCar = new Car("Volkswagen", "Virtus")
console.log(myCar.start());
console.log(myCar.drive());

let vehicle1 = new Vehicle("Skoda", "Rapid")
//ass constructor Vehicle cannot be invoked without 'new'
console.log(vehicle1.model);
