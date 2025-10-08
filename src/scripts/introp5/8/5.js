// note, I have to comment out filters because of a bug in how my website converts them to be displayed.
// also note that the image locations are different from how they will look when you upload them to the p5 editor for the same reasons.
let img1, img2, img3, img4;

let a = 0;
let r = 0;
let dir = 1;

function preload() {
  img1 = loadImage("/assets/p5img/texture1.jpeg");
  img2 = loadImage("/assets/p5img/texture2.jpeg");
  img3 = loadImage("/assets/p5img/texture3.jpeg");
  img4 = loadImage("/assets/p5img/texture4.jpeg");
}
function setup() {
  createCanvas(640, 480);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  a += 1;
  r += 0.5 * dir;
  if (r > width / 2 || r < 0) {
    dir *= -1;
  }
  x = width / 2 + sin(a) * r;
  y = height / 2 + cos(a) * r;

  background(220);
  translate(width / 2, height / 2);
  push(); // start a drawing state
  rotate(90);
  let img2a = map(x, 0, width, 0, 127);

  tint(255, 0, 127, img2a);

  image(img2, 0, 0);
  pop(); // forgets everything after push

  let img1a = map(x, width, 0, 0, 127);
  tint(255, 0, 0, img1a);
  image(img1, 0, 0);

  let img3a = map(y, 0, height, 0, 127);
  tint(255, 0, 120, img3a);
  image(img3, 0, 0);

  let img4a = map(y, height, 0, 0, 127);
  tint(127, 0, 120, img4a);
  image(img4, 0, 0, width, height);
  //filter(BLUR);
  //filter(POSTERIZE, 4);
  //filter(BLUR);

  //   //filter(THRESHOLD, 0.5);
  //   filter(BLUR);

  //   //  filter(INVERT);

  //   fill(0, 0, 255);
  //   noStroke();
  //   circle(x, y, 3);
}
