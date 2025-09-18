
let username = document.querySelector("#user");
let password = document.querySelector("#pass");
let btn = document.querySelector("#btn");

let getUsername = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

btn.addEventListener("click" , (duf)=>{
    duf.preventDefault();

    if(username.value === "" && password.value === ""){
        alert("Enter Your Username and Password");
    } else {
        if(
            getUsername && getUsername.trim() === username.value && 
            getPassword && getPassword.trim() === password.value
        ){
            // ✅ تخزين اسم المستخدم الحالي علشان يظهر في الصفحات
            localStorage.setItem("currentUser", username.value);

            // ✅ التأكد إن للمستخدم درجات، لو مش موجودة نضيفها
            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (!users[username.value]) {
                users[username.value] = {
                    "رياضيات": 0,
                    "علوم": 0,
                    "لغة عربية": 0,
                    "لغة إنجليزية": 0,
                    "تاريخ": 0
                };
            }
            localStorage.setItem("users", JSON.stringify(users));

            // ✅ التحويل للصفحة الرئيسية
            setTimeout(() => {
                window.location = "./home.html";
            }, 500);
        } else {
            alert("Your UserName or Password is Wrong..?");
        }
    }
});

