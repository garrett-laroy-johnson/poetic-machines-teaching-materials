// fill()
// noFill()
// noStroke()
// stroke()

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // 1 number is greyscale, 0 is black 255 is white
  // 3 number r,g,b color / hexcode
  background(178, 172, 136);
  stroke(50, 150, 100);
  strokeWeight(20);
  fill(100, 100, 0);
  beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(120, 230);
  vertex(120, 120);
  vertex(30, 75);
  endShape(CLOSE);

  arc(290, 60, 80, 80, PI, TWO_PI + HALF_PI);

  strokeWeight(2);
  stroke(100, 100, 0);
  fill(50, 150, 100);
  circle(width / 2, height / 2, width / 10);

  strokeWeight(20);
  point(100, 300);
}
