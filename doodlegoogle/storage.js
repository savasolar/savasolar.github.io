function setStorage()
{
	window.sessionStorage.setItem('query',document.getElementById('tb').value);
}

function getStorage()
{
//	let val = window.sessionStorage.getItem('query');
//	console.log(val);
	document.getElementById('tb').value = window.sessionStorage.getItem('query');
	document.title = window.sessionStorage.getItem('query') + " - Doodle Google";
}