const firstProfile = {
    name: "Bose",
    age: 25
}

const seconfProfile = {
    name: "Vinay",
    age: 27
}

function primitiveMutate(primitive) {
    primitive++
    console.log(primitive)
}

function mutate(obj) {
    console.log(obj.age);
}

let num = 100;
primitiveMutate(num)

mutate(firstProfile)