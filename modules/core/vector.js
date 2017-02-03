
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

	negative() {
		let x = this.x * -1;
		let y = this.y * -1;
		return new Vector(x, y);
	}

    add(v) {
        let x = this.x + v.x;
        let y = this.y + v.y;
		return new Vector(x, y);
    }

	sub(v) {
		let x = this.x - v.x;
		let y = this.y - v.y;
		return new Vector(x, y);
	}

	multi(val) {
		this.x = this.x * val;
		this.y = this.y * val;
		return new Vector(this.x, this.y);
	}

	divide(val) {
		this.x = this.x / val;
		this.y = this.y / val;
		return new Vector(this.x, this.y);
	}

	magnitude() {
		return Math.sqrt((this.x^2) + (this.y^2));
	}
}

module.exports = Vector;
