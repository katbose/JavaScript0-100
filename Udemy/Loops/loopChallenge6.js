/*Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in the new named array 'cityList' */

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []

for (let i = 0; i < cities.length; i++) {
    const result = cityList.push(cities[i]);
}
console.log(cityList);
