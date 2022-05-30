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

function dibujar() {
        
        //movimiento
        ctx.drawImage(bus, spriteX, spriteY, 116, 54, x, y, 116, 54);

        spriteX += 1;
        spriteY += 2;
  

        //request
        window.requestAnimationFrame(dibujar);
}

//request
window.requestAnimationFrame(dibujar);