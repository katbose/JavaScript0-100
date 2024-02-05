// Immediately Invoked Function Expressions (IIFE)
(function fun1() {
    //named IIFE
    console.log("DB CONNECTED")
}());
// this function will execute immediately irrespective to global scope variables
// use ()() parenthesis in & out of funtion to make IIFE
//1st () - we define function here
//2nd () - where we execute the function

// IIFE using arrow funtion
( () => {
    // Simple IIFE
    console.log("DB CONNECTED 2");
} )();

( (name)=>{
    console.log(`My name is: ${name}`);
} )("Bose")
