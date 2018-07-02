
function setup() {
	createCanvas( 640, 480);

	noStroke();

	background( 230,230,250 );

	
}



function draw() { 
	if (mouseIsPressed) {
		for( var i = 0; i < 1; i++ ) {
			fill( random(20, 200), random(50,235), random(70,215 ) );
			ellipse(mouseX, mouseY-random(-115,10), random(8,70), 6);
		}
	}
}