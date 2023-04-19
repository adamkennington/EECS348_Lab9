
function passCheck(){
    password1 = document.getElementById("pass1").value;
    password2 = document.getElementById("pass2").value;
    if(password1.length < 8){
      alert("The first password is less than 8 characters");
    } else if(password2.length < 8){
      alert("The second password is less than 8 characters");
    } else if(password1 != password2){
      alert("The password are different.");
    } else{
      alert("The password are matched.");
    }

}
