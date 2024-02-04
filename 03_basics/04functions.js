// how to call objects inside the function

//make an object
const user = {
    username: "Bose",
    age: 23
}

function callObject(anyObject) {
    console.log(`My username is ${anyObject.username} & age is ${anyObject.age}`);
}
// if any object mismatch happens it displays undefined
callObject(user);

//either we can decalre object while calling funtion
callObject({
    username: "naveen",
    age: 24
})

const myNewArray = [100, 200, 400, 500]
function returnSecondValue(num) {
    return num[1]
}
console.log(returnSecondValue(myNewArray));