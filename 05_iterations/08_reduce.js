const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,cur) {
//     console.log(`acc: ${acc} and cur: ${cur}`);
//     return acc + cur
// }, 0)

const myTotal = myNums.reduce( (acc,cur) => (acc + cur),0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Selenium",
        price: 400
    },
    {
        itemName: "Appium",
        price: 500
    },
    {
        itemName: "Cypress",
        price: 600
    },
    {
        itemName: "Playwright",
        price: 700
    }
]

const totalPrice = shoppingCart.reduce( (sum,item) => (sum + item.price),0)

console.log(totalPrice);