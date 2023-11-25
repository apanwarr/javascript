// --------------Scopes-------------------------------

let a=20;
if(true){
    const a=20;
    let b=50;
    var c=70;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(c);

function one(){
    const name="ashish"

    function two(){
        const name2="abhi"
        console.log(name);
    }
 //   console.log(name2);

   two();
}
one();

if(true){
    const user1="amit"
    if(user1=="amit"){
        const user2="mohit"
        console.log(user1);
    }
 //   console.log(user2);          //cannot access because of scope......
}
//console.log(user1);              //cannot access......

// ----------------interesting----------------

function addOne(num){
    return num+1;
}
console.log(addOne(6));

//console.log(addTwo(5));        -----cannot access
const addTwo = function(num){
    return num+3;
}
console.log(addTwo(5));