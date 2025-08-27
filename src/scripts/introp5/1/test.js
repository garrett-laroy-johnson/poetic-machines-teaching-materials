function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(100, 150, 255);
  ellipse(mouseX, mouseY, 100, 100);
  text(mouseX + ", " + mouseY, mouseX, mouseY);
  console.log(mouseX + ", " + mouseY);
}
