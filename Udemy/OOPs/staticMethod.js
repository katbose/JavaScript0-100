// static methods are methods that belong to a class itself rather than to any object instance of the class. They are defined using the static keyword and can be called directly on the class, not on its instances.

class Calculator {
    static add(a, b) {
        return a+b;
    }
}

//let calculate = new Calculator.add(2, 3) //add() belongs to class, not to any object
let calculate = Calculator.add(2, 3)
console.log(calculate);
