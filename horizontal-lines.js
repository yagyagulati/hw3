function tpatch(X,Y) {
  stroke(200);  
  strokeWeight(1);
  
 for (var i = 10; i <= 340; i = i + 10) {
  var startX = 340;
  var startY = i;
  var endX = 0;
  var endY = i;
  line(startX, startY, endX, endY);
}
// your code here!
}

background(255);
tpatch(width-340, height-340);