// Rudy Playground

// This is a static, p5-like environment.

// You can draw lines and other shapes here, set colors, etc.,
// just as you would with p5. No setup() or draw() functions needed.

// Here are some commands to get you started:
//  line(10, 10, width-10, height-10);   -- draw a diagonal line
//  line(10, height-10, width-10, 10);   -- draw another
//  colorMode(HSB);                      -- start coloring with Hue, Saturation, Brightness
//  stroke(0, 255, 255);                 -- stroke with a nice red color
//  noFill();                            -- and don't fill
//  rect(10, 10, width-20, height-20);   -- draw a rectangle

function tpatch(x, y) {
  fill(255,0,0);
  stroke(238);
  rect(x, y, 100, 100);
  
  
  fill(255, 255, 0);
  noStroke();
  rect(x+20, y+20, 60, 20);
  rect(x+40, y+40, 20, 40);
  stroke(255,255,0);
 stroke(0);
  var lines = 3;
  while (lines < 43) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  }
  stroke(255,255,0);
  while (lines < 100) {
    line(x+lines, y, x, y+lines);
    lines = lines + 2;
  }
  stroke(255, 255, 0);
  lines = 0;
  while (lines < 50) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }
  stroke(0);
  while (lines < 100) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }

 
// your code here!
}

background(255);
tpatch(width-100, height-100);