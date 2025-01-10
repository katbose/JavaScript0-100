const incrementBtn = document.querySelector("#incrementBtn")
const decrementBtn = document.querySelector("#decrementBtn")
const counterEle = document.getElementById("counter")
let counter = 0
function incrementCounter() {
    counter++;
    counterEle.innerText = counter
}
function decrementCounter() {
    counter--;
    counterEle.innerText = counter
}

incrementBtn.addEventListener("click", incrementCounter)
decrementBtn.addEventListener("click", decrementCounter)