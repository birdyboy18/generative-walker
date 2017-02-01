const random = require('../utils/random'); // not actually true random is a wrapper around Math.random();

class Rectangle {
	constructor(x,y,w,h,fill) {
		this.x = x - w/2;
		this.y = y - h/2;
		this.w = w;
		this.h = h;
		this.fill = fill;
	}

	update() {
		this.x = random(0, window.innerWidth);
		this.y = random(0, window.innerHeight);
		this.w = random(10, 30);
		this.h = random(10, 250);
		this.fill = `rgba(255,255,255,${ (random(0, 20)) / 100 })`;
	}

	draw(ctx) {
		this.update();
		ctx.fillStyle = this.fill;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}

module.exports = Rectangle;
