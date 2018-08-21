var angle = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('canvas');
  canvas.position(0,0);
  background(255,255,255);
  noStroke();  

}


function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 4;
    var val = cos(radians(angle)) * 90.0;
    for (var a = 0; a < 360; a += 95) {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(255, 0, 0);
      rect(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill( 0, 0,255);
    rect(mouseX, mouseY, 24, 24);
  }
}

