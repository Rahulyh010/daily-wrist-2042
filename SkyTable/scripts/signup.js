let email = document.getElementById("email");
let span = document.getElementById('span');

let btn_conti = document.getElementById("btn_conti");
btn_conti.addEventListener("click", contiFun);

email.addEventListener("click", myClick);

function myClick() {
    email.style.outlineColor = "#2d7ff9"
}

email.addEventListener("input", myScript);
function myScript() {

    btn_conti.style.backgroundColor = "#2d7ff9"
    span.innerText = null;
}

var symbol = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function contiFun() {

    if (email.value.length == 0) {
        span.innerText = "Invalid email"
    }

    if (email.value.match(symbol)) {
        localStorage.setItem('resister_email', email.value)
        window.location.href = "signin.html";

    } else {
        span.innerText = "Invalid email"

    }
}
// code added succesfully