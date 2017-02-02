const random = require('../utils/random');
const Vector = require('../core/vector');
//it's actually basically a circle
class Circle {
	constructor(x, y, r) {
        this.location = new Vector(x,y);
        this.r = r;
        this.velocity = new Vector(2,3.5);
	}

	// Lets make it so it has a 50% chance to move randomly, if not have it follow go towards the mouse
	update() {
        this.location.add(this.velocity);
	}

	draw(ctx) {
		this.update();
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.arc(this.location.x, this.location.y, this.r, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
	}
}

module.exports = Circle;
