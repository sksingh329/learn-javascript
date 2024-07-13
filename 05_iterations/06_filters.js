const myNums = [1,2,3,4,5,6,7,8,9,10]

// const value = myNums.forEach( ( (num) => {
//     console.log(num);
//     return num;
// }))

// console.log(value);

// const value = myNums.filter((num) => (num > 4))

const value = myNums.filter( (num) => {
    return num > 4;
} )

// console.log(value);


const books = [
    { title: 'Book One', genre: "Fiction", publish: 1999, edition: 2004},
    { title: 'Book Two', genre: "Non-Fiction", publish: 1990, edition: 2004},
    { title: 'Book Three', genre: "Science", publish: 1995, edition: 2005},
    { title: 'Book Four', genre: "Fiction", publish: 2000, edition: 2008},
    { title: 'Book Five', genre: "Non-Fiction", publish: 2010, edition: 2019},
    { title: 'Book Six', genre: "Fiction", publish: 1999, edition: 2004},
    { title: 'Book Seven', genre: "Non-Fiction", publish: 1990, edition: 2004},
    { title: 'Book Eight', genre: "History", publish: 1995, edition: 2005},
    { title: 'Book Nine', genre: "Fiction", publish: 2000, edition: 2008},
    { title: 'Book Ten', genre: "Non-Fiction", publish: 2010, edition: 2019}
];

const userBooks = books.filter( (book) => book.genre === 'Fiction')

console.log(userBooks);
