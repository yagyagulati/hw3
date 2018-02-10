function tpatch(X,Y) {
  stroke(200);  
  strokeWeight(1);
  noFill();
  
 for (var i = 10; i <= 340; i = i +8) {
  ellipse(170, 170, i, i);
}
// your code here!
}

background(255);
tpatch(width-340, height-340);