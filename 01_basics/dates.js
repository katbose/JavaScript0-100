// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myNewDate = new Date("01-09-2024")
console.log(myNewDate.toDateString());

let myTimestamp = Date.now()
console.log(myTimestamp)
