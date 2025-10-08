let w = 50;
let a = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();
  // must first translate to change the point of origin by addition
  translate(width / 2, height / 2);
  // before we THEN rotate

  a += 0.02;

  // push and pop allow us to isolate a drawing state
  push(); // start a drawing state
  rotate(a);
  // center square; square uses left and top x y positions
  square(-(w / 2), -(w / 2), w);
  pop(); // exit that drawing state

  //  // canvas border and quadrant
  square(-width / 4, -height / 4, width / 2);

  //    line(0,-height/2,0,height/2);

  //    line(-width/2,0,width/2,0)
}
