// object constructor   // singleton

const tinder= new Object();
const tinder1={};
console.log(tinder);
console.log(tinder1);

tinder1.id="12ab"
tinder1.name="sam"
console.log(tinder1);

const tinder2={
    email:"abc@gmail.com",
    fullname:{
        username:{
            firstname:"thugesh",
            lastname:"sharma"
        }
    }
}
console.log(tinder2.fullname);
console.log(tinder2.fullname.username.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3=Object.assign(obj1,obj2);
const obj4=Object.assign({},obj1,obj2);
const obj5={...obj1, ...obj2};
console.log(obj3);
console.log(obj4);
console.log(obj5);

const users=[
    {
        id:1,
        name:"leo"
    },
    {
        id:2,
        name:"Mog"
    }
]
users[1].name;
console.log(tinder1);
console.log(Object.keys(tinder1));
console.log(Object.values(tinder1));
console.log(Object.entries(tinder1));

console.log(tinder1.hasOwnProperty('name'));

// destructure object

const course={
    cname:"js fun",
    price:1000,
    tuitor:"leo"
}
console.log(course.cname);
console.log(course['tuitor']);

const {cname}=course;
console.log(cname);

// ******************* API *********************
