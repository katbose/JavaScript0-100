const incrementBtn = document.querySelector("#incrementBtn")
const decrementBtn = document.querySelector("#decrementBtn")
let counter = 0
function incrementCounter() {
    const counterEle = document.getElementById("counter")
    counter++;
    counterEle.innerText = counter
}
function decrementCounter() {
    const counterEle = document.getElementById("counter")
    counter--;
    counterEle.innerText = counter
}

incrementBtn.addEventListener("click", incrementCounter)
decrementBtn.addEventListener("click", decrementCounter)