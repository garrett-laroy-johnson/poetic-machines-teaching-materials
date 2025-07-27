let res;
let matrix;
let timestep = 120; // timestep in FPS
let crawlers = [];
let crawInit = 1; // initial number of crawlers
let painted = 0; // number of squares painted
function setup() {
  frameRate(timestep);
  res = window.innerWidth;
  createCanvas(window.innerWidth, window.innerHeight * 2).parent("#splash");
  matrix = new mat(res);
  matrix.fill();
  // for (i = 0; i < crawInit; i++) {
  //   let b = new Crawler(Math.floor(random(res)), Math.floor(random(res)), matrix);
  //   crawlers.push(b);
  // }
  background(bg);
  textSize(30);
  text("[click & drag]", width / 4, height / 2);
  noStroke();
}

function mousePressed() {
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
  } else {
    if (painted < 1) {
      background(bg);
    }
    let b = new Crawler(
      Math.floor((mouseX / width) * res),
      Math.floor((mouseY / width) * res),
      matrix
    );
    crawlers.push(b);
  }
}

function mouseDragged() {
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
  } else {
    let b = new Crawler(
      Math.floor((mouseX / width) * res),
      Math.floor((mouseY / width) * res),
      matrix
    );
    crawlers.push(b);
  }
}

function draw() {
  matrix.getTotal();
  if (matrix.total < res * 2) {
    noLoop();
  }
  if (matrix.total < matrix.total) {
    for (i = 0; i < crawlers.length; i++) {
      crawlers[i].move();
    }
  } else {
    for (i = 0; i < crawlers.length; i++) {
      crawlers[i].move();
    }
  }
}

function hookToProcessing() {
  remove();
  splash += 1;
}
