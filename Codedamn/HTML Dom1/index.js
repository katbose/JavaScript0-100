document.querySelector(".heading").innerText = "HTML Dom Manipulation 1";

const allListItems = document.querySelectorAll("ul, li");

for (const listItem of allListItems) {
	listItem.innerText = "YOOOOOOOO";
}

const para = document.querySelector("#para");
const para2 = document.getElementById("para");

console.log(allListItems);
