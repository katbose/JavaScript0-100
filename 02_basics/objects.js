// Object Literals

const mySym = Symbol("key1")

const user = {
    name: "Bose",
    "fullName": "Katabathuni Bose",//cannot access with .method
    age: 23,
    loaction: "Bengaluru",
    email: "kbose@gmail.com",
    isLoggedIn: ["Monday", "Saturday"],
    [mySym]: "mykey1"
}

// two ways to access elemnts inside the objects

console.log(user.email);// can't access string key
console.log(user["email"]);// best method to use
console.log(user[mySym]);// for Symbol "" are not used

user.email = "kbose0007@gmail.com"
// Object.freeze(user) // used to freeze the changes in object
user.email = "kbose8055@gmail.com"
console.log(user);

