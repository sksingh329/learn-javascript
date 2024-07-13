let a = 100
const b = 200
var c = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
}

// let and const are block scope 
// var is global scopw
// console.log(a)
// console.log(b)
// console.log(c)


// Nested Scope 
function one(){
    const username = "subodh"

    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)

    two()
}

one()