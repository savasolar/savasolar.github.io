var mobileLayout = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  mobileLayout = true;
  document.getElementById("styles").href = 'styles-b.css';
}

function contactOpen()
{
    document.getElementById("contact-page").style.display = "flex";
    document.body.style.overflow = "hidden";
    hamburgerClose();
}
function contactClose()
{
    document.getElementById("contact-page").style.display = "none";
    document.body.style.overflow = "visible";
}
function hamburgerOpen()
{
    document.getElementById("mobile-navigation-page").style.display = "flex";
    document.body.style.overflow = "hidden";
}
function hamburgerClose()
{
    document.getElementById("mobile-navigation-page").style.display = "none";
    document.body.style.overflow = "visible";
}