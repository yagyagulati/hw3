function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}
function draw(){
  fill(255,0,0);
  ellipse(mouseX, mouseY,15,15);
}
function keyPressed() {
  print(key);
  if (key == 'E') {
    background(255, 255, 255);
  }
}