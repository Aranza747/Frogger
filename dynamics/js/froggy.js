const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

const fondo = new Image();
fondo.src = "./statics/media/img/froggypro.png";

fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo,0,0);
});

window.setInterval(() => {
    //El rectpangulo que taba el rastro de los otros rectángulos
    ctx.fillStyle = "#4040aa";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);  
    //EL "movivimento" del rectángulo pequeño
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x, y, 32, 16);
    //Velocidad del rectángulo pequeño (minetras mayos sean los valores ira más rápido)
    x += 2;
    y += 3;
    //Tiempo en milisegundos del rectángulo pequeño
}, 16);