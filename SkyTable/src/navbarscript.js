
import navbar from '../components/navbar.js'
import footer from '../components/footer.js'
let navbar_div=document.getElementById('navbar')
navbar_div.innerHTML=navbar()
let footer_div=document.getElementById('footer')
footer_div.innerHTML=footer()
let product=document.querySelector("#opt1")
product.onclick=()=>{
    document.querySelector("#solutions>#dropdown").style.display="none";
    document.querySelector("#enterprise>#dropdown").style.display="none";
    document.querySelector("#product>#dropdown").style.display="none";
    document.querySelector("#resources>#dropdown").style.display="none";
    document.querySelector("#product>#subdown").style.display="none";
    document.querySelector("#solutions>#subdown").style.display="none";
    let product_dropdown=document.querySelector("#product")
    product_dropdown.style.display="flex"
    let dropdown=document.querySelector("#product>#dropdown")
    dropdown.style.visibility="visible"
    dropdown.style.display="block"
    dropdown.style.opacity=1
    const margin=()=>{
        let dropdown=document.querySelector("#product>#dropdown")
        dropdown.style.margin="40px 0px 0px 0px"
    }
    // setInterval(margin,1000)

}
let features=document.querySelector("#features")
features.onclick=()=>{
    let features_dropdown=document.querySelector("#product>#subdown")
    features_dropdown.style.display="block"
}
let solutions=document.querySelector("#opt2")
solutions.onclick=()=>{
    document.querySelector("#solutions>#dropdown").style.display="none";
    document.querySelector("#enterprise>#dropdown").style.display="none";
    document.querySelector("#product>#dropdown").style.display="none";
    document.querySelector("#resources>#dropdown").style.display="none";
    document.querySelector("#dropdown").style.visibility="hidden";
    document.querySelector("#product>#subdown").style.display="none";
    document.querySelector("#solutions>#subdown").style.display="none";
    let solutions_dropdown=document.querySelector("#solutions")
    solutions_dropdown.style.display="flex"
    let dropdown=document.querySelector("#solutions>#dropdown")
    dropdown.style.visibility="visible"
    dropdown.style.display="block"
        dropdown.style.opacity=1
}
let byTeam=document.querySelector("#team")
byTeam.onclick=()=>{
    let byTeam_dropdown=document.querySelector("#solutions>#subdown")
    byTeam_dropdown.style.display="block"
}
let enterprise=document.querySelector("#opt4")
enterprise.onclick=()=>{
    document.querySelector("#solutions>#dropdown").style.display="none";
    document.querySelector("#enterprise>#dropdown").style.display="none";
    document.querySelector("#product>#dropdown").style.display="none";
    document.querySelector("#resources>#dropdown").style.display="none";
    document.querySelector("#dropdown").style.visibility="hidden";
    document.querySelector("#product>#subdown").style.display="none";
    document.querySelector("#solutions>#subdown").style.display="none";
    let enterprise_dropdown=document.querySelector("#enterprise")
    enterprise_dropdown.style.display="flex"
    let dropdown=document.querySelector("#enterprise>#dropdown")
    dropdown.style.visibility="visible"
    dropdown.style.display="block"
    dropdown.style.opacity=1
}
let resources=document.querySelector("#opt5")
resources.onclick=()=>{
    document.querySelector("#solutions>#dropdown").style.display="none";
    document.querySelector("#enterprise>#dropdown").style.display="none";
    document.querySelector("#product>#dropdown").style.display="none";
    document.querySelector("#resources>#dropdown").style.display="none";
    document.querySelector("#dropdown").style.visibility="hidden";
    document.querySelector("#product>#subdown").style.display="none";
    document.querySelector("#solutions>#subdown").style.display="none";
    let resources_dropdown=document.querySelector("#resources")
    resources_dropdown.style.display="flex"
    let dropdown=document.querySelector("#resources>#dropdown")
    dropdown.style.visibility="visible"
    dropdown.style.display="grid"
        dropdown.style.opacity=1
}
let explore=document.getElementById('explore')
explore.onclick=()=>{
    let msg_area=document.getElementById('robot')
    let msg=document.createElement('p')
    msg.setAttribute("class","msg-right")
    msg.innerHTML=explore.innerHTML
    let msg2=document.createElement('p')
    msg2.setAttribute("class","msg-left")
    msg2.innerHTML=`Sounds good!

    Sent by: Virtual Assistant

    SkyTable is a no-code/low-code application development platform that arms modern teams with powerful visibility and flexibility to adapt processes and workflows based on changing business needs.
    
    Sent by: Virtual Assistant

    Would you like to speak to a specialist to learn more about how SkyTable can work for your organization?`
    msg.style.backgroundColor="#052d69"
    msg.style.color="white"
    msg_area.append(msg,msg2)
}

let pricing=document.getElementById("pricing")
pricing.onclick=()=>{
    let msg_area=document.getElementById('robot')
    let msg=document.createElement('p')
    msg.setAttribute("class","msg-right")
    msg.innerHTML=explore.innerHTML
    let msg2=document.createElement('p')
    msg2.setAttribute("class","msg-left")
    msg2.innerHTML=`Would you like to speak to a specialist to discuss pricing in detail?`
    msg.style.backgroundColor="#052d69"
    msg.style.color="white"
    msg_area.append(msg,msg2)
}

let billing=document.getElementById("billing")
billing.onclick=()=>{
    let msg_area=document.getElementById('robot')
    let msg=document.createElement('p')
    msg.setAttribute("class","msg-right")
    msg.innerHTML=explore.innerHTML
    let msg2=document.createElement('p')
    msg2.setAttribute("class","msg-left")
    msg2.innerHTML=`Got it!

    Please share your billing question below 👇`
    msg.style.backgroundColor="#052d69"
    msg.style.color="white"
    msg_area.append(msg,msg2)
}
let support=document.getElementById("support")
support.onclick=()=>{
    let msg_area=document.getElementById('robot')
    let msg=document.createElement('p')
    msg.setAttribute("class","msg-right")
    msg.innerHTML=explore.innerHTML
    let msg2=document.createElement('p')
    msg2.setAttribute("class","msg-left")
    msg2.innerHTML=`Would you like to speak to a specialist to discuss pricing in detail?`
    msg.style.backgroundColor="#052d69"
    msg.style.color="white"
    msg_area.append(msg,msg2)
}

let icon=document.querySelector("#icon")
icon.onclick=()=>{
    icon.style.display="none"
    let main=document.querySelector("#virtual_assistant")
    main.style.display="block"
}

let end=document.querySelector("#close")
end.onclick=()=>{
    let main=document.querySelector("#virtual_assistant")
    main.style.display="none"
    icon.style.display="flex"
}