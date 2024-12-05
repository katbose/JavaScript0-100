// example of an asynchronous behaviour of js
console.log("1st line in the code");

function sayHello() {
    console.log("Print Hello after 4000ms");
}

setTimeout(() => {
    sayHello();
}, 4000); // timeout = 4000ms

for (let i = 0; i < 5; i++) {
    console.log(i);
}
