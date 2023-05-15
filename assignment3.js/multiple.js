var readlineSync = require("readline-sync");
let a= readlineSync.question("enter a number to get multiplication table:");
a=parseInt(a)
for(let i=1;i<=10;i++){
    console.log(i,"*",a,"=",i*a);
}