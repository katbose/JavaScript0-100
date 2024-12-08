const Person = {
    name: "Bose",

    greet(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

Person.greet()
//this context is lost when it's tarnsferred from one memory to another memory/ one variable to another variable 
const greetFunc = Person.greet
greetFunc();

const bindGreetFunc = Person.greet.bind({name:"Manish"})
bindGreetFunc();

/*methods: bind/call/apply
.bind - Returns a new function, Passed individually, Returns A new bound function
.call - Executes the function immediately, Passed individually, Returns The result of the function
.apply - Executes the function immediately, Passed as an array, Returns The result of the function
*/
//JavaScript provides three methods to explicitly set the this context for a function: bind(), call(), and apply().

const callGreetFunc = Person.greet.call({name: "Mohit"})
//callGreetFunc is not a function

const applyGreetFunc = Person.greet.apply({name: "Anand"})
//applyGreetFunc is not a function