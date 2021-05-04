const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  checkInput();
})

 function checkInput(){
const usernamevalue= username.value.trim();
const emailvalue= email.value.trim();
const passwordvalue= password.value.trim();
const password2value= password2.value.trim();

if(usernamevalue===""){
  seterrorfor(username,"username cannot be  blank");
}else{
  setsuccessfor(username,"username saved successfully");
}

if(emailvalue===""){
  seterrorfor(email,"email cannot be  blank");
}else{
  setsuccessfor(email,"email saved successfully");
}

if(passwordvalue===""){
  seterrorfor(password,"password cannot be  blank");
}else{
  setsuccessfor(password,"password saved successfully");
}

if(password2value===""){
  seterrorfor(password2,"password cannot be  blank");
}
else{
  setsuccessfor(password2,"password saved successfully");
}
}

let setsuccessfor= function (input,message) {
  const formcontrol= input.parentElement;
const small=formcontrol.querySelector("small");

small.innerText=message;
formcontrol.className="form-control success"
}

function seterrorfor(input,message){
const formcontrol= input.parentElement;
const small=formcontrol.querySelector("small");

small.innerText=message;
formcontrol.className="form-control error";
}

