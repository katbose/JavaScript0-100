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

console.log("                                 ");

/*
    Stack(Primitive), Heap(Non - Primitive)
*/
let myName = "Bose"
let anotherName = myName

anotherName = "Naveen"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "bose@gmail.com",
    upi: "bose@ybl"
}

let user2 = user1 //Now the data stored in heap and get direct reference to user1's data.

user2.email = "kbose@gmail.com"

console.log(user1);
console.log(user1);