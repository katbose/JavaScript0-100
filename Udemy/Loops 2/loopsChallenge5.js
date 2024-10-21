/*Use a 'for-in loop' loop through an object containing city populations.
Stop the loop when population of 'Berlin' is found and store all the previus cities in a new object named: 
'cityPopulations'

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityPopulations = {};

console.log(Object.keys(citiesPopulation)); //access all keys in an object in  array
console.log(Object.values(citiesPopulation)); //access all values in an object in array
//Learn call, bind & apply

for (const city in citiesPopulation) {
   //console.log(citiesPopulation[city]);
   if (city == "Berlin") {
    break;
   }
   cityPopulations[city] = citiesPopulation[city];
   
}
console.log(cityPopulations);
