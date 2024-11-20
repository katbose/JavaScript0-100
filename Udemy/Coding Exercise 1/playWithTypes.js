/*Playing with Types:
Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey. */

function stringToNumber(input) {
    let result = Number(input);
    if (isNaN(result)) {
        return "Not a number";
    }
    else return "Is a Number"
}

function flipBoolean(input) {
    let result = !Boolean(input)
    return result;
}

function whatAmI(input) {
    let result = typeof(input)
    if (result === "string") {
        return "I'm a string!"
    }
    if (result === "number") {
        return "I'm a number!"
    }
    else return "I'm something else!";
}

function isItTruthy(input) {
    let result = input;
    if ((result == "") || (result == 0) || (isNaN(result)) || (result == undefined) || (result == null)) {
        return "It's falsey!"
    }
    else return "It's truthy!";
}
