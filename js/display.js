let state = 0;

let splash = 0;

function localSettings (){
 state = localStorage.getItem("state");
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var elements = document.getElementById("sidebar").querySelectorAll(".btn");
  for (e=0;e<elements.length;e++){
    elements[e].classList.toggle("dark-mode");
  }

  var butt = document.getElementById("darkToggle");



  butt.classList.toggle("btn-light");
  butt.classList.toggle("btn-dark");

  if (state % 2){
  butt.innerHTML = "Dark";
  bg = "white";
  }
  else {
    butt.innerHTML = "Light";
    bg = "black";
  }

  state += 1;
  localStorage.setItem("state", state);
}


function loadDoc(name, dest, type) {
if (splash<1){
hookToProcessing();
}

if (dest ==="main-window"){
window.scrollTo(0,0);
}

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       document.getElementById(dest).innerHTML =
       this.responseText;
     }




}


  xhttp.open("GET", `../html/${name}.html`, true);

  xhttp.send();


}
