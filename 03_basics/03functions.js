function calculatePrice(num1) {
    return num1
}

console.log(calculatePrice(6));

function calculatePrice1(num1) {
    return num1
}
console.log(calculatePrice1(100, 200, 300));

function calculatePrice2(...num1) { //using spread operator we can return all numbers in an array
    return num1
}
console.log(calculatePrice2(100, 200, 300));

function calculatePrice3(val1, val2, ...num1) { //using spread operator we can return all numbers
    return num1
}
console.log(calculatePrice3(100, 200, 300)); // val1 = 100, val2 = 200 got stored