const W = 800;
const H = 640;

let faceapi;
// facd-apias a variable
//face-api:Self-service scripts developed based on the machine learning library tensorFlow
//ml5.js: Open source machine learning libraries for self-service scripting (various machine learning-based libraries)

//faceapi The returned result data store variable
let detections;

//Declare the webcam video storage variable

let video;

//p5jsDeclare canvas storage variables

let canvas;

let catGif;

// Declare a color value variable to track

let trackColor;

const MASK = {
  1: {
    offsetY: -130,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.7,
    img: null,
    tooth: null,
  },
  2: {
    offsetY: -130,
    offsetScale: 0.8,
    wScale: 0.9,
    hScale: 0.4,
    img: null,
    tooth: null,
  },
  3: {
    offsetY: -100,
    offsetScale: 1,
    wScale: 1,
    hScale: 1,
    img: null,
    tooth: null,
  },
  4: {
    offsetY: -140,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.7,
    img: null,
    tooth: null,
  },
  5: {
    offsetY: -140,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.5,
    img: null,
    tooth: null,
  },
  6: {
    offsetY: -140,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.5,
    img: null,
    tooth: null,
  },
  7: {
    offsetY: -140,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.5,
    img: null,
    tooth: null,
  },
  8: {
    offsetY: -140,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.5,
    img: null,
    tooth: null,
  },
  9: {
    offsetY: -60,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 1,
    img: null,
    tooth: null,
  },
  10: {
    offsetY: -140,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 0.5,
    img: null,
    tooth: null,
  },
  11: {
    offsetY: -60,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 1,
    img: null,
    tooth: null,
  },
  12: {
    offsetY: -60,
    offsetScale: 1,
    wScale: 0.7,
    hScale: 1,
    img: null,
    tooth: null,
  },
};

let currentMaskNumber = "1";
let currentMaskImg;
let currentToothImg;

let cats = [];

let radio;

const FOOD_LIST = [];

function preload() {
  MASK["1"].img = loadImage("1.png");
  MASK["2"].img = loadImage("2.png");
  MASK["3"].img = loadImage("3.png");
  MASK["4"].img = loadImage("4.png");
  MASK["5"].img = loadImage("5.png");
  MASK["6"].img = loadImage("6.png");
  MASK["7"].img = loadImage("7.png");
  MASK["8"].img = loadImage("8.png");
  MASK["9"].img = loadImage("9.png");
  MASK["10"].img = loadImage("10.png");
  MASK["11"].img = loadImage("11.png");
  MASK["12"].img = loadImage("12.png");

  MASK["1"].tooth = loadImage("tooth-1.png");
  MASK["2"].tooth = loadImage("tooth-2.png");
  MASK["3"].tooth = loadImage("tooth-3.png");
  MASK["4"].tooth = loadImage("tooth-4.png");
  MASK["5"].tooth = loadImage("tooth-5.png");
  // MASK["6"].tooth = loadImage("tooth-6.png");
  MASK["7"].tooth = loadImage("tooth-7.png");
  MASK["8"].tooth = loadImage("tooth-8.png");
  MASK["9"].tooth = loadImage("tooth-9.png");
  MASK["10"].tooth = loadImage("tooth-10.png");
  MASK["11"].tooth = loadImage("tooth-11.png");
  MASK["12"].tooth = loadImage("tooth-12.png");

  catGif = loadGif("cat.gif");
  currentMaskImg = MASK[currentMaskNumber].img;
  currentToothImg = MASK[currentMaskNumber].tooth;

  for (let i = 1; i <= 12; i++) {
    FOOD_LIST.push({
      img: loadImage(`food-${i}.png`),
      rate: random(0.3, 0.6),
    });
  }

  console.log(FOOD_LIST);
}

const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
};

function setup() {
  canvas = createCanvas(W, H);
  canvas.id("canvas");
  video = createCapture(VIDEO); // Create a video object

  video.size(W, H); //
  video.hide();

  //faceapi Function Settings : On/Off is available

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: false,
    minConfidence: 0.5, //(0-1 ,0.5 )
  };

  //faceapi Initialize machine learning (algorithm input, function setting, callback function)

  faceapi = ml5.faceApi(video, detection_options, modelReady);

  radio = createRadio();
  radio.option("12", "鼠");
  radio.option("10", "牛");
  radio.option("9", "虎");
  radio.option("11", "兔");
  radio.option("3", "龙");
  radio.option("2", "蛇");
  radio.option("1", "马");
  radio.option("4", "羊");
  radio.option("5", "猴");
  radio.option("6", "鸡");
  radio.option("7", "狗");
  radio.option("8", "猪");
  radio.style("display", "flex");
  radio.style("margin-top", "20px");
  radio.selected("1");

  //*******  Set the color value to track: Enter the RBG value directly or key the color (optional)

  trackColor = [232, 30, 30];

  let count = 0;
  for (let y = 0; y < height; y += int(height / 6)) {
    console.log(count);
    if (FOOD_LIST[count]) {
      FOOD_LIST[count].x = 30;
      FOOD_LIST[count].y = y;
      FOOD_LIST[count].a = random(-1, 1);
    }
    count++;

    if (FOOD_LIST[count]) {
      FOOD_LIST[count].x = width - 100;
      FOOD_LIST[count].y = y;
      FOOD_LIST[count].a = random(-1, 1);
    }
    count++;
  }
}

