// Arrays

const arr = [1,2,3,4,6]
const arr1 = ["bose", 23, "naveen"]

const myArr = new Array(1,2,3,4)
console.log(myArr);

// array methods
myArr.push(5)//added at last
myArr.pop()//last value pops

// to add and delete values at start use unshift and shift
myArr.unshift(5)// add at start
myArr.shift()// delete fist value
console.log(myArr);
console.log(myArr.includes(9));

const joinArr = myArr.join()// join converts into string
console.log(joinArr);
console.log(typeof joinArr);

// slice & splice
const newArray = [1,2,3,4,5,6,7,8,9,10]
console.log(`New Array ${newArray}`);
const sliceArray = newArray.slice(1,4)
console.log(`Print Sliced Array ${sliceArray}`);
console.log(`Array after slice ${newArray}`);
const spliceArray = newArray.splice(1,4)
console.log(`Print Spliced Array ${spliceArray}`);
console.log(`Array after splice ${newArray}`);
