const Vector = require('../core/vector');

class Line {
	constructor(x1,y1,x2,y2) {
		this.vec1 = new Vector(x1,y1);
		this.vec2 = new Vector(x2,y2);
	}

	update() {
		this.vec2 = new Vector(this.canvas.mouseX, this.canvas.mouseY).normalise().multi(10);
		//this.vec2 = this.vec2.multi(0.5);

		//console.log(this.vec2.normalise());
	}

	draw(ctx) {
		this.update();

		let end = this.vec1.add(this.vec2);
		ctx.beginPath();
		ctx.moveTo(this.vec1.x, this.vec1.y);
		ctx.lineTo(end.x, end.y);
		ctx.strokeStyle = '#fff';
		ctx.stroke();
	}
}

module.exports = Line;
