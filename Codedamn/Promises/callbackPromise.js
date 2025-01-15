function promiseSettimeout() {
	return Promise.reject(200);
}

promiseSettimeout()
	.then((res) => {
		console.log("Written text to screen", res);
	})
	.catch((res) => {
		console.log("[Error] Written text to screen", res);
	});
