var menuVisible = false;
var mobileLayout = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  mobileLayout = true;
  document.getElementById("styles").href = 'styles-mobile.css';
}

function toggleMenu()
{
	if(menuVisible == false)
	{
		document.getElementById("iconMenu-RP").style.display = "block";
		document.getElementById("iconMenuBorder-RP").style.display = "block";
		menuVisible = true;
	}
	else
	{
		document.getElementById("iconMenu-RP").style.display = "none";
		document.getElementById("iconMenuBorder-RP").style.display = "none";
		menuVisible = false;
	}
}
function hideMenu()
{
	if(menuVisible == true)
	{
		document.getElementById("iconMenu-RP").style.display = "none";
		document.getElementById("iconMenuBorder-RP").style.display = "none";
		menuVisible = false;
	}
}

function populateHiddenTextbox()
{
	var text = document.getElementById("tbMobile").value;
	document.getElementById("tbDesktop").value = text;
	
	//alert(document.getElementById("tbDesktop").value);
}

function setStorage()
{
	if (mobileLayout == false)
	{
		window.sessionStorage.setItem('query',document.getElementById('tbDesktop').value);
	}
	else
	{
		window.sessionStorage.setItem('query',document.getElementById('tbMobile').value);
	}
}
function getStorage()
{
	if (mobileLayout == false)
	{
		document.getElementById('tbDesktop').value = window.sessionStorage.getItem('query');
	}
	else
	{
		document.getElementById('tbMobile').value = window.sessionStorage.getItem('query');
	}

	document.title = window.sessionStorage.getItem('query') + ' - Doodle Google';
}