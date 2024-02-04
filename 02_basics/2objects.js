// two ways to declare an object
//non-singleton object
const user1 = {} // 1st type of declaration
console.log(user1);

//singleton object
const user2 = new Object() // ()2nd way of declaring object
console.log(user2);

const user3 = {}
user3.name = "Bose"
user3.age = 23
user3.isLoggedIn = false

console.log(user3);
console.log("*****************************");

const user4 = {
    email: "kbose@gmail.com",
    fullname: {
        userfullname: {
            firstname: "K",
            lastname: "Bose"
        }
    }
}

console.log(user4.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const objRes = {obj1, obj2} //should not use this method
const objRes1 = Object.assign({}, obj1, obj2)
console.log(objRes1);
const objRes2 = {...obj1, ...obj2}
console.log(objRes2);

console.log(Object.keys(user3));// returns in form of array
console.log(Object.values(user3));// returns in form of array
console.log(Object.entries(user3));// each entry converted into array

console.log(user3.hasOwnProperty("isLoggedIn"));
console.log(user3.hasOwnProperty("isLogged")); // false