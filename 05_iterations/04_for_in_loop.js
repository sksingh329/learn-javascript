const studentObj = {
    "Subodh": 50,
    "Test": 60,
    "Random": 80
}

for ( const key in studentObj){
    console.log(`Key: ${key} and value: ${studentObj[key]}`);
}