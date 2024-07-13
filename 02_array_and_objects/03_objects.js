const mySym = Symbol("key1")

const user = {
    name: "Subodh",
    [mySym]: "mykey1",
    age: 36,
    location: "Pune",
    email: "sksingh329@gmail.com"
}

// console.log(user.location)
// console.log(user["name"])
// console.log(user[mySym])

// Object.freeze(user)
// user.name = "random"
// console.log(user)

user.greeting = function(){
    console.log("Hello JS user!")
}

user.usergreeting = function(){
    console.log(`Hello JS user - ${this.name}`)
}

user.greeting()
user.usergreeting()