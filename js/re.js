let username = document.querySelector("#user");
let email = document.querySelector("#email");
let password= document.querySelector("#pass");

let register_in = document.querySelector("#register_in");

register_in.addEventListener("click" , function (duf){
    duf.preventDefault();
    if(username.value==="" || email.value==="" || password.value===""){
        alert("Place Enter your Informition");
    }else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);

        setTimeout(() => {
            window.location="open.html"
        }, 1000);
    }
})