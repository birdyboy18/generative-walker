
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

	static add(vec1, vec2) {
		return new Vector(vec1.x + vec2.x, vec2.x + vec2.y);
	}

	sub(v) {
		let x = this.x - v.x;
		let y = this.y - v.y;
		return new Vector(x, y);
	}

	static sub(vec1, vec2) {
		return new Vector(vec1.x - vec2.x, vec2.x - vec2.y);
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
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}

	normalise() {
		let mag = this.magnitude();
		if (mag !== 0) {
			return this.divide(mag);
		} else {
			return 0;
		}
	}

	limit(max, factor) {
		if (Math.abs(this.magnitude()) > max) {
			this.x *= factor;
			this.y *= factor;
		}
		return this;
	}
}

module.exports = Vector;
