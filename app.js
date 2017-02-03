const Canvas = require('./modules/core/canvas');
const Rectangle = require('./modules/shapes/rectangle');
const Walker = require('./modules/shapes/walker');
const Circle = require('./modules/shapes/circle');
const Line = require('./modules/shapes/line');

let canvas = new Canvas('canvas');
let rect = new Rectangle(100,100, 50, 50, '#fff');
let walker = new Walker(canvas.width / 2, canvas.height / 2);

let i = 0;
let iterationLimit = 250;

canvas.renderBackground('#000');

//lets add lots of circles
for (let i = 0; i < 1; i++) {
	//canvas.addObject(new Circle(100,100,15));
	canvas.addObject(new Line(canvas.width / 2,canvas.height / 2, 300, 200));
}

// canvas.addObject(walker);

function animate(canvas) {
	canvas.render();
	window.requestAnimationFrame(animate.bind(this, canvas));
}

animate(canvas);
