let h;

function setup() {
//  h = document.documentElement.scrollHeight;
//  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(179,179,179);
}

let mic;
let fft;
let res = 200
let spacimg;
let noiseRes = 0.01;
let oldN;
let offSet = 0.0;

let amp;

let yOffset = 200; // first starting offset


let ca;
let cb;

let wind; 
let sea; 

let trees;
let ice;

function setup() {
  createCanvas(1000, 500);
background(0);
 mic = new p5.AudioIn();
mic.start();
spacing = width/res;
 noiseSeed(7)
  
  fft = new p5.FFT(); //fast fourier transform
  fft.setInput(mic);
  
  amp = new p5.Amplitude();
  
  amp.setInput(mic);
  amp.toggleNormalize(true);
  amp.smooth(true);
  
  
  wind = color(127, 179, 213);
  sea = color( 11, 83, 69 );


  trees = color(17, 120, 100);
  ice = color( 204, 204, 255 )
  
  
  ca = wind;
  cb = sea;
}

function draw() {

  // new amplitude measurement
  let loud = amp.getLevel();

// new fft analysis of new microphone sample
  fft.analyze();
  
  
  let bass = fft.getEnergy("bass"); // low frequency. value between 0 and 255
  let mid = fft.getEnergy("mid"); // mid
  let treble = fft.getEnergy("treble"); //high
// get specific information about spectral centroid 
let centroid =  fft.getCentroid();
  
  
// rescale (0-255) --> (0-1.0);
  bass = bass / 255;
  mid = mid / 255;
  treble = treble / 255;

  // highest is 5000hz, lowest is 500 hz; 
 centroid = map(centroid,500,5000,0.0,0.5);

  
 // color interpolation 

  
  
  let c = lerpColor(ca, cb, centroid); // expects an interpolation value of 0 to 1
    
  let wa = 1;
  let wb = 20;
  
  let w = map(loud, 0, 1, wa, wb)
  
  strokeWeight(w);
  
  
translate(0,yOffset);
  // reset 
  if (yOffset < -200){ // when does it reset?
    yOffset = 200; // where does it reset to ? 
    
    ca = trees;
    cb = ice;
    
  }
// ??????  
 oldN = 200;
  for(x=0;x<res+1;x++){
 let n = noise((x*noiseRes), offSet);
//let n = noise((x*offSet) * noiseRes);
    n = map(n,0.0,1.0,0,400)
    line(x*spacing,n,(x-1)*spacing,oldN);
   oldN = n; 
    stroke(c)
// ?????
  }
yOffset -= loud;
  offSet += loud*0.01; // chilling out the noise texture variation 
} 


