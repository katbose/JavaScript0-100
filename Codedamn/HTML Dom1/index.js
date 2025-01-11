document.querySelector(".heading").innerText = "HTML Dom Manipulation 1";

const allListItems = document.querySelectorAll("ul, li");

for (let i = 0; i < allListItems.length; i++) {
	const listItem = allListItems[i];
	listItem.innerText = "YOOOOOOOO";
}

const para = document.querySelector("#para");
const para2 = document.getElementById("para");

console.log(allListItems);
