for (var i = 0; i <= 170; i = i+10) {
  var startX = i;
  var startY = 170+i;
  var endX = 340-i;
  var endY = 170+i;
  line(startX, startY, endX, endY);
}


for (var i = 0; i <= 170; i = i+10) {
  var startX = i;
  var startY = 170-i;
  var endX = 340-i;
  var endY = 170-i;
  line(startX, startY, endX, endY);
}