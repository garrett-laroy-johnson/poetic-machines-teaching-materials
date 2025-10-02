function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  strokeWeight(10);
}

function draw() {
  if (mouseIsPressed === true) {
    // slower is heavier weight and faster is lighter weight
    let distance = dist(mouseX, mouseY, pmouseX, pmouseY); // in terms of pixels 0-400
    //nsole.log(distance);
    let weight = map(distance, 0, 30, 30, 1, true); //strokeWeight -- pixels

    strokeWeight(weight);

    fill(255, 150); // 2 values: 1st greyscale, 2nd opacity/transparency
    // circle(mouseX,mouseY,30);
    line(mouseX, mouseY, pmouseX, pmouseY); //x1,y1,x2,y2
  }
}
