let w = 10;
let s = 12;
let margin = 20;
let r = 127;
let g = 127;

function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}

function draw() {
  background(220,0,100);
  
  let index = 0;
  for (let x = 20; x < width - margin - w; x += w + s) {
    
    for (let y = 20; y < height- margin - w; y += 20) {
      
      
      // % modulo ! remainder of a division operatio 
    
      w+= random(-5,5);
      if(w > 20){
        w = w;
      }
      if (w < 0){
        w = 0;
      }
      
      
      if (index % 2){
        fill(r,0,100);
      }
      else {
        fill(0,g,200);
      }
      
      let ran = random(100);
      if (ran>50){
          r+= random(5,5);
         r = constrain(r, 100, 150);
          }
      else{
         g+=random(5,5);
        g = constrain(g,100,200);
      }
      
    
      
      
      if (y > height/4 ){
      square(x, y, w);    
          }
      else {
        circle(x + w/2 ,y + w/2,w)
      }
      
    }
    console.log(index);
  index++;
  }
}
