/* Primitive Data Type - all primitive datatypes are call by value type
    the data is copied and changes also done on copy of value not directly on original data.

    7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

    Reference(Non - Primitive) Data Type - 
    Arrays, Objects, Functions
    
*/

const score = 100
let email;
const temp = null

const bigNumber = 98347826982174982179847198273n

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);
console.log(id === anotherId);


const marvel = ["ironman", "thor", "spiderman", "loki", "hulk"] // arrays

// object type
let myObj = {
    name: "Bose",
    age: 23,
}

//function with avriable
const myFunction = function(){
    console.log("My Function");
}

console.log(typeof myFunction);//function
console.log(typeof myObj);//object
console.log(typeof marvel);//object
console.log(typeof id);//symbol
console.log(typeof temp);//object
console.log(typeof email);//undefined
console.log(typeof score);//number