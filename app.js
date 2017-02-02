const Canvas = require('./modules/core/canvas');
const Rectangle = require('./modules/shapes/rectangle');
const Walker = require('./modules/shapes/walker');

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
