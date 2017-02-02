
/**
* Make a canvas class that will allow us to easily set stuff up
* Draw expose context but also size it the screen automatically etc.
*
* Assumes that all objects you want to draw onto the canvas has a draw method and accepts the canvas context.
*/
let defaults = {
	width: window.innerWidth,
	height: window.innerHeight,
	autoResize: true
};

class Canvas {
	constructor(id, userOpts) {
		let opts = Object.assign(defaults, userOpts);
		this.objects = [];
		this.id = id;
		this.canvas = document.getElementById(this.id);
		this.ctx = this.canvas.getContext('2d');
		this._width = opts.width;
		this._height = opts.height;
		//set the height and width, using our getters / setters
		this.width = this._width;
		this.height = this._height;

		//used to store the last x and y from the mouse
		this.mouseX = 0;
		this.mouseY = 0;

		if (opts.autoResize) {
			window.onresize = () => {
				this.width = window.innerWidth;
				this.height = window.innerHeight;
			};
		}

		//add a listener to update the last know x and Y of the mouse on the canvas
		this.canvas.addEventListener('mousemove', (e) => {
			this.mouseX = e.clientX;
			this.mouseY = e.clientY;
		});
	}

	get width() {
		return this._width;
	}

	set width(val) {
		this._width = val;
		this.canvas.width = val;
	}

	get height() {
		return this._height;
	}

	set height(val) {
		this._height = val;
		this.canvas.height = val;
	}

	addObject(obj) {
		obj.canvas = this;
		this.objects.push(obj);
	}

	renderBackground(fill) {
		this.ctx.fillStyle = fill;
		this.ctx.rect(0,0,this.width, this.height);
		this.ctx.fill();
	}

	render() {
		this.ctx.clearRect(0,0,this.width,this.height);
        this.renderBackground('#333');
		//calls the draw method of all the objects
		this.objects.forEach((obj) => obj.draw(this.ctx));
	}
}

module.exports = Canvas;
