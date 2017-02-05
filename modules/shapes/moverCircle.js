const Mover = require('../core/mover');

class Circle extends Mover {
	constructor(x,y,vx,vy,r, fill = '#fff') {
		super(x,y,vx,vy);
		this.r = r;
		this.fill = fill;
	}

	draw(ctx) {
		this.update();
		ctx.fillStyle = this.fill;
		ctx.beginPath();
		ctx.arc(this.location.x, this.location.y, this.r, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
	}
}

module.exports = Circle;
