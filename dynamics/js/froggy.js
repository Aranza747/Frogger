const canvas = document.getElementById("canvasf");
const ctx = canvas.getContext("2d");

const fondo = new Image();
fondo.src = "./statics/media/img/froggypro.png";

fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo,0,0);
});

let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;


let y = 0;
let spriteX = 0;
let spriteY = 0;

const bus = new Image();
bus.src = "./statics/media/img/spriteBus.png";

const cab = new Image();
cab.src = "./statics/media/img/caballor.png";

const car = new Image();
car.src = "./statics/media/img/spriteCarro.png";

const police = new Image();
police.src = "./statics/media/img/patrullar.png";

function dibujar() {

        
        if(x1 <= canvas.width){ 
            ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

            y = 134;
            ctx.drawImage(bus, spriteX, spriteY, 116, 54, x1, y, 100, 54);
            x1 += 1;
        } else {
            x1 = 0;
        }

      
        if(x2 <= canvas.width){
            y = 192;
            ctx.drawImage(cab, spriteX, spriteY, 63, 54, x2, y, 100, 54);
            x2 += 5;
        } else{
            x2 = 0;
        }

        if(x3 <= canvas.width){
            y = 250;
            ctx.drawImage(car, spriteX, spriteY, 110, 54, x3, y, 100, 54)
            x3+= 1;
        } else{
            x3 = 0;
        }

        if(x4 <= canvas.width){
            y = 315;
            ctx.drawImage(police, spriteX, spriteY, 110, 54, x4, y, 100, 54);
            x4 += 5;
        } else{
            x4 -= 0;
        }
  
        window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);





/*let keys = [];

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[48]){
        frogger
    }
})*/