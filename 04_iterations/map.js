// Map is an Object which holds Key Value Pairs
// Remembers the order of the keys
// No duplicates, gets only unique values

const map = new Map()
map.set("IN", "India")
map.set("USA", "United Staes of America")
map.set("Fr", "France")
map.set("Fr", "France") // it will not print

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}

const myObject = {
    "game1": "GTA",
    "game2": "NFS",
    "game3": "Vice City",
    "game4": "Temple Run"
}

/*
for (const [key, value] of myObject) {
    console.log(`${key} is ${value}`);
}
*/
//In Forof loop only maps are iterable, objects are not iterable