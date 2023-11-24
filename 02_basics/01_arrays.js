// ********************Arrays*********************

const arr=[1,2,3,4,5,6];
console.log(arr);
console.log(arr[1]);

const arr2=["hulk","thor","ironman"];

// Array Methods --------------

const myarr=new Array(1,2,3,4);
myarr.push(6);
console.log(myarr);
console.log(myarr.push(10));
console.log(myarr);
myarr.pop();
console.log(myarr);
myarr.unshift(8);
console.log(myarr);
myarr.shift();
console.log(myarr);

console.log(myarr.includes(9));
var myarr2=myarr.join();
console.log(myarr2);
console.log(typeof myarr2);

// slice , splice

console.log("A",myarr);
const my1=myarr.slice(1,4);
console.log(my1);
console.log("D",myarr);
const my2=myarr.splice(1,4);
console.log(myarr);
console.log(my2);