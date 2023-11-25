// -----------for loop

for (let i = 0; i <= 10; i++) {
    const element =i;
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    const element =i;
    if(element == 5){
        console.log("5 is best no.");
    }
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log("outer"+i);
    for(let j=0; j<=10; j++){
        console.log("inner"+i);
    }
}

for (let i = 0; i <= 10; i++) {
    console.log("outer"+i);
    for(let j=0; j<=i; j++){
        console.log("inner"+i);
    }
}
for (let i = 1; i <= 10; i++) {
    console.log("2"*i);
}

console.log("Arrays");

let arr=["AB","CD","EF","Gh"];
for(let i=0; i<arr.length; i++){
 //   const newArr=arr[i];
 //   console.log(newArr);
    console.log(arr[i]);
}
for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("5 is best");
        break;
    }
    console.log(i);
}

//   continue-------------

for (let i = 0; i < 10; i++) {
    if(i==5){
        continue;  
    }
    console.log(i);
}