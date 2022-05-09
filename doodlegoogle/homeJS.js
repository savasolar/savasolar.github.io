var menuVisible = false;
var mobileLayout = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  mobileLayout = true;
  document.getElementById("styles").href = 'styles-mobile.css';
}

function resized()
{
	if(moblieLayout == false)
	{
		var x = document.documentElement.scrollHeight;
		var p = document.getElementById("logo").offsetTop;
		var q = document.getElementById("searchControls").offsetTop;
	
		if (x < 850 && x > 650)
		{
			p = x - 595;
			q = x - 486;
		}
	
		if (x > 850)
		{
			p = 250;
			q = 359;
		}
	
		document.getElementById("logo").style.top = p + "px";
		document.getElementById("searchControls").style.top = q + "px";
	}
}
function toggleMenu()
{
	if(menuVisible == false)
	{
		document.getElementById("iconMenu").style.display = "block";
		document.getElementById("iconMenuBorder").style.display = "block";
		menuVisible = true;
	}
	else
	{
		document.getElementById("iconMenu").style.display = "none";
		document.getElementById("iconMenuBorder").style.display = "none";
		menuVisible = false;
	}
}
function hideMenu()
{
	if(menuVisible == true)
	{
		document.getElementById("iconMenu").style.display = "none";
		document.getElementById("iconMenuBorder").style.display = "none";
		menuVisible = false;
	}
}
function clearTextBox()
{
	document.getElementById("tb").value="";
}