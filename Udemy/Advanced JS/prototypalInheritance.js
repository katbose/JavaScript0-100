/*Prototypal Inheritance is just inheritance being done in the prototype */

//Constructor Funtion
function Person(name) {
    this.name = name;
}

//ability to inject anythinng into Person func() & has access to this state.
Person.prototype.greet = function() {
    console.log(`Hello, My name is ${this.name}`)
}

let result = new Person("Bose")
result.greet()

//Object inherit properties from other objects via prototypal chain.