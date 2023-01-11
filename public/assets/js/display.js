let state;
let splash = 0;
let bg = "white";

// function initDark() {
//   state = getItem('dark');
//   console.log(state);
//   if (state === NaN) {
//     state = 0;
//   }
//   let butt = document.getElementById("darkToggle");
//   if (state == 1) {
//     butt.innerHTML = "Light";
//     bg = "black";
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//     let elements = document.getElementById("sidebar").querySelectorAll(".btn");
//     for (e = 0; e < elements.length; e++) {
//       elements[e].classList.toggle("dark-mode");
//     }
//     butt.classList.toggle("btn-light");
//     butt.classList.toggle("btn-dark");
//   }
// }

// function darkMode() {
//   let element = document.body;
//   element.classList.toggle("dark-mode");
//   let elements = document.getElementById("sidebar").querySelectorAll(".btn");
//   for (e = 0; e < elements.length; e++) {
//     elements[e].classList.toggle("dark-mode");
//   }
//   let butt = document.getElementById("darkToggle");
//   butt.classList.toggle("btn-light");
//   butt.classList.toggle("btn-dark");
//   if (state == 1) {
//     butt.innerHTML = "Dark";
//     bg = "white";
//   } else {
//     butt.innerHTML = "Light";
//     bg = "black";
//   }
//   state += 1;
//   if (state >= 2) {
//     state = 0;
//   }
//   storeItem('dark', state);
//   console.log(state);
//   let test = getItem('dark');
//   console.log("test test " + test)
// }
