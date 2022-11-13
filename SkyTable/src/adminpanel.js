const getData=async ()=>{
    let res=await fetch(`https://evening-depths-19962.herokuapp.com/apps`)
    let data=await res.json()
    append(data)
}
getData()

const append=(data)=>{
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(el){
        let tRow=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=el.id

        let td2=document.createElement("td")
        td2.innerText=el.username

        let td3=document.createElement("td")
        td3.innerText=el.app

        let td4=document.createElement("td")
        td4.innerText=el.status

        let td5=document.createElement("td")
        td5.innerText="Delete"
        td5.style.backgroundColor="red"
        td5.style.color="white"
        td5.onclick=()=>{
            deleteApp(el.id)
        }
        td5.id="delete"
        tRow.append(td1,td2,td3,td4,td5)
        document.querySelector("tbody").append(tRow)
    })
}

const deleteApp=async (id)=>{
    let res=await fetch(`https://evening-depths-19962.herokuapp.com/apps/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    let data=await res.json()
    window.location.reload()
}