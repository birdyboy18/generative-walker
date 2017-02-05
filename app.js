const Canvas = require('./modules/core/canvas');
const Rectangle = require('./modules/shapes/rectangle');
const Walker = require('./modules/shapes/walker');
const Circle = require('./modules/shapes/circle');
const MoverCircle = require('./modules/shapes/moverCircle');
const Line = require('./modules/shapes/line');
const random = require('./modules/utils/random');

let canvas = new Canvas('canvas');

canvas.renderBackground('#000');

//lets add lots of circles
for (let i = 0; i < 100; i++) {
	canvas.addObject(new MoverCircle(random(0,canvas.width),random(0, canvas.height),random(1,6),random(1,6),random(2, 10), `rgba(255,255,255,${ random(0.1, 1) })`));
}

function animate(canvas) {
	canvas.render();
	window.requestAnimationFrame(animate.bind(this, canvas));
}

animate(canvas);
