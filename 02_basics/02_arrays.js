var marvel=["thor","hulk","ironman","panther"];
var dc=["Batman","superman",1,2];

marvel.push(dc);
console.log(marvel);

var s1=marvel.concat(dc);
console.log(s1);

var s2=[...marvel, ...dc];
console.log(s2);

var s3=[1,2,4,[5,6,],7,8,[10,11,[34,66]]];
var real=s3.flat(Infinity);
console.log(real);

console.log(Array.isArray("thor"));
console.log(Array.from("thor"));

console.log(Array.from({name:"thor"}));    //interesting

var x1=10;
var x2=20;
var x3=30;
console.log(Array.of(x1,x2,x3));