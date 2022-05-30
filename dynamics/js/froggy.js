const canvas = document.getElementById("canvasf");
const ctx = canvas.getContext("2d");

const fondo = new Image();
fondo.src = "./statics/media/img/froggypro.png";

fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo,0,0);
});


let x = 0;
let y = 0;
/*let dx = 3;
let dy = 1;*/
let spriteX = 0;
let spriteY = 0;

const bus = new Image();
bus.src = "./statics/media/img/spriteBus.png";

const cab = new Image();
cab.src = "./statics/media/img/caballor.png";

function dibujar() {
        ctx.drawImage(fondo, 0, 0, canvas.clientWidth, canvas.height);

        y = 134;
        ctx.drawImage(bus, spriteX, spriteY, 116, 54, x, y, 100, 54);
        x += 1;

        //spriteX = 54;
        //spriteY = 65;
        y = 192;
        ctx.drawImage(cab, spriteX, spriteY, 63, 54, x, y, 100, 54);
        x -= 1;
  
        window.requestAnimationFrame(dibujar);
}
window.requestAnimationFrame(dibujar);