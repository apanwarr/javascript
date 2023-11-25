const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}

// for-in loop use in arrays also

const arr=[31,2,3,42,5];
for (const key1 in arr) {
    console.log(arr[key1]);
}

const map=new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('FR',"France");

for(const key in map){
    console.log(key);    //for-in loop didn't give any map values in this<---------
}