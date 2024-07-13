let myArray = [1,2,3,4,5]

// console.log(myArray[2])
// console.log(myArray.length)

// console.log(myArray)

myArray.push(6)
// console.log(myArray)

myArray.pop()
// console.log(myArray)

myArray.unshift(0)
// console.log(myArray)

myArray.shift()
// console.log(myArray)

const newArray = myArray.slice(1,3)
console.log(newArray)
console.log(myArray)

const updatedArray = myArray.splice(1,3)
console.log(updatedArray)
console.log(myArray)
