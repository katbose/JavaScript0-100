//Abstraction, it hides the complex implementation detail

class CoffeeMachine {
    start() {
        //call DB
        //filter value
        return `Starting Coffee Machine`
    }

    brewCoffee() {
        //complex calcutions
        return `Brewing Coffee`
    }

    pressStartButton() {
        return ` ${this.start()}, ${this.brewCoffee()}`
    }
}

let StarBucks = new CoffeeMachine()
//console.log(StarBucks.start());
//console.log(StarBucks.brewCoffee());
console.log(StarBucks.pressStartButton());

