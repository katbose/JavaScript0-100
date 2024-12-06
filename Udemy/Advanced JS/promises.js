/*
Promises in JavaScript
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for the result of an asynchronous computation.

Why Use Promises?
Promises make it easier to work with asynchronous operations by avoiding callback hell and providing a cleaner, more readable code structure.

States of a Promise
Pending: The initial state; neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and a result is available.
Rejected: The operation failed, and a reason (error) is available. */

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data Fetched Successfully!")
            }
            else {
                reject("Error Fetching Data!!!")
            }
        }, 3000);
    })
}

//Above Code is Data/Promise Creation
//Below Code we will consume the data
//Every kind of promise has state associated with it.
/*
let response = fetchData();
console.log(response);
*/

fetchData()
    .then((data) => {
        console.log(data);
        return `prints - When 1st .then() method is true`
    })
    
    .then((value) => {
        console.log(value);
        return "Bose" //shows undefined when no return is used on 1st .then()
    })
    .catch((error) => console.error(error))
