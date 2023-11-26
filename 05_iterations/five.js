const coding=[1,2,3,4,4];

const values=coding.forEach( (item) => {
    console.log(item);       // didn't return value
    return item              // didn't return value
});
console.log(values);


//    ---------filter--------

const myNums = [11,22,3,44,55];
const name=myNums.filter( (n) => n<50);
console.log(name);

const n1=[11,22,33,44];
const new1=n1.filter( (item) => {
    return item<40;
})
console.log(new1);

// same this done using array

const newNums = [];

myNums.forEach( (num) => {
    if (num<40){
        newNums.push(num);
    }
})
console.log(newNums);

// more eg:

const books = [
    {title:"book1",genre:"fiction",publish:1990},
    {title:"book2",genre:"fiction",publish:1993},
    {title:"book3",genre:"history",publish:1999},
];
const userBooks = books.filter( (bk) => {
    return bk.genre==="fiction";
})
console.log(userBooks);