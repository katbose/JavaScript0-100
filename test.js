console.log("********question 1*********");
console.log(typeof typeof typeof 100);
console.log("********question 2*********");
function abc() {
	console.log(abc.xyz);
}
abc();
abc.xyz = 100;
abc.xyz = 200;
abc();

console.log("********question 3*********");

const arr = [1, 2, 3, 4];
arr[100] = 500;
console.log(arr);

console.log("********question 4*********");

const arr1 = [..."bose"];
console.log(arr1);
console.log("********question 5*********");

console.log(parseInt("10+2"));
console.log(parseInt("7FM"));
console.log(parseInt("M7F"));
console.log(+"10+2");
console.log(+"7FM");
console.log(+"M7F");

console.log("********question 6*********");

console.log(
	[1, 2].map((num) => {
		if (num > 0) {
			return;
		}
		return num * 2;
	})
);

console.log("********question 7*********");
{
	function func1() {
		console.log("what is o/p");
	}
}

func1();

console.log("********question 8*********");

function func2(a, b) {
	"use strict";
	a = 100;
	b = 200;

	return arguments[0] + arguments[1];
	console.log(a + b);
}
console.log(func2(300, 400));

console.log("********question 8*********");

const arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
const findArr8 = arr8.find((num) => num > 4);
const filterArr8 = arr8.filter((num) => num > 4);
const mapArr8 = arr8.map((num) => num > 4);
console.log(findArr8);
console.log(filterArr8);
console.log(mapArr8);

console.log("********question 9*********");



