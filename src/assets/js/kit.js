// based on drawing by kit schluter
// https://twitter.com/dedreytnien/status/1547318325826375680/photo/1

let density = 4;
let num;
let t;
let segments = [];
let weights = [];
let thresh = 40; // number between 0 100.
let samples = [];
let jitter = 3;
let displace = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight * 2).parent("#splash");
  num = height / density;
  t = 0.0001;

  //generate weights
  for (i = 0; i < num; i++) {
    weights.push(3 * noise(0.05 * i));
    // weights.push(random(2) + 1);

    displace.push(random(-jitter, jitter));
  }
}

function draw() {
  background(255);

  noFill();
  stroke("black");
  for (y = 0; y < num; y++) {
    //runs each line
    samples = [thresh + 1];
    // create row of samples from noise
    for (x = 0; x < num; x++) {
      let sample = 100 * noise(t + x * 0.025, y * 0.2);
      samples.push(sample);
    }
    //console.log(samples)
    // create temp variables to keep track of zero/thresh crossings and map to start and finish
    let strt = 1;
    let fnsh = -1;

    // go through each sample of the row
    for (d = 0; d < samples.length; d++) {
      if (samples[d] > thresh && strt < 0) {
        strt = d; // store y value for start of line segment
      } else if (strt >= 0 && samples[d] < thresh) {
        fnsh = d; // store y value for end of line segment

        segments.push([strt, fnsh]);
        strt = -1;
        fnsh = -1;
      } else if (strt >= 0 && d == samples.length - 1) {
        fnsh = d; // store y value for end of line segment

        segments.push([strt, fnsh]);
        strt = -1;
        fnsh = -1;
      }
    }

    strokeWeight(weights[y]);

    // draw lines from segments

    for (l = 0; l < segments.length; l++) {
      line(
        segments[l][0] * density,
        y * density + displace[l],
        segments[l][1] * density,
        y * density + displace[l]
      );
    }

    // clear segments variable for next line
    segments = [];
  }
  t += 0.0005;
  // noLoop();
}
