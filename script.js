// =========================
// Loading Screen
// =========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1200);
});

// =========================
// Jam Digital
// =========================
const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    clock.innerHTML =
        now.toLocaleDateString("id-ID") +
        "<br>" +
        now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);
updateClock();

// =========================
// Background Particles
// =========================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){

canvas.width = innerWidth;
canvas.height = innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[];

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:(Math.random()-0.5)*0.6,
dy:(Math.random()-0.5)*0.6

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(0,255,255,.8)";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

});

requestAnimationFrame(animate);

}

animate();

// =========================
// Efek Glow Saat Mouse
// =========================

document.addEventListener("mousemove",(e)=>{

document.body.style.background=
`radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
rgba(0,255,255,.08),
#050816 40%)`;

});