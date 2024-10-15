/*write a do while loop, that prompts a user to enter there fav tea type until they enter "stop". Store each tea type in an array named "teaCollection" */


let teaCollection = [];
let tea

do {
    tea = prompt(`Enter you fav tea( type "stop" to finish)`)
    if (tea !== "stop") {
        teaCollection.push(tea)
    }

} while (tea !== stop) {
    
}