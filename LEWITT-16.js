function tpatch(X,Y) {
  stroke(200);  
  strokeWeight(1);
  
 for (var i = 10; i <= 340; i = i + 2) {
  var startX = 280;
  var startY = i;
  var endX = 60;
  var endY = i;
  line(startX, startY, endX, endY);
}
// your code here!
  for (var p = 10; p <= 340; p = p + 5) {
  var starX = 340;
  var starY = -50;
  var enddX = p;
  var enddY = 340;
  line(starX, starY, enddX, enddY);
}
  for (var s = 10; s <= 340; s = s + 2) {
  var starttX = s;
  var starttY = 180;
  var endddX = s;
  var endddY = 340;
  line(starttX, starttY, endddX, endddY);
}
}

background(255);
tpatch(width-340, height-340);