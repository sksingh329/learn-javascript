// for of 

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const username = "subodh"

for (const char of username){
    // console.log(char);
}


// Maps - key-value pair and maintains order of insertion

const studentMap = new Map()
studentMap.set('Subodh',50)
studentMap.set('Test', 80)
studentMap.set('Random', 90)

// console.log(studentMap);
// console.log(studentMap.get('Subodh'))

for (const entries of studentMap){
    // console.log(entries);
}

for (const [key,value] of studentMap){
    // console.log(`Key: ${key} and value: ${value}`)
}

const studentObj = {
    "Subodh": 50,
    "Test": 60,
    "Random": 80
}

// Error 
for (const entries of studentObj){
    console.log(entries);
}