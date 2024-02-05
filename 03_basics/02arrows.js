function arrows() {
    let username = "Bose"
    console.log(this.username);
}
arrows()

// this only works inside object context, we can't acces it in funtions using this

const arrowFunction = function () {
    let username = "Naveen"
    console.log(this.username);
}
arrowFunction()

// with arrow function

const arrowFunction1 = () => {
    let username = "Charan"
    console.log(this.username);
    console.log(this);
}
arrowFunction1()