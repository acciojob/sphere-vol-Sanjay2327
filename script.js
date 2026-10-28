let radius = document.getElementById("radius") 
let volume = document.getElementById("volume") 
let submit = document.getElementById("submit") 


function volume_sphere() {
    //Write your code here
     volume.value = parseInt((4/3) * Math.PI * Math.pow(radius.value,3)).toFixed(4)
  
} 
document.getElementById("submit").addEventListener("click" ,volume_sphere ) ;
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
