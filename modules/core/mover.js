const Vector = require('./vector');
const random = require('../utils/random');
/**
* A super simple class that should be extended and adds motion capabilities to it.
*
*/
class Mover {
	constructor(x,y,vx,vy) {
		this.location = new Vector(x,y);
		this.velocity = new Vector(0,0);
		this.acceleration = new Vector(random(0.01, 0.1),random(0.01, 0.03));
	}

	update() {
		//this.checkEdges();
		// this.velocity = this.velocity.add(this.acceleration);
		// this.velocity = this.velocity.limit(3, 0.75);
		// this.location = this.location.add(this.velocity);
		let mouse = new Vector(this.canvas.mouseX, this.canvas.mouseY);
		let dir = Vector.sub(mouse, this.location).normalise().multi(2);
		this.acceleration = dir;
		this.velocity = this.velocity.add(this.acceleration);
		this.velocity = this.velocity.limit(10, 0.75);
		this.location = this.location.add(this.velocity);
	}

	draw(ctx) {
		//this.update();
	}

	checkEdges() {
		if (this.location.x > this.canvas.width) {
			this.location.x = 0;
		} else if (this.location.x < 0) {
			this.location.x = this.canvas.width;
		}

		if (this.location.y > this.canvas.height) {
			this.location.y = 0;
		} else if (this.location.y < 0) {
			this.location.y = this.canavs.height;
		}
	}
}

module.exports = Mover;
