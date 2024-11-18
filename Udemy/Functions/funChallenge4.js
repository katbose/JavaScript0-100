/*Write a func named "processTeaOrder" that takes another function, "makeTea" as a parameter & calls it with the argument "earl grey". Return the result calling of "makeTea" */

function makeTea(typeOfTea) {
    return `makeTea calls: ${typeOfTea}`;
}

function processTeaOrder(makeTea) {
    let teaOrder = makeTea("earl grey")
    return teaOrder;
}

let result = processTeaOrder(makeTea)
console.log(result);
