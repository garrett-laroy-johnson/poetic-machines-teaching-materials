function setup() {
  createCanvas(500, 500);
}
// this is a loop! it runs again and again!
function draw() {
  background(255);

  // Head
  stroke("#E3C292");
  fill("#E3C292");
  strokeWeight(1);
  // x, y, width, height
  rect(225, 225, 80, 100);

  // eyes
  stroke("rgb(89,16,16)");
  strokeWeight(10);
  point(250, 250);
  point(285, 250);

  // mouse position finder
  console.log(mouseX, mouseY);
  // print() does the same thing as console.log !
}
