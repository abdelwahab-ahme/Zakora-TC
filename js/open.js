let username = document.querySelector("#user")
let password = document.querySelector("#pass")
let btn = document.querySelector("#btn");

let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")


btn.addEventListener("click" , (duf)=>{
    duf.preventDefault()
    if(username.value === "" && password.value === ""){
        alert("Enter Your , Username , Password")
    } else{
        if((getUsername && getUsername.trim() === username.value && getPassword && getPassword.trim() === password.value)){
            setTimeout(() => {
                window.location = "./home.html"
            }, 500);
        }else{
            alert("your UserName or Password Wrong..?")
        }
    }
})



