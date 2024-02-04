function myName() {
    console.log("My name is Bose");
}

// myName is reference of function - it will compile but nothing will print
//myName() - () will execute the function

myName()

function addTwoNumbers(num1, num2) {
    // num1 and num2 are parameters

    console.log(num1+num2);    
}
let added = addTwoNumbers(3, 4) // numbers given while call funtion are arguments
console.log(added); // it will not return the value
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

function subtractTwoNumbers(num1, num2) {
    let sub = num1-num2
    return sub;
    console.log("substraction done"); // after return it will not print anything
}

const sub = subtractTwoNumbers(7,2)
console.log(sub);
