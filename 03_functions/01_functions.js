function myName(name){
    console.log(name)
}

myName("Subodh");

function add(number1, number2){
    return number1+number2;
}

console.log(add(5,3));

function calculateCartPrice(...num1){ //... -> rest operator 
    return num1;
}

console.log(calculateCartPrice(1,3,5,6))