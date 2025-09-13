function volume_sphere() {
	event.preventDefault();
	
const radius = document.getElementById('radius');
const volume = document.getElementById('volume');
	 const r = Number(radius.value);
    if(r<=0 || isNaN(r)) {
       volume.value ="NaN";
       return;
    }
   v  =  (4/3)*Math.PI*Math.pow(r,3);
	volume.value = v.toFixed(4);
  
} 

window.onload = ()=>{ document.getElementById('MyForm').onsubmit = volume_sphere;
				  }