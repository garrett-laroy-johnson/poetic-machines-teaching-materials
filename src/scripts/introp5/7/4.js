let x = 100;
let y = 100;
let w = 100; // width of circle is its diameter
let h = 200;
let r = w / 2; // radius is width / 2

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h; // TRUE if the distance between mouse and circle center is less that the circle's radius

  if (hover && mouseIsPressed) {
    fill("green"); // special behavior, hover AND pressed behavior!
  } else if (hover && mouseIsPressed == false) {
    fill("purple"); // hover NOT pressed
  } else {
    fill("blue"); // default behavior! if not pressed AND not hover
  }

  rect(x, y, w, h);
}
