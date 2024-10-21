/*Use for-of loop to iterate through an array ["chai", "green tea","herbal tea", "black tea"] and skip "herbal tea". Store other teas in 'preferredTeas' */

let teas = ["chai", "green tea","herbal tea", "black tea"]
let preferredTeas = []

for (const tea of teas) {
    if (teas[tea] === "herbal tea") {
        continue;
    }
    preferredTeas.push(teas[tea])
}
console.log(preferredTeas);
