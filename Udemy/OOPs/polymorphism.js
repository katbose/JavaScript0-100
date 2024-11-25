//Polymorphism, ability to have or to be displayed in more than one form

class Bird {
    fly() {
        return `Flying.......`
    }
}
class Penguin extends Bird {
    fly() {
        return `Penguins can't Fly...`
    }
}
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());
