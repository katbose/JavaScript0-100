/*Write a 'for' loop that loops through an array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store other cities in an new array 'visitedCities' */

let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "Paris") {
        continue;
    }
    visitedCities.push(cities[i]);
    
}

console.log(visitedCities);