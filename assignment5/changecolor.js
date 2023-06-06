function colorchange(){
let y = document.getElementById("colorselect").value;
if(y=="Red"){
    document.getElementById("text").style.color ="Red";
}else if(y=="Green"){
    document.getElementById("text").style.color ="green";
}else if(y=="White"){
    document.getElementById("text").style.color ="White";
}else if(y=="Black"){
    document.getElementById("text").style.color ="Black";
}
}
