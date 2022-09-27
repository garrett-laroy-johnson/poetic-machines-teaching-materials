let res;
let matrix;
let timestep = 120; // timestep in FPS
let crawlers = [];
let crawInit = 1; // initial number of crawlers
let painted = 0; // number of squares painted
function setup() {
  noStroke();
  frameRate(timestep);
  res = window.innerWidth;
  createCanvas(window.innerWidth * 0.75, window.innerHeight).parent("#splash")
  matrix = new mat(res);
  matrix.fill();
  // for (i = 0; i < crawInit; i++) {
  //   let b = new Crawler(Math.floor(random(res)), Math.floor(random(res)), matrix);
  //   crawlers.push(b);
  // }
  background(bg);
  textSize(30);
  text("[click & drag]", width / 4, height / 2)
}

function mousePressed() {
  if (painted < 1) {
    background(bg);
  }
  let b = new Crawler(Math.floor((mouseX / width) * res), Math.floor((mouseY / width) * res), matrix);
  crawlers.push(b);
}

function mouseDragged() {
  let b = new Crawler(Math.floor((mouseX / width) * res), Math.floor((mouseY / width) * res), matrix);
  crawlers.push(b);
}

function draw() {
  matrix.getTotal();
  if (matrix.total < res * 2) {
    noLoop()
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