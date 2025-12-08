const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); 

let x = 150;
let y = 150; 
let radius = 40;

let dx = 3;
let dy = 2;

ctx.fillStyle = "rgba(255, 196, 0, 0.8)";
ctx.shadowColor = "rgba(213, 255, 200, 0.64)";
ctx.shadowBlur = 20;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    x += dx;
    y += dy;
    
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    } 
    
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
    }
}

function loop() {
    draw();
    requestAnimationFrame(loop);
}

loop();