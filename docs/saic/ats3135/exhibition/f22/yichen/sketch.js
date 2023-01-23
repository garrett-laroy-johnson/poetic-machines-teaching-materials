let song;
let amp;
let button;
let Sound, fft;


function pauseSong(){
  if(song.isPlaying()){
    song.pause();
  }else{
    song.play();
  }
  
}

function preload(){
  song = loadSound('murder_01.mp3');
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  button = createButton('pause');
  button.mousePressed(pauseSong);
  song.play();
  
  fft = new p5.FFT();
  frameRate(20);

  //mic = new p5.AudioIn();
  //mic.start();
}

function draw() {

  background(0);

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,80,80,60);
  strokeWeight(2);
  for(let i=0;i<waveform.length;i++){
    let angle = map(i,0,1024,0,360);
    x = width/2 + cos(angle) * 180;
    y = height/2 + sin(angle) * 180;
    let r = map(waveform[i]*5,-0.8,10,20,500);
    x1 = width/2 + cos(angle) * r;
    y1 = height/2 + sin(angle) * r;
    line(x,y,x1,y1);
    rotate();}
  endShape();
}


  
