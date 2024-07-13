let date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toJSON())

let createdDate = new Date(1986,11,1)
console.log(createdDate.toDateString())

let timestamp = Date.now()
console.log(timestamp)
console.log(createdDate.getTime())
console.log(createdDate.getDay())

console.log(createdDate.toLocaleString('default',
{
    weekday: "long"
}))