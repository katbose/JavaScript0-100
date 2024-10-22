/* Write a for-each loop to iterate through an array ["Berlin", "Tokyo", "Sydney", "Paris"] skip "Sydney" and store all other cities ia array named: traveledCities. */

let allCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = []

allCities.forEach(function (city) {

    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city)
});

console.log(traveledCities);
