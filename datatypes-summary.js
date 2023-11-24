// 2 types of datatypes

// (i) Primitive
// 7 types : string , number, boolean,null,undefined,symbol,bigint.

const score= 100;
const s=100.22;

const a=false;
const b=null;
let c;
console.log(typeof b);

const id=Symbol('111');
const id2=Symbol('111');
console.log(id);
console.log(id2);
console.log(id===id2);

const bigNo = 123456678788n;   // n means, now it's Big int


// (i)Reference (Non-Primitive)
// 3 types : Arrays, String, Objects, functions

const hero = ["Shaktimaan","Naageaj","Doga"];
console.log(hero);

let myobj = {
    name : "chiku",
    age : 30,
    id : 101
}
console.log(myobj);

const myfun = function (){
    console.log("Hey!!");
}

console.log(myfun);