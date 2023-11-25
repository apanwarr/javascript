// for of

// ["" ,"", ""]
// [{},{}.{}]

const arr=[1,2,3,4,5];

for (const i of arr) {
    console.log(i);
}

const greeting=["gn","gm","ok"];
for (const greet of greeting) {
    console.log(greet);
}

// -----Maps------

const map=new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('FR',"France");
console.log(map);

for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key,value);
}

// for object 

const myObject={    
    'g1':"COD",
    'g2':"Candy"
    }
    for(const [key1,value1] of myObject){
        console.log(key1,value1);        // Key Point 
    }                                    // Error