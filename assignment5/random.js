let count =0;
let img= document.getElementById("img")
function changeimage(){
    if(count==0){
        img.src ="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
    }else if(count==1){
        img.src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
    }else if(count==2){
        img.src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";
        count =-1;
    }count++;
} 