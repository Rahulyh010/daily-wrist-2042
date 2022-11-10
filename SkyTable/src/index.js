import navbar from "/SkyTable/components/navbar.js"

//console.log(navbar());

let navbar1= document.getElementById("navbar")
navbar1.innerHTML=navbar();

let arr=["https://cdn5.vectorstock.com/i/1000x1000/34/99/digital-marketing-tools-and-process-isometric-3d-vector-23923499.jpg",
"https://tinyurl.com/2k4b5268",
"https://tinyurl.com/25275mcf",
"https://tinyurl.com/yckwfkbk"]

let colors=["#EAEDED","#E9F7EF","#EBF5FB","#EBF5FB"]

let i=0;
let image= document.querySelector("#img>img")
image.src= arr[0];
setInterval(function(){
    i++;
//console.log(i);
    image.src=arr[i];

    if(i==3){
        i=-1;
    }
   

   
},4000)


let j=0;
let C= document.querySelector("#container")
C.style.backgroundColor=colors[0];
setInterval(function(){
    j++;
//console.log(i);
C.style.backgroundColor=colors[j];

    if(j==3){
        j=-1;
    }
   

   
},3000)




