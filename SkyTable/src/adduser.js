let add=document.querySelector('#add')
add.onclick=()=>{
    addData()
}

const addData = async ()=>{
    let username=document.querySelector("#username").value;
    let app=document.querySelector("#app").value;
    let status=document.querySelector("#status").value;

    let send_this_data={
        username,
        app,
        status,
    }
    let res=await fetch(`https://evening-depths-19962.herokuapp.com/apps`,{
        method:'POST',
        body:JSON.stringify(send_this_data),
        headers:{
            'Content-Type': 'application/json',}
    })
    let data=await res.json()
    console.log(data)
    window.location.href="adminpanel.html"
}