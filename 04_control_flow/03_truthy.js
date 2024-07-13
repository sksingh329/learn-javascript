// Falsy value - false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy value - all except falsy value, "0", "false", " ", [], {}, function(){}

const userEmail = "test@test.com"

if(userEmail){
    console.log("User email exist");
}
else{
    console.log("User email don't exist");
}

const marks = []

if (marks.length == 0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}

// Nullish Coalescing Operator (??) : null undefined -> Fallback for null and undefined values 

let val1;

// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

// Ternary Operator (? :)
// condition ? true : false