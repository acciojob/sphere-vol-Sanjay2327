let radius = document.getElementById("radius") 
let volume = document.getElementById("volume") 
let submit = document.getElementById("submit") 


function volume_sphere() {
    //Write your code here
        let r = Number(radius.value) ;

   if(radius.value.trim() === "" || isNaN(r) || r < 0){
    volume.value = "NaN";
   }; 

   let  result = (4 / 3) * Math.PI * Math.pow(r , 3)
    volume.value = result.toFixed(4) ;

    return volume.value ;
} 
document.getElementById("submit").addEventListener("click" ,volume_sphere ) ;
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
