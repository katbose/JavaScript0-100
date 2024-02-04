// how to call objects inside the function

//make an object
const user = {
    username: "Bose",
    age: 23
}

function callObject(anyObject) {
    console.log(`My username is ${anyObject.username} & age is ${anyObject.age}`);
}

callObject(user);