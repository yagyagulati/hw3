function tpatch(X,Y) {
  stroke(200);  
  strokeWeight(1);
  
 for (var i = 10; i <= 340; i = i + 5) {
  var startX = 170;
  var startY = 0;
  var endX = i;
  var endY = 340;
  line(startX, startY, endX, endY);
}
// your code here!
}

background(255);
tpatch(width-340, height-340);