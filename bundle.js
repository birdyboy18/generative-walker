/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function random(min, max) {
	return Math.random() * (max - min) + min;
}

module.exports = random;


/***/ }),
/* 1 */
/***/ (function(module, exports) {


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
		//this.ctx.clearRect(0,0,this.width,this.height);
		//calls the draw method of all the objects
		this.objects.forEach((obj) => obj.draw(this.ctx));
	}
}

module.exports = Canvas;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const random = __webpack_require__(0); // not actually true random is a wrapper around Math.random();

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const random = __webpack_require__(0);
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Canvas = __webpack_require__(1);
const Rectangle = __webpack_require__(2);
const Walker = __webpack_require__(3);

let canvas = new Canvas('canvas');
let rect = new Rectangle(100,100, 50, 50, '#fff');
let walker = new Walker(canvas.width / 2, canvas.height / 2);

let i = 0;
let iterationLimit = 250;

canvas.renderBackground('#000');

//lets add lots of walkers
for (let i = 0; i < 1; i++) {
	canvas.addObject(new Walker(canvas.width / 2, canvas.height / 2));
}

// canvas.addObject(walker);

function animate(canvas) {
	canvas.render();
	window.requestAnimationFrame(animate.bind(this, canvas));
}

animate(canvas);


/***/ })
/******/ ]);