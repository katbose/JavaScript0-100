/*Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the result in a new array named 'multipliedNumbers' */

let multipliedNumbers = []
let array = [2, 4, 6]

for (let i = 0; i < array.length; i++) {
    multipliedNumbers.push(array[i]*2)
}
console.log(multipliedNumbers);