function draw() {
  currentMaskNumber = radio.value();
  currentMaskImg = MASK[currentMaskNumber].img;
  currentToothImg = MASK[currentMaskNumber].tooth;

  // Gets the pixel information of the video being shot

  video.loadPixels();

  //From here, go ahead and blur the part of all the pixels
  for (let y = 0; y < video.height; y += 10) {
    // x: 0- video of width Up to value

    for (let x = 0; x < video.width; x += 10) {
      // y: 0-video의 heightUp to value
      let loc = (x + y * video.width) * 4; // (4x pixel density)

      // current color
      //videoTake out red(), green(), and blue() from screen pixels, respectively.

      let r0 = video.pixels[loc];
      let g0 = video.pixels[loc + 1];
      let b0 = video.pixels[loc + 2];

      //Color to trace1

      let r1 = trackColor[0];
      let g1 = trackColor[1];
      let b1 = trackColor[2];

      //Using the Euclidean dist function for color comparison.
      let d1 = dist(r0, g0, b0, r1, g1, b1);

      // Apply an if statement with a color difference of 10 or less. This threshold of 50 is arbitrary.

      // Subject to change to require accuracy of tracking

      if (d1 < 50) {
        // if (catGif.loaded()) {
        //   if (cats.length < 50) {
        //     cats.push(
        //       new CatEffect(catGif, createVector(random(width), random(height)))
        //     );
        //   }
        // }
      }
    }
  }

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    cat.update();
    cat.draw();
    if (cat.life <= 0) {
      cats.splice(i, 1);
    }
  }

  // image(currentToothImg, 0, 0);

  // 画装饰物
  for (let item of FOOD_LIST) {
    push();
    translate(item.x, item.y);
    rotate(item.a);
    image(
      item.img,
      0,
      0,
      item.img.width * item.rate,
      item.img.height * item.rate
    );
    pop();
  }
}

//Callback: As soon as a face is detected, as a result got face
function modelReady() {
  faceapi.detect(gotResults); // Start detecting faces:Face detection

}

// GotResults : err, result 
function gotResults(err, result) {
  // Float over the console window when an error occurs
  if (err) {
    console.log(err);
    return;
  }

  //All non-error results are stored in detections
  detections = result;
  push();
  translate(width, 0);
  scale(-1, 1);
  background(255);
  image(video, 0, 0, width, height);

  if (detections) {
    if (detections.length > 0) {
      drawBoxs(detections);
      // drawLandmarks(detections);
    }
  }
  pop();

  // Face detection right back to get real-time result data
  faceapi.detect(gotResults);
}

function drawBoxs(detections) {
  //If even one face is recognized

  if (detections.length > 0) {
    for (f = 0; f < detections.length; f++) {
      let { _x, _y, _width, _height } = detections[f].alignedRect._box;
      stroke(44, 169, 225);
      strokeWeight(1);
      noFill();
      //Displaying rect and image at face positions

      // rect(_x, _y, _width, _height);

      const { offsetY, wScale, hScale, offsetScale } = MASK[currentMaskNumber];

      const baseW = 161;
      const baseH = 163;
      const boxWRate = map(_width / baseW, -2, 2, 1.1, 1.8);
      const boxHRate = map(_width / baseH, -2, 2, 1.2, 1.3);
      const negativeBoxHRate = map(_width / baseH, -2, 2, 0.1, 1.4);

      push();
      imageMode(CENTER);
      image(
        currentMaskImg,
        _x + _width / 2,
        _y + _height / 2 + offsetY * negativeBoxHRate,
        _width * boxWRate * wScale,
        _height * boxHRate * hScale
      );

      pop();
    }
  }
}

//Face marker thus drawing line function

function drawPart(feature, closed) {
  beginShape();
  for (let i = 0; i < feature.length; i++) {
    const x = feature[i]._x;
    const y = feature[i]._y;
    vertex(x, y);
  }
  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}

//When touching the screen, it is applied only if it is not full screen mode / already in full screen mode
function touchStarted() {
  // var fs = fullscreen();
  // if (!fs) {
  //   fullscreen(true);
  // }
}

//The size of the entire screening canvas changes.

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   video.size(windowWidth, windowHeight);
// }

/* //Disable response to some basic touch events, such as page scrolling

 */
document.ontouchmove = function (event) {
  event.preventDefault();
};

function drawLandmarks(detections) {
  noFill();
  stroke(161, 95, 251);
  strokeWeight(2);

  for (let i = 0; i < detections.length; i += 1) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;

    drawPart(mouth, true);
    drawPart(nose, false);
    drawPart(leftEye, true);
    drawPart(leftEyeBrow, false);
    drawPart(rightEye, true);
    drawPart(rightEyeBrow, false);
  }
}

function drawPart(feature, closed) {
  beginShape();
  for (let i = 0; i < feature.length; i += 1) {
    const x = feature[i]._x;
    const y = feature[i]._y;
    vertex(x, y);
  }

  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}

class CatEffect {
  constructor(img, pos) {
    this.img = img;
    this.vecAngle = -1;

    this.pos = pos;

    this.width = img.width;
    this.height = img.height;

    this.life = random(200, 400);

    this.acc = createVector(0, 0);
  }

  update() {
    const F = sin(this.life / 100);
    const xAdd = map(F, 0, 1, -3, 3);
    this.acc.x += xAdd;
    const yAdd = map(F, 0, 1, -0.1, -0.5);
    this.acc.y += yAdd;
    this.pos.add(this.acc);

    if (this.life > 0) {
      this.life--;
    }

    this.acc.mult(0);
  }

  draw() {
    const f = sin(this.life / 50);
    const rate = map(f, 0, 1, 0.1, 1);
    image(
      this.img,
      this.pos.x,
      this.pos.y,
      this.img.width * rate,
      this.img.height * rate
    );
  }
}
