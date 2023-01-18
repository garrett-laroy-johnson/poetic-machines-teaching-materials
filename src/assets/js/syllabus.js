
var pages = ["about","materials","policies","presentation","schedule"];

window.onload=loadDocs("2101");

function loadDocs(course){
    for (i=0;i<pages.length;i++){
    loadDoc(course, pages[i]);
  }

}

function loadDoc(course, name) {



  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       document.getElementById(name).innerHTML =
       this.responseText;
     }
}
  xhttp.open("GET", `../../html/${course}/${name}.html`, true);
  console.log(`../../html/${course}/${name}.html`)
  xhttp.send();
}
