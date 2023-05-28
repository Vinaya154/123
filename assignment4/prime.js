var readlineSync = require("readline-sync");
let num= readlineSync.question("enter a number:");
let x=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        x=x+1
    }
}
if(x==0){
console.log("entered number is prime");
}
else{
    console.log("entered number is not prime");
}