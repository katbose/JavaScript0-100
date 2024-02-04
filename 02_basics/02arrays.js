const marvel = ["spiderman", "ironman", "thor", ]
const dc = ["superman", "batman", "flash"]

//marvel.push(dc)
//console.log(marvel);

//marvel.concat(dc)
//console.log(marvel);

const allHeros = marvel.concat(dc)
console.log(allHeros);

// using spread operator
const all_new_heroes = [...marvel, ...dc]
console.log(all_new_heroes);

// all elements into single array
const mixArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
const allArray = mixArray.flat(Infinity)
console.log(allArray);

// normal string to array
console.log(Array.from("Bose"));
console.log(Array.isArray([1, 3, 5]));
console.log(Array.isArray("Bose"))
console.log(Array.from({name: "Bose, age: 23"}));

// Different elements into array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));