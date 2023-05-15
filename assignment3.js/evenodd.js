var readlineSync = require("readline-sync");
let n= readlineSync.question("enter a number :");
if(n%2==0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}
