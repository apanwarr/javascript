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