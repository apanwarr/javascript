// Singleton 
//Object.create

// Objects literals
const sym1=Symbol("key1");

const user = {
    name:"hulk",    //key and values
    "last name":"Thor",
    [sym1]:"mykey1",
    age:18,
    location:"india",
    email:"user@gmail.com"
};
console.log(user.name);
console.log(user["email"]);
console.log(user["last name"]);
console.log(user[sym1]);
console.log(typeof ["sym1"]);

//Object.freeze(user);
user.email = "shop@gmail.com";
console.log(user);

user.greeting=function(){
    console.log("Hello Js army");
}
//console.log(user.greeting);
console.log(user.greeting);

user.greeting2=function() {
    console.log(`hello ,${this.name }`);
}
console.log(user.greeting2());