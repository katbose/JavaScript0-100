/* A closure is a combination of a function and the lexical environment within which that function was declared. Closures allow a function to access variables from its outer (enclosing) scope, even after that scope has exited.

The inner function "remembers" the variables from its outer scope even if the outer function has finished executing.*/

function outer() {
    let counter = 4
    return function inner() {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
// it doesn't forget the value stored in it's memory
// it retains the memory of the function
console.log(increment());
console.log(increment());