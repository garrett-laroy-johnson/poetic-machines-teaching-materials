//credits: code utilized from kyle macdonald cv examples


//future intentions: add take photo button, add automatic reset, smooth process <3

var capture;
var previousPixels;
var w = 800;
var h = 550;


let bg;
let fg;
//let mg;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
          //facingMode: {
        //exact: "environment"
        //} // for mobile,, in progress
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    createCanvas(w, h);
    capture.hide();

  bg = [8, 171,219,227]; //changed for cyanotype imagery
  fg = [8,103,164,255]; //changed for cyanotype imagery
  //mg = [] -> insert middle color for cyanotype realism, shading

var button1 = createButton("reset");
button1.position(15, 100);
button1.mousePressed(resetSketch)

button = createButton('save image');
button.position(65, 100);
button.mousePressed(saveDrawing);
  

}


function resetSketch() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
          //facingMode: {
        //exact: "environment"
        //} // for mobile,, in progress
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    createCanvas(w, h);
    capture.hide();

  bg = [8, 171,219,227]; //changed for cyanotype imagery
  fg = [8,103,164,255]; //changed for cyanotype imagery
  //mg = [] -> insert middle color for cyanotype realism, shading,,,, tbd
}

function copyImage(src, dst) {
    var n = src.length;
    if (!dst || dst.length != n) dst = new src.constructor(n);
    while (n--) dst[n] = src[n];
    return dst;
}

function saveDrawing() {
save("Picture.png");
}

function draw() {
    capture.loadPixels();
    var total = 0;
    if (capture.pixels.length > 0) { // don't forget this!
        if (!previousPixels) {
            previousPixels = copyImage(capture.pixels, previousPixels);
        } else {
            var w = capture.width,
                h = capture.height;
            var i = 0;
            var pixels = capture.pixels;
            var thresholdAmount = select('#thresholdAmount').value() * 255. / 100.;
            thresholdAmount *= 3; // 3 for r, g, b
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    // calculate the differences
                    var rdiff = Math.abs(pixels[i + 0] - previousPixels[i + 0]);
                    var gdiff = Math.abs(pixels[i + 1] - previousPixels[i + 1]);
                    var bdiff = Math.abs(pixels[i + 2] - previousPixels[i + 2]);
                    // copy the current pixels to previousPixels
                    previousPixels[i + 0] = pixels[i + 0];
                    previousPixels[i + 1] = pixels[i + 1];
                    previousPixels[i + 2] = pixels[i + 2];
                    var diffs = rdiff + gdiff + bdiff;
               
                  
                  var past = false;
                    if (diffs > thresholdAmount) { // How much difference? linear interpolation between colors : lerpColor(); 
                        past = true;
                        total += diffs;
                      
                      
                    }
                  
                  if (past == true) {
                    pixels[i++] = fg[0]; // red
                    pixels[i++] = fg[1];  // green
                    pixels[i++] = fg[2];   // blue
                  }
                 else {
                    pixels[i++] = bg[0]; // red
                    pixels[i++] = bg[1];  // green
                    pixels[i++] = bg[2];   // blue
                 }
                    
                     //pixels[i++] = rdiff; 
                     //pixels[i++] = gdiff;
                     pixels[i++] = bdiff; 
                     //i++; // skip alpha //creates lines but gets rid of my cyanotype imaging //play w values either ++ or + #
                }
            }
        }
    }
    // prevent frame  repetition
    if (total > 0) {
        select('#motion').elt.innerText = total;
        capture.updatePixels();
        image(capture, 0, 0, 800, 550);
        filter(BLUR); // HELLO IF U ARE READING THIS TOGGLE THIS LINE OUT FOR FUN ITS LIKE A LIL CYANOTYPE GHOST anyway its not actually that exciting i just like it -k
      
    
    }
  //function takeImage() {
  //
  //userPicture = image(video, 40, 0);
//}

}
