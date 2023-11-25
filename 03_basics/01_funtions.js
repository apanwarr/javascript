function name(){
    console.log("A");
    console.log("S");
    console.log("K");
}

name()

function add(a,b){
    console.log(a+b);
}
const result = add(3,4);
console.log(result);      // why this is defined---->

// Now------

function addition(no1,no2){
    //let total = no1 + no2;
    return no1+no2;

    console.log("Helo");  // It can't run any time ...
}

const total=addition(9,4);
console.log(total);

function msg(name){
    if(name===undefined){                    // if(!name){  ---------------> same meaning..
        console.log("Please enter a user name...");
        return
    }
    else{
    return `${name} just logged in...`;
    }
}
console.log(msg());

function cricket(pname = "Virat"){
    if(!pname){
        console.log("Please enter a name");
        return ;
    }
    else{
        return `${pname} is now play`;
    }
}
console.log(cricket("Gill")); // Gill overwrite the virat in this <----