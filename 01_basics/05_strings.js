const name = "bhim";
const no=50;

console.log(name + no+"value");
console.log(`Hello my name is ${name} and no is ${no}`);

console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('i'));

let name2 = name.substring(0, 2);
console.log(name2);
console.log(name.slice(-4,1));

var name3="  hello   ";
console.log(name3);
console.log(name3.trim());

var name4="He/ee/hey/Kida";
console.log(name4.split('/'));

var url="https://user.com/user%20.dev";
console.log(url.replace("%20","-"));
console.log(url.includes("user"));