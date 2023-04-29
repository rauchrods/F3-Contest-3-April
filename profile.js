
if(localStorage.getItem("userinfo") == null){
    alert(`you are not signed in. Please sign up to see the profile details`);
    window.location.href  = "./index.html";
}

let fullname = document.querySelector("#fname");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let logoutbtn  = document.querySelector("#log-out");

if(localStorage.getItem("userinfo")){
   fullname.innerText = "Full Name: " +  JSON.parse (localStorage.getItem("userinfo")).fullname;
   email.innerText = "Email: " + JSON.parse (localStorage.getItem("userinfo")).email;
   password.innerText = "Password: " + JSON.parse (localStorage.getItem("userinfo")).password;

   logoutbtn.style.display = "inline-block";

}



logoutbtn.addEventListener("click", ()=>{

   localStorage.removeItem("userinfo");
    window.location.href  = "./index.html";

});