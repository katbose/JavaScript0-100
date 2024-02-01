const myName = "Bose"
const age = 23

// use backticks for string intrpolation
console.log(`Hello my name is ${myName} and my age is ${age}`);

//another way to declare string
//this method has more properties
//new keyword is used create an instance of an object & creates a new string object
const anotherName = new String("K-bose")

console.log(anotherName[0]);
console.log(anotherName.__proto__);
console.log(anotherName.toUpperCase());
console.log(anotherName.charAt(4));
console.log(anotherName.indexOf("o"));

const newName = anotherName.substring(0,4)
console.log(newName)

const newName1 = anotherName.slice(-5, 4)
console.log(newName1);

const newName2 = "               Bose K"
console.log(newName2.trim());

console.log(anotherName.replace("-", "."));
// convert string into array using 'split'

console.log(anotherName.split("-"));