const course = {
    coursename: "javascript",
    courseinstructor: "hitesh",
    price: "999"
}

course.coursename = "react"
console.log(course);

const {courseinstructor: instructor} = course // use {} brace sfor destructuring the object
// console.log(courseinstructor); //it will print hitesh
console.log(instructor); // it will also print hitesh

//JSON keys and values both are in string format
/*{
    "name": "Katabathuni Bose",
    "age": 23,
    "Phno": 9515166564
} */

// Objects are send in JSON format only