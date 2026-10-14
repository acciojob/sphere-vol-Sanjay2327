let radius = document.getElementById("radius") 
let volume = document.getElementById("volume") 
let submit = document.getElementById("submit") 


function volume_sphere() {
    //Write your code here
    let radius1 = parseInt(radius.value) ;
     volume.textContent = "result " + (4/3) * Math.PI * Math.pow(radius1,3)
  
} 
document.getElementById("submit").addEventListener("click" ,volume_sphere ) ;
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
