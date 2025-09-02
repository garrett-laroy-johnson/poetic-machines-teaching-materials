let g = 100;
let offset = 100;
let o = 255; // opacity

function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  noLoop();
}
function draw() {
  background(204, 0, 100);
  // stroke(greyscale, opacity)
  stroke(255, o);
  // adds a pixel value instead of an index

  //  for loop 1
  for (var x = 20; x < width; x += g) {
    stroke(255, o);
    line(x, 0, x + x / offset, height - 20); // x1, y1, x2, y2
    o -= 1;
  }

  // flor loop 2
  o = 0;
  for (var x = 20; x < width; x += g) {
    // rgb opacity: stroke(r,g,b,opacity)
    stroke(0, 0, 200, o);
    line(x, 0, x + x / offset, height - 20); // x1, y1, x2, y2
    o += 1;
  }
}
