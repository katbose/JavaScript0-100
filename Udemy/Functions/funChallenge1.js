/*Write a func named 'makeTea', that takes one parameter 'typeOfTea', and returns String like "Making Green Tea" when acalled with 'Green Tea'. Store the result in a variable name "teaOrder" */

//typeOfTea is a parameter or Placeholder
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = "Green Tea"
console.log(makeTea(teaOrder)); //teaOrder inside makeTea function is a argument
