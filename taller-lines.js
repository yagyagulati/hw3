function tpatch(X,Y) {
  stroke(238);  
  
 for (var i = 10; i <= 340; i = i + 5) {
  var startX = i;
  var startY = i;
  var endX = i;
  var endY = 10;
  line(startX, startY, endX, endY);
}
// your code here!
}

background(255);
tpatch(width-340, height-340);