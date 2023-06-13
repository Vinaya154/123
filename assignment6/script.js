function ValidateFName(){
let text=document.getElementById("fname").value
regex=/^[a-zA-Z]+$/
if(regex.test(text)){
    document.getElementById("warning").innerHTML="success"
    document.getElementById("warning").style.color="green"
    return true
}else{
    document.getElementById("warning").innerHTML="failed"
    document.getElementById("warning").style.color="red"
    return false
}
}
function ValidateLName(){
    let text=document.getElementById("lname").value
     regex=/^[a-zA-Z\.]+$/
    if(regex.test(text)){
        document.getElementById("warningl").innerHTML="success"
        document.getElementById("warningl").style.color="blue"
        return true
    }else{
        document.getElementById("warningl").innerHTML="failed"
        document.getElementById("warningl").style.color="pink"
        return false
    }
    }
    function ValidateMobNum(){
        let text=document.getElementById("mnum").value
         regex=/^[0-9]{10}$/
        if(regex.test(text)){
            document.getElementById("warning-mob").innerHTML="success"
            document.getElementById("warning-mob").style.color="green"
            return true
        }else{
            document.getElementById("warning-mob").innerHTML="failed"
            document.getElementById("warning-mob").style.color="red"
            return false
        }
        }
        function ValidateEmail(){
            let text=document.getElementById("email").value
             regex=/^([a-zA-Z0-9-\.]+)@([a-zA-Z0-9-_]{3,20})\.([a-z]{2,6})$/
            if(regex.test(text)){
                document.getElementById("email-error").innerHTML="success"
                document.getElementById("email-error").style.color="green"
                return true
            }else{
                document.getElementById("email-error").innerHTML="failed"
                document.getElementById("email-error").style.color="red"
                return false
            }
            }
          /*function ValidatePassword(){
                let text=document.getElementById("Password").value
                 regex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[$-#@%*-])(?=.*[0-9])[A-Za-z0-9-#@%$*-]{8,24}$/
                if(regex.test(text)){
                    document.getElementById("Password-error").innerHTML="success"
                    document.getElementById("Password-error").style.color="green"
                    return true
                }else{
                    document.getElementById("Password-error").innerHTML="failed"
                    document.getElementById("Password-error").style.color="red"
                    return false
                }
                }
                const ValidateAllfields=()=>{
                    ValidateFName();
                    ValidateLName();
                    ValidateMobNum();
                    ValidateEmail();
                    ValidatePassword();
                    if(ValidateFName()&&ValidateLName()&&ValidateMobNum()&&ValidateEmail()&&ValidatePassword()&&){
                        return true
                    }else{
                        return false
                    }

                }*/
                