// arrow functions

() => {} // this is basic arrow function
const addOne = (addNum) => {
    return addNum+1
}
console.log(addOne(5));

// arrow function woth implicit return

const addTwo = (addNum) => addNum+2
console.log(addTwo(5));

const addThree = (addNum) => (addNum+3)
console.log(addThree(5));
// {} used need to write return - explicit return
// () no return keyword needed - implicit return

// to return Object we need to use {} braces compalsary

const addFour = (num1, num2) => ({username: "Bose"})
console.log(addFour());
