
function setup() {
	createCanvas( 1400, 700);
	noStroke();
	background(255,255,255);

}



function draw() { 
	if (mouseIsPressed) {
		fill(0);
  }else{
    	
		for( var i = 0; i < 1; i++ ) {
			fill( 178,34,34 );
			ellipse(mouseX, mouseY-random(-100,10), random(30,110), 20);
		}
	}
}