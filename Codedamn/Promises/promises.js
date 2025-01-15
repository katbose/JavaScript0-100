function getMeAPromise() {
	return fetch("./data.json");
}

const promise = getMeAPromise();

promise
	.then((data) => {
		console.log("passed 1");
	})
	.then((data2) => {
		throw new Error("Hey, got error");
		console.log("passed 2");
	})
	.then((data3) => {
		console.log("passed 3");
	})
	.then((data4) => {
		console.log("passed 4");
	})
	.catch((error) => {
		console.log("Oops, someone crashed in the line");
	});

console.log(promise);
