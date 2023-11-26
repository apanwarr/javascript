// -------------Reduce----------------

const myNums = [1,2,3,4];

const myTotal = myNums.reduce(function (acc,currval){
    console.log("accumatlator value : "+acc  +" + currval_value : " + currval);
    return acc + currval;
},0)                 // ---> 0 is initialising value for accumalator. 
console.log(myTotal);

// same above code ----using => function

const myTotal1 = myNums.reduce( (acc1,currval1) => acc1 + currval1 ,2 )
console.log(myTotal1);