function tpatch(X,Y) {
  stroke(200);  
  strokeWeight(1);
  
 for (var i = 10; i <= 340; i = i + 10) {
  var startX = i;
  var startY = 340;
  var endX = i;
  var endY = 10;
  line(startX, startY, endX, endY);
}
// your code here!
}

background(255);
tpatch(width-340, height-340);