let login=document.querySelector("#login")
let usernames=["bhav1kmaru","rahulyh","sagarb","gurpreet"]
login.onclick=()=>{
    let username=document.querySelector("#username").value;
    let password=document.querySelector("#password").value;
    if(usernames.includes(username) && password=="skyadmin123"){
        window.location.href="adminpanel.html"
    }else{
        alert("Admin credentials are wrong. Please try again with correct details")
    }
}