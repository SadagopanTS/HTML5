function dofirst(){
	var x=document.getElementById('canvas');
	canvas = x.getContext('2d');
	/* canvas.strokeRect(10,10,100,200);
	canvas.fillStyle="blue";
	canvas.strokeStyle="red"; 
	var g = canvas.createLinearGradient(0,0,100,100);
	g.addColorStop(.0,"blue");
	g.addColorStop(.5,"red");
	canvas.fillStyle=g;
	canvas.fillRect(0,0,100,100);
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(70,250);
	canvas.lineTo(300,200);
	canvas.closePath();
	canvas.stroke(); */
	canvas.shadowOffsetX=6;
	canvas.shadowOffsetY=6;
	canvas.shadowBlur=6;
	canvas.shadowColor='rgba(0,0,255,.5)';
	canvas.font="bold 72px Calibri";
	canvas.textAlign="end";
	canvas.fillText("India",300,100);
}
window.addEventListener("load",dofirst,false);