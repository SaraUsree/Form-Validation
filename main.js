function formvalidate() {
    var email =document.getElementById("Email").value;
    var phone =document.getElementById("phone").value;
    var password =document.getElementById("password").value;
    var error =document.getElementById("error");
    var Text = "";

if(email.indexOf("@")== -1&& email.length<10) 
{
Text= "pleas enter valid email";
error.innerHTML = Text;
return false;
}

else if(isNaN(phone)||phone.length!=11)
 {
Text= "pleas enter valid phone";
error.innerHTML = Text;
return false;
}

else if(password.length != 8) 
{
Text= "pleas enter valid password";
error.innerHTML = Text;
return false;
}

else
 {
alert("done succeful");
return true;
}
}

