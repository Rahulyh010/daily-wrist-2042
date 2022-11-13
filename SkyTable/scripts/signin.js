let email = document.getElementById("email");
let email_span = document.getElementById('email_span');
email.addEventListener("click", myClick);

let pass = document.getElementById('password');
let pass_span = document.getElementById('pass_span');
pass.addEventListener("click", pass);
pass.addEventListener("input", password)

let signin_btn = document.getElementById("signin_btn");
signin_btn.addEventListener("click", signin);



function myClick() {
    email.style.outlineColor = "#2d7ff9";
    pass.style.outlineColor = "#2d7ff9"
}

class User {

    constructor() {

    }

    validateUsername(username) {

        return username.includes('@') ? false : true;

    }

    validatePassword(password) {
        return password.length < 8 ? false : true;
    }
}
var symbol = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function password() {

    if (email.value.length == 0 && pass.value.length > 0) {
        email_span.innerText = "Invalid email"

    } if (pass.value.length >= 8) {
        signin_btn.style.backgroundColor = "blue";
    }
}
let resister_email = localStorage.getItem("resister_email")

function signin() {
    if (email.value.match(symbol) && pass.value.length <= 8) {
        pass_span.innerText = "Password must be at least 8 characters"


    } else if (email.value.match(symbol) && resister_email === email.value && pass.value.length >= 6) {

        login();
        alert("You have login Succesfully!!!")
        
        localStorage.setItem('password', pass.value);

    } else {
        email_span.innerText = "Invalid email"
    }

}

function login(){
setInterval(function () {
    if(email.value.match(symbol) && resister_email === email.value && pass.value.length >= 6){
    
    window.location.href = "index.html"  
    }

}, 2000);
}
// code added succesfully