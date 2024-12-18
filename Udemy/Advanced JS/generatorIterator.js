/*Generator Functoion doesn't execute things all at once, actually create the things at resume basis
You hit it once it's gonna generate one result, & hit it again, generates one result(and same in loop...)
It doesn't execute the whole thing at once  
*/

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
//generator holds a generator Object, and  remembers the memory
let generator = numberGenerator();
let generator2 = numberGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
//Here next() is an iterator where it keeps the track of every iteration happened in prgm
//it doesn't know the value here(not assigned anything) after calling 3 times it don't know what to do

console.log(generator2.next().value);
console.log(generator2.next().value);
