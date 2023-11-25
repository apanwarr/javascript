const user={
    name:"ashish",
    age:20,

    welcome: function(){
        console.log(this.name);
        console.log(this);
    }
}
user.welcome();
user.name="amit";
user.welcome();
console.log();
console.log(this);   // very imp point ---->please check this on browser console...

function oct(){
    let name3="Abc";
    console.log(this.name3);       // this only works in objects .......
}
oct();

const a=() => {
    let name4="ashish"
    console.log(this.name4);  //undefined
    console.log(this);        //{}
}
a();


// Array  func...... 

const addTwo = (num1,num2) =>{
    return num1+num2;
}
console.log(addTwo(4,7));

const addThree=(num1,num2,num3) => num1+num2+num3;
console.log(addThree(2,5,8));