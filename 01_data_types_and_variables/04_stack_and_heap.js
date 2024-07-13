let firstUser = "subodh"
let secondUser = firstUser

secondUser = "random"

console.log(firstUser);
console.log(secondUser);

let userOne = {
    name: "subodh",
    email: "subodh@test.com"
}

let userTwo = userOne

userTwo.name = "random"

console.log(userOne.name)
console.log(userTwo.name)