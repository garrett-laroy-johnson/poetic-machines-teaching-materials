let w = 50; // the diameter of the cricle. half the diameter = radius

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  circle(200, 200, w);
  // use the system variable mouseIsPressed in order to return a true/false data (BOOLEAN) variable true or false. off or on, 0 + 1 ,

  let d = dist(200, 200, mouseX, mouseY);
  let hover = d < w / 2;
  if (hover == true && mouseIsPressed) {
    fill("magenta"); // button press behavior
  } else if (hover && mouseIsPressed == false) {
    fill("red");
  } else {
    fill("blue"); // default behavior
  }

  //  print(mouseX, mouseY);
}

// 1. default behavior -- for IF the mouse is NOT over the circle AND it is NOT clicked.

// 2. hover behavior for IF the the mouse is over the circle AND it IS NOT clicked

// 3. button press behavior for IF Fthe mouse is over the cricle AND it IS clicked
