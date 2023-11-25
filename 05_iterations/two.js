// While

var a=1;
while (a<=3) {
    console.log(a);
    a++;
}

let arr=["ab","bc","cd"];
var i=0;
while(i<=arr.length){
    console.log(arr[i]);
    i++;
}

// do-while loops

let score=1;
do{
    console.log("score is : "+score);
    score++;
}while(score<10);


let score1=11;          // special case (Exit-control)
do{
    console.log("score is : "+score1);
    score1++;
}while(score1<10);