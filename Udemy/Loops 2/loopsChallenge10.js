/*Use for-of loop iterat ethrough an array ["Chai", "Green tea", "Black tea", "Jasmine Tea", "Herbal Tea"] and stop when the length of the current tea name is greater than 10. 
Store the teas iterated over in an array named: shortTeas */

let myTeas = ["Chai", "Green tea", "Black tea", "Jasmine Tea", "Herbal Tea"]
let shortTeas = [];

for (const tea of myTeas) {

    if (tea.length() > 10) {
        break;
    }
    shortTeas.push(myTeas[tea])
}
console.log(shortTeas);
