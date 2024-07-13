const user = new Object()

user.id = "1000"
user.name = "subodh"
user.address = {
    flatNumber: 1106,
    buildingName: "D1",
    locality: {
        street: "satav nagar",
        landmark: "near jspm college"
    },
    district: "pune",
    state: "maharashtra"
}

// console.log(user)
// console.log(user.address.flatNumber)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// Concatination of objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)


const course = {
    courseName: "API Concepts",
    coursePrice: 500,
    courseInstructor: "Subodh"
}

const {courseName: name} = course

console.log(name)