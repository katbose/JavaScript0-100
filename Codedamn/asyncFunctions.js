const p = new Promise((resolve, reject) =>
	resolve("Hey, your promise is resolved")
);

async function getData() {
	return p;
}
const dataPromise = getData();

dataPromise.then((result) => console.log(result));

// console.log(dadataPromiseta);
