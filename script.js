// let a=document.body.firstElementChild.children[3];
//let box = document.getElementsByClassName("box");
//box[2].style.backgroundColor="red";
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor="rgb(35, 169, 179)";
// })
// document.querySelector(".container").innerHTML="Hey I am Sachin."
//console.log(a);
 
// Create element
// let div=document.createElement("div");
// div.innerHTML="Hello I am a software Engineer.";
// div.setAttribute("class","created");
// document.querySelector(".container").prepend(div);

 

let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="Hlo! <b>Your Name</b>, How are you?"
})