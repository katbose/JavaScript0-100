a = 100
console.log(a);
// this is global scope
let x = 200
const y = 300
var z = 100

if (true) { // this is block scope
    let x = 200
    const y = 300
    var z = 400
    console.log(`value of a: ${x}, Value of y: ${y}, Value of z:${z}`);
}

console.log(z); // var comes out of scope and disturbs the code
console.log("*************************");

function fun1() {
    const user1 = "Bose"

    function fun2() {
        const user2 = "naveen"
        console.log(user1);
    }
    //console.log(user2); // this will not execute outside of scope
    fun2() //will print log file
}

fun1() //will execute only fun1 not fun2 and nothing will print

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
console.log(addOne(5));// addOne can be accessible anywhere
function addOne(add1) {
    return add1+1
}
console.log(addOne(5));

// console.log(addTwo(5)); // addTwo can't be accesssed before intialization

const addTwo = function addTwo(add2) {
    return add2+2;
}
console.log(addTwo(5));