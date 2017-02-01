const random = require('../utils/random');
//it's actually basically a circle
class Walker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	// update() {
	// 	let choice = parseInt(random(0,4));
	//
	// 	if ( choice === 0) {
	// 		this.x++;
	// 	} else if (choice === 1) {
	// 		this.x--;
	// 	} else if (choice === 2) {
	// 		this.y++;
	// 	} else {
	// 		this.y--;
	// 	}
	// }

	update() {
		let stepX = parseInt(random(-1,1));
		let stepY = parseInt(random(-1,1));

		//console.log(stepX);

		this.x += stepX;
		this.y += stepY;
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
