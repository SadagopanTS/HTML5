function mainfn(){
	/*document.querySelector('#one').onclick=subfn;*/
	var list=document.querySelectorAll("#one");
	for (var i=0;i<list.length;i++)
	{
		list[i].onclick=subfn;
	}

}
function subfn(){
	alert('Message from external Javascript file');
}
window.onload=mainfn;