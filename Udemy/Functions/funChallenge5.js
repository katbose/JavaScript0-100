/*Create a func named "createTeaMaker" that returns another function. The returned function should take one parameter, "teaType" and return a msg like "making a green tea". 

Store the returned func in a variable named "teaMaker" & call it with "green tea" */

function createTeaMaker() {
    return function(teaType) {
        return `making a ${teaType}`;
    }
}

let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));
