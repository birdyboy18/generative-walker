const random = require('../utils/random');
//it's actually basically a circle
class Walker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	// Lets make it so it has a 50% chance to move randomly, if not have it follow go towards the mouse
	update() {
		let prob = Math.random().toFixed(2);

		if (prob < 0.5) {
			//move randomly
			this.moveRandomly();
		} else {
			//work out direction of the mouse from current position and move towards it.
			this.moveToMouse();
		}
	}

	moveRandomly() {
		let prob = Math.random().toFixed(2);

		if (prob < 0.25) { // 25% chance
			this.x++;
		} else if (prob < 0.5) { // 25% chance
			this.y++;
		} else if (prob < 0.75) { // 25% chance
			this.x--;
		} else { // 25% chance
			this.y--;
		}
	}

	moveToMouse() {
		let x = this.canvas.mouseX;
		let y = this.canvas.mouseY;

		if (x < this.x) {
			this.x--;
		} else {
			this.x++;
		}
	}

	draw(ctx) {
		this.update();
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.ellipse(this.x, this.y, 3, 3, 0, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
	}
}

module.exports = Walker;
