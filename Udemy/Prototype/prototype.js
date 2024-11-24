let computer = {
    cpu: 12
}
let lenevo = {
    screen: "HD",
    __proto__: computer //It wil access all the properties there in computer object
}
let tomHardware = {}

console.log(`computer`, computer.__proto__); // __ is called as double-underscore & Dunder

console.log(`lenovo`, lenevo.__proto__); // Now properties of computer are injected in lenevo and properties of computer are now custom properties to lenovo.

/*Another approach for using Prototype */
// let's build a car using prototype feature

let genericCar = {
    wheels:  4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar); // all genericCar properties are accessible in tesla now
// setPrototypeOf alternative of __proto__, it's a setter property in prototype

// console.log(`tesla`, tesla.__proto__);
console.log(`tesla`, tesla);
console.log("************using Object.getPrototyprOf()**************");

// Better way of having property is using object.getPrototyprOf()
console.log(`tesla`, Object.getPrototypeOf(tesla)); // all inheriting properties will appear
