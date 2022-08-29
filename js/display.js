let state = 0;

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var elements = document.getElementById("sidebar").querySelectorAll(".btn");
  for (e=0;e<elements.length;e++){
    elements[e].classList.toggle("dark-mode");
  }

  var butt = document.getElementById("darkToggle");


  if (state>1){
    state == 0;
  }
  butt.classList.toggle("btn-light");
  butt.classList.toggle("btn-dark");

  if (state == 1){
  butt.innerHTML = "Dark";
  }
  else {
    butt.innerHTML = "Light";
  }

  state += 1;

}


function loadDoc(name, dest, type) {

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
