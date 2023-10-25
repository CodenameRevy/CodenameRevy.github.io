var canvas = document.getElementById("backgroundCanvas");
var context = canvas.getContext("2d");
var objects = [];

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

canvas.style.filter = 'url(#gaussian)';

if (devicePixelRatio != 1.0) {
    context.canvas.style.width = (context.canvas.width / devicePixelRatio) + "px";
    context.canvas.style.height = (context.canvas.height / devicePixelRatio) + "px";
}

context.fillStyle = "#002F00";

for (i = 0; i < 45; i++) {
    var objHeight = Math.random() * (350 - 50) + 50;
    var obj = {
        x: ((Math.random() * (window.innerWidth - 25) + 25)),
        y: (Math.random() * (window.innerHeight)) - objHeight,
        width: 10,
        height: objHeight,
        speed: Math.random() + 1
    }
    objects[i] = obj;
}

const redraw = () => {
    context.clearRect (0, 0, canvas.width, canvas.height);
    for (i = 0; i < 25; i++) {
        context.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    requestAnimationFrame(redraw);
}

const move = () => {
    for (i = 0; i < 25; i++) {
        if (objects[i].y - objects[i].height > canvas.height) {
            objects[i].y = 0 - objects[i].height;
            objects[i].x = Math.random() * (window.innerWidth - 50) + 50;
        }
        else {
            objects[i].y += 3 * objects[i].speed;
        }
    }
}

redraw();
setInterval(move, 24);