
/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

var helpMenuDiv = document.getElementById("menu-content");
var helpMenu = document.getElementById("menu-toggle");

document.onclick = check;

function check(e){
  var target = (e && e.target) || (event && event.srcElement);

 
  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {navMenuDiv.classList.add("hidden");}
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
  
  //Help Menu
  if (!checkParent(target, helpMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, helpMenu)) {
      // click on the link
      if (helpMenuDiv.classList.contains("hidden")) {
        helpMenuDiv.classList.remove("hidden");
      } else {helpMenuDiv.classList.add("hidden");}
    } else {
      // click both outside link and outside menu, hide menu
      helpMenuDiv.classList.add("hidden");
    }
  }
  
}

function checkParent(t, elm) {
  while(t.parentNode) {
    if( t == elm ) {return true;}
    t = t.parentNode;
  }
  return false;
}
