var readlineSync = require("readline-sync");
let num= readlineSync.question("enter a limit:");
let x=0;
for(let i=1;i<=num;i++){
    if(i%2==1){
        x = i+x;
    }
}
console.log("sum of odd numbers=",x)