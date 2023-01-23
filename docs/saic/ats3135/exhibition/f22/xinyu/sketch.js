

let sun;
let cam;
let art;
var inc = 0.08;
var scl = 10;
var pix = 6;
var cols, rows;

var zoff = 0;

var fr;

var arrows = [];

var flowfield;
var boxSz = 150;
var numSpheres = 200;
var e = [];
var f = [];
var g = [];

let myFont;
let mic;
let fft;

function preload() {
  myFont = loadFont("Apple Symbols.ttf");
}

function setup() {
  let canvas = createCanvas(innerWidth, 600, WEBGL);
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;

  cam = createEasyCam({ distance: 800 });
  sun = new Planet(300, 0, 0);
  sun.spawnMoons(12, 1);
  art = createGraphics(300, 300);
  arr = createGraphics(300, 300);

  cols = floor(300 / pix);
  rows = floor(300 / pix);

  flowfield = new Array(cols * rows);
  
  seed = random(21);
  for (var j = 0; j < numSpheres; j++) {
    e[j] = random(-boxSz, boxSz);
    f[j] = random(-boxSz, boxSz);
    g[j] = random(-boxSz, boxSz);
  }
}

function draw() {
  background(0, 20, 50, 5);
  art.background(0);

  stroke(239);
  noStroke();
  fill(0);
  textAlign(CENTER);

  // Set constant seed
  randomSeed(seed);

  // Stars
  for (let i = 0; i < 500; i++) {
    stroke(random(150, 250), random(120, 230), random(0, 15), random(100, 150));
    strokeWeight(random(4));
    point(random(-600, 600), random(-600, 600), random(-600, 600));
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var r = map(angle, 0, TWO_PI, 255, 0);
      var v = p5.Vector.fromAngle(angle);
      v.setMag(5);
      flowfield[index] = v;
      art.noStroke();
      art.fill(r, 140, 200, 200);
      art.rect(x * pix, y * pix, pix, pix);
      xoff += inc;
    }
    yoff += inc;

    zoff += 0.0003;
  }

  //   var j = 0;
  //   for (var i = 0; i < 20; i++) {
  //     var deg = noise(j) * TWO_PI;
  //     var pos = createVector(random(300), random(300));
  //     var vel = p5.Vector.random2D();
  //     var acc = createVector();
  //     var maxspeed = 2;
  //     push();
  //     arr.translate(pos.x, pos.y);
  //     arr.rotate(vel.heading());
  //     arr.textAlign(CENTER);
  //     arr.stroke(255, 0, 0);
  //     arr.textSize(20);
  //     // art.fill(255, 0, 0);
  //     arr.text("⬄", 0, 0);

  //     pop();
  //     j += 0.01;
  //     vel.add(acc);
  //     vel.limit(maxspeed);
  //     pos.add(vel);
  //     acc.mult(0);
  //   }
  sun.show();
  sun.orbit();

  // for (var i = 0; i < arrows.length; i++) {
  //   arrows[i].follow(flowfield);
  //   // arrows[i].behaviors();
  //   arrows[i].update();
  //   arrows[i].edges();
  //   arrows[i].show();
  //   arrows[i].blast();
  // }
  // texture(arr);
  //   box(this.radius+1);
  let waveF = fft.waveform();

  var box = createVector(random(1), random(1), random(1));
  var vel = p5.Vector.random2D();
  var acc = createVector();
  for (var a = 0; a < numSpheres; a++) {
    let o = map(a, 0, waveF.length, 0, 0.3);
    let h = map(waveF[a], -1, 1, 1, 50);
    let k = map(waveF[a], -1, 1, 100, 360);
    push();
    translate(e[a], f[a], g[a]);
    rotateX(random(TWO_PI));
    rotateY(random(TWO_PI));
    rotateZ(random(TWO_PI));
    textAlign(CENTER);
    textFont(myFont);
    colorMode(HSB, 360, 100, 100, 100);

    fill(int(k), 100, 100, 200);
    textSize(h);
    text("⬌", box.x, box.y, box.z);
    // sphere(boxSz / 50, 8);
    vel.add(acc);
    vel.limit(2);
    box.add(frameCount * o);
    acc.mult(0);
    pop();

    if (box.x > 160) {
      box.x = -160;
    }
    if (box.x < -160) {
      box.x = 160;
    }
    if (box.y > 160) {
      box.y = -160;
    }
    if (box.y < -160) {
      box.y = 160;
    }
    if (box.z > 160) {
      box.z = -160;
    }
    if (box.z < -160) {
      box.z = 160;
    }
  }
}
