// Higher order function - call back function
// callback function - no name

const coding = [ "javascript", "java", "python", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => console.log(item))

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => console.log(item, index, arr))


const myCoding = [
    {
        langaugeName: "Javascript",
        languageFile: "js"
    },
    {
        langaugeName: "Java",
        languageFile: "java"
    },
    {
        langaugeName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.langaugeName} and ${item.languageFile}`);
})