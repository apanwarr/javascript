// **************************** Number *********************** //
const score=300;
console.log(score);
const bal=new Number(100);
console.log(bal);

console.log(bal.toString());
console.log(bal.toString().length);
console.log(typeof bal);
console.log(bal.toFixed(2));

const bal2=123.878;
console.log(bal2.toPrecision(4));

var values=10000000;
console.log(values.toLocaleString('en-IN'));



// ********************************* Maths ***************************** //

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(5.3));
console.log(Math.sqrt(100));
console.log(Math.max(2,4,6,8));
console.log(Math.min(2,3,4,5));

console.log(Math.random());
console.log((Math.random()*10)+1);

var min=10;
var max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);