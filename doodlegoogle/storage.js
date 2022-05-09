function setStorage()
{
	window.sessionStorage.setItem('query',document.getElementById('tb').value);
}

function getStorage()
{
	document.getElementById('tb').value = window.sessionStorage.getItem('query');
	document.title = window.sessionStorage.getItem('query') + ' - Doodle Google';
}