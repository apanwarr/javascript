// ******************** Dates ********************

let d1=new Date();
console.log(d1);
console.log(d1.toString());
console.log(d1.toDateString());
console.log(d1.toISOString());
console.log(d1.toJSON());
console.log(d1.toLocaleDateString());
console.log(d1.toLocaleString());
console.log(typeof d1);

let createDate = new Date(2023,0,23,5,3);
console.log(createDate.toLocaleString());

let d2=new Date("1-14-2023");
console.log(d1.toLocaleString());

// *************** Time ***********

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(d2.getTime());
console.log(Date.now()/1000);
console.log(Math.round(Date.now()/1000));
