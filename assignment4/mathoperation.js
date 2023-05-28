var readlineSync = require("readline-sync");
console.log("1 for addition\n 2 for subtraction\n 3 for multiplication\n 4 for division");
let num= readlineSync.question("enter the operation");
let n1= readlineSync.question("enter the first number");
let n2= readlineSync.question("enter the second number");
n=parseInt(num);
n1=parseInt(n1);
n2=parseInt(n2);
switch(n){
    case 1:
        let a=add(n1,n2);
        console.log(n1,"+",n2,"=",a);
        break;
        case 2:
        let s=subtract(n1,n2);
        console.log(n1,"-",n2,"=",s);
        break;
        case 3:
        let m=multiplication(n1,n2);
        console.log(n1,"*",n2,"=",m);
        break;
        case 4:
        let d=divide(n1,n2);
        console.log(n1,"/",n2,"=",d);
        break;
        default:
            console.log("enter valid operation");
            break;
}
function add(n1,n2){
    let sum=n1+n2;
    return sum;
}
function subtract(n1,n2){
    let sub=n1-n2;
    return sub;
}
function multiplication(n1,n2){
    let mul=n1*n2;
    return mul;
}
function divide(n1,n2){
    let div=n1/n2;
    return div;
}