/* Write a for loop that iterates through an array [2, 5, 7, 9] skip '7' & multiply the rest by 2. Store the results in a new array named: "doubledNumbers" */

let numbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        continue;
    }
    doubledNumbers.push(numbers[i]*2)
}

console.log(doubledNumbers);
