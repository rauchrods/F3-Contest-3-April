

if(localStorage.getItem("userinfo")){
  let name = JSON.parse(localStorage.getItem("userinfo")).fullname;
  alert(`${name} you are already signed in`);
  window.location.href  ="./profile.html";
}



let signupbtn = document.querySelector("#sign-up");
let form = document.querySelector("form");

let nameinp = document.querySelector("#name-inp");
let emailinp = document.querySelector("#email-inp");
let passinp = document.querySelector("#pass-inp");
let cnfpassinp = document.querySelector("#cnf-pass-inp");
let errmsg = document.querySelector("#err-msg");


form.addEventListener("submit", (e)=>{
   e.preventDefault();

   if(nameinp.value == "" || emailinp.value =="" || passinp.value =="" || cnfpassinp.value ==""){    
     errmsg.innerText  = "Error : All the fields are mandatory";
     errmsg.style.color = "#FF4F4F";
     errmsg.style.display = "inline-block";
     return;
   }

   if(passinp.value != cnfpassinp.value){
    errmsg.innerText  = "Password not matching";
    errmsg.style.color = "#FF4F4F";
    errmsg.style.display = "inline-block";
    return;
   }

   let userinfo = {
    fullname: nameinp.value,
    email: emailinp.value,
    password: passinp.value
   }

  
   errmsg.innerText  = "Successfully Signed Up!";
   errmsg.style.color = "#7ECD71";
   errmsg.style.display = "inline-block";
   localStorage.setItem("userinfo", JSON.stringify(userinfo));

   setTimeout(()=>{
    window.location.href  ="./profile.html";
   },1000);

      

});