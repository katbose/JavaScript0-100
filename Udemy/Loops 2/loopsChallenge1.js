/*write a for loop that loops through the array ["Green tea", "black tea", "chai" and "oolong tea"] & stop the loop when it finds the chai, Store all the tea, all the teas before the chai in new array named "selectedTeas" */

let teas = ["green tea", "black tea", "chai", "oolong tea"]

let selectedTeas = []

for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "chai") {
        selectedTeas.push(teas[i]);
    }
    else
    break;
    
}

console.log(selectedTeas);
