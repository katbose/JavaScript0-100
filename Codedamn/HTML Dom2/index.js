const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const counterEle = document.getElementById("counter");

const ulElement = document.getElementById("list-items");

let counter = 0;
function incrementCounter() {
	counter++;
	counterEle.innerText = counter;

	//create an element
	const li = document.createElement("li");
	const b = document.createElement("b");

	const textNode = document.createTextNode("Sentence");
	b.appendChild(textNode);

	const textNode2 = document.createTextNode(counter);
	li.appendChild(b);
	li.appendChild(textNode2);

	//append an element
	ulElement.appendChild(li);
}
function decrementCounter() {
	counter--;
	counterEle.innerText = counter;
}

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
