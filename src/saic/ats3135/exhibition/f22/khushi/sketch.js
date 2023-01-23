let h; 
function setup() {
  
  h=document.documentElement.scrollHeight;
  createCanvas(windowWidth, h);
  background(0);
}

function draw() {
  background(0, 2);
  stroke(255, 30);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
}
