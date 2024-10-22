/* Write a for-each loop that iterates through an array '["earl grey", "green tea", "chai", "oolong tea"]'.
stop the loop when chai is found, and store all the tea types in an array named: avialableTeas
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
let avialableTeas = [];

teaCollection.forEach(function (tea) {
    if (tea === "chai") {
        return;
    }
    avialableTeas.push(tea);
});

console.log(avialableTeas);
