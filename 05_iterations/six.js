const number = [1,2,3,4,5,6];

const new_number= number.map( (num) => num + 10)
console.log(new_number);

// ---------------Chaining---------------

const num1 = [1,2,3,4,5,6];
const newNum1=num1
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num<40)
console.log(newNum1);