const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hey, your promise got resolved!");
	}, 5000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hey, your promise got resolved!");
	}, 10000);
});

async function promiseHandler() {
	const result1 = await p1;
	console.log("result1 pritimg");
	console.log(result1);

	const result2 = await p1;
	console.log("result2 pritimg");
	console.log(result2);
}

promiseHandler();
