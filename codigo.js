const toggle = document.getElementById("container");
const body = document.querySelector("body");
const container = 

toggle.addEventListener("click",()=>{
	toggle.classList.toggle("active");
	body.classList.toggle("active")
})

