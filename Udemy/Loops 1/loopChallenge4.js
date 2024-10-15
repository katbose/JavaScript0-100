/*Write a do while loop that add numbers from 1 to 3 and stores the result in the variable named 'total' */

let total = 0;
let num = 1;

do {
    if (num<4) {
        total += num;
    }
    num++
} while (num<4);
console.log(total);
