let avg = [];
let avgWindow = 30;
const average = (array) => array.reduce((a, b) => a + b) / array.length;

// for loops !!! pt 2 . with nested for loops (eventually)
let offset = 0.01;

let numLines = 50; // number of lines
let spacing; // keep track of spacing between lines
let jitter;
let numJitts = 200;
let jitspacing;

let noiseScale = 0.3;

function setup() {
  let w = (window.innerWidth * 3) / 4;
  createCanvas(w, window.innerHeight * 2).parent("#splash");
  spacing = width / numLines; // set spacing
  jitspacing = height / numJitts; // set VERTICAL spacing;
  jitter = spacing / 2;
  noFill();
  strokeWeight(3);
}

function draw() {
  background(255);
  stroke(0);
  // 1. where do I start?;
  // 2. when do I stop? (under what conditions do I continue looping?);
  // 3. how do I change? ( what happens to the variable each loop repetition?);

  for (let i = 0; i < numLines; i++) {
    beginShape();
    curveVertex(spacing * i, 0); // beginning of squiggle;
    curveVertex(spacing * i, 0); // beginning of squiggle;
    for (let j = 0; j < numJitts; j++) {
      let n = noise(j * noiseScale + offset, i * noiseScale, offset);
      n = n * 2 - 1;
      curveVertex(spacing * i + n * spacing, j * jitspacing);
    }
    curveVertex(spacing * i, height); // end of shape
    curveVertex(spacing * i, height); // end of shape
    endShape();
  }

  //     // for demo purposes only!
  // for (let i = 0; i <numLines; i++){
  //    for (let j = 0; j < numJitts; j++){
  //     strokeWeight(3);
  //     point((spacing*i)+jitter, j*jitspacing)
  //   }
  // }

  let difX = abs(mouseX - pmouseX);

  let difY = abs(mouseY - pmouseY);

  let vel = floor(difX + difY);

  vel = constrain(vel, 0.005, 0.01);

  avg.push(vel);
  if (avg.length > avgWindow) {
    avg.splice(0, 1);
  }

  offset += 0.01;

  // noLoop(); // static image (no animation);
}
