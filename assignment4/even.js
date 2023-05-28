var readlineSync = require("readline-sync");
let size= readlineSync.question("enter the size of an array:");
console.log("enter the values in array:");
const a=[];
let x=0;
for(let i=0;i<size;i++){
    a[i]=readlineSync.question(" ");
    if(a[i]%2==0){
        x=x+1;
    }
}
console.log("number of even numbers in the array="+x);