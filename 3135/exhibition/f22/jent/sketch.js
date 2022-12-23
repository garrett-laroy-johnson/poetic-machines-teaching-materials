// Adapted from Daniel Shiffman's tutorial: https://www.youtube.com/watch?v=4hA7G3gup-4&ab_channel=TheCodingTrain

// Text to Point + Vector Steering Behavior + mediapipe / hand tracking + speech +  Web

// Need to solve:
//1. old text deleted after new text (so can see the words more clearly?)
//2. 


let font;
let fontSize = 200;
let textArray, textArray2;

let vehicles = [];
let pt;

let x = [0];
let y = [0];
let z = [0];

let capture;

let speechRec;
let lang;
let input;
let words = [];
let wordsArray;

let cW, cH;

function preload() {
  font = loadFont("SFUFuturaHeavy.TTF");
}

function setup() {
  cW = windowWidth;
  cH = windowHeight;
  createCanvas(cW, cH);
  //colorMode(HSB);
  capture = createCapture(VIDEO);
  capture.hide();
  

  //SPEECH to TEXT
  lang = navigator.language || "en-US";
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = false; // continuous >< wait
  speechRec.start(continuous, interim); // start listening
  
  gotSpeech();
  
  //theTTP();
}

//HAND MEDIAPIPE
function onResults(results) {
  for (let h = 0; h < results.multiHandLandmarks.length; h++) {
    let p = results.multiHandLandmarks[h]; //POINTER FINGER
    x[h] = width - p[8].x * width;
    y[h] = p[8].y * height;
    z[h] = p[8].z;
  }
}

function draw() {
  //WEBCAM
  push();
  translate(width, 0);
  scale(-1, 1);
  //image(capture, 0, 0, cW, (cW * capture.height) / capture.width);
  image(capture, 0, 0, cW, cH);
  pop();
  
    //Instruction
  push();
  textAlign(CENTER);
  stroke(0);
  fill(0,255,0);
  textSize(40);
  text("Manifest", width/2, height - 100)
  textSize(20);
  text("then touch your own words", width/2, height - 70)
  pop();

  //Text To Points = Vehicles
  for (let i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.update();
    v.exhi();

    for (d = 0; d < x.length; d++) {
      let h = createVector(x[d], y[d]);
      v.behaviors(h);
    }
  }
  theTTP();
  

}

function theTTP() {
  //TEXT to POINTS
  textFont(font);
  textSize(fontSize);
  textArray = font.textToPoints(
    words, // THE SPEECH IN HERE....
    width / 2 - 250,
    height / 2 + 80,
    fontSize,
    {
      sampleFactor: 0.1,
    }
  );
  for (let i = 0; i < textArray.length; i++) {
    let pt = textArray[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

//Problem: the speech text reutters the word being displayed => continous redraw of the same word => lagging. How to stop it from reuttering the previous word?
//Suspect:
//A. the placement of theTTP()
//B. the format of speech to text. how to implement onEnd() function? https://github.com/IDMNYU/p5.js-speech

function gotSpeech() {
  //speechRec.onEnd();
    if (speechRec.resultValue == true) {
      //console.log(speechRec.resultString);
      //words = speechRec.resultString;
      input = speechRec.resultString;
      words = split(input, "");
      console.log(words);

    }else{
            //stop();
      
    }
  }