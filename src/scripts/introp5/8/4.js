// note, I have to comment out filters because of a bug in how my website converts them to be displayed.
// also note that the image locations are different from how they will look when you upload them to the p5 editor for the same reasons.

let img1, img2, img3, img4;

let s = 1; //scalar factor for currentImage1

// opacity of our second image
let a = 50;

// the threshold of our posterize
let t = 0.0;

let s2 = 2; // scalar factor for currentImage2

// carousel state
let state = 0; // state is either 0 or 1;
let counter1 = 0;
let counter2 = 0;

let ang = 0;

let currentImage1, currentImage2;

function preload() {
  img1 = loadImage("/assets/p5img/texture1.jpeg");
  img2 = loadImage("/assets/p5img/texture2.jpeg");
  img3 = loadImage("/assets/p5img/texture3.jpeg");
  img4 = loadImage("/assets/p5img/texture4.jpeg");
}

function setup() {
  createCanvas(640, 480);
  imageMode(CENTER);
  // set current images
  currentImage1 = img1;
  currentImage2 = img2;
}

function draw() {
  // drawing operations
  background(0);
  translate(width / 2, height / 2);
  ang += 0.001;
  push();
  scale(s);
  rotate(ang);

  tint(0, 255, 0, 126);
  image(currentImage1, 0, 0, img1.width, img1.height);
  //  filter(THRESHOLD, t); // range between 0 and 1
  // filter(INVERT);
  // filter(BLUR);

  pop();
  push();
  scale(s2);
  tint(0, 255, 0, a); // r,g,b,a
  image(currentImage2, 0, 0, img1.width, img1.height);
  //filter(BLUR);
  //filter(BLUR);

  pop();

  // logic counter animations operations
  a += 0.125;
  t += 0.0001;
  s += 0.0005;
  s2 -= 0.0005;

  //currentImage1 counter
  counter1++;
  if (counter1 > 1000) {
    s = 1; // reset scale of currentImage1
    counter1 = 0;
    a = 50;
    t = 0.0;
    if (currentImage1 == img1) {
      currentImage1 = img3;
    } else {
      currentImage1 = img1;
    }

    // cuurentImage2
    counter2++;

    if (counter2 > 1500) {
      s2 = 2;
      counter2 = 0;
      if (currentImage2 == img2) {
        currentImage2 = img4;
      } else {
        currentImage2 = img2;
      }
    }
  }
}
