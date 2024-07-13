"use strict"
let userName = "subodh"

console.log(userName.charAt(6))
console.log(userName.indexOf('o'))

let message = "Hi, today is saturday"

let splitMessage = message.split(" ")
console.log(splitMessage[2])

console.log(userName.substring(0,2))
console.log(userName.slice(-2))

let updatedMessage = message.replace("saturday","sunday")
console.log([message,updatedMessage])