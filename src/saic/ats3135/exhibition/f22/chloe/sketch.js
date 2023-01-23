let frog_img;
let i = 0;

function setup() {
  findFrogs();
  createCanvas(400, 400);
}

function draw(){
  background(220);
  if (typeof frog_img != "undefined") {
    frog_img.createImage(50, 50);
  }
}

function findFrogs() {
  if(i >= 25) {
    i=0;
  }
  RIG("frog", i).then(function(result) {
    frog_img = result;
  })
  .catch(function() {
    console.log("no image found");
  });
  i++;
  setTimeout(findFrogs, 3000);
}