
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
  
 for (var v = 10; v <= 340; v = v + 10) {
  var starttX = 170;
  var starttY = v;
  var endddX = 340;
  var endddY = v;
  line(starttX, starttY, endddX, endddY);
}
 
  var lines = 3;
  while (lines < 170) {
    line(X+lines, Y+170, X, 170+lines);
    lines = lines + 10;
  }

  lines = 3;
  while (lines < 170) {
    line(X+170, 170+lines, X+lines, Y+340);
    lines = lines + 10;
  }
lines= 3;
  while (lines < 170) {
    line(340-lines, Y+340, X+170, 170+lines);
    lines = lines + 10;
  }

  lines = 3;
  while (lines < 170) {
    line(340, 170+lines, 340-lines, 170);
    lines = lines + 10;
  }

 
}

background(255);
tpatch(width-340, height-340);