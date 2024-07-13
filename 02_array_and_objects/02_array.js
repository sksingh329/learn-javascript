const array1 = [0, 1, 2, 3, 4]
const array2 = [5, 6, 7, 8, 9]

// const array3 = array1.concat(array2)
const array3 = [...array1, ...array2]
// console.log(array3)

const complexArray = [1,2,3, [4,5], [6,7,[8,9]]]
const flatArray = complexArray.flat(Infinity)
// console.log(flatArray)

const name = "subodh"
// console.log(Array.isArray(name))
// console.log(Array.from(name))