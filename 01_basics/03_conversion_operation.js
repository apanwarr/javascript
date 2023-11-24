let score = 44;
let score1 = "44ab";
let score2 = null;
let score3 = undefined;

console.log(typeof score);  // both are same 
console.log(typeof(score));

console.log(typeof score1);

let valueInNumber = Number(score3);
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"44" => 44
//"44ab" => NaN
//true => 1; false => 0
// null => 0;

let a=1;
let b = Boolean(a);
console.log(b); //1 means true ; 0 means false ; " " means false;  "abc" means true

let no = 33;
let no2 = String(no);
console.log(no2);
console.log(typeof no2);


// *********************************operations********************************** //

let value=3;
let neg=-value;
console.log(value);
console.log(neg);    // opeartions   ........*,/,+,-,%

console.log("1"+2);
console.log(2+"4");
console.log("3"+2 +1);
console.log(1+2+"3");
console.log((3+4)*5%3);
console.log(+true);
console.log(+"");

let num1,num2,num3;

num1=num2=num3=2+2;
console.log(num1,num2,num3);

console.log(++num1);