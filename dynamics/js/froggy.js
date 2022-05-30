const canvas = document.getElementById("canvasf");
const ctx = canvas.getContext("2d");

const fondo = new Image();
fondo.src = "./statics/media/img/froggypro.png";

fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo,0,0);
});

let x = 0;
let y = 0;
let spriteX = 0;
let spriteY = 0;

const bus = new Image();
bus.src = "./statics/media/img/spriteBus.png";

function dibujar() {


        if(x <= 500){
            ctx.drawImage(fondo, 0, 0, canvas.clientWidth, canvas.height);

            y = 134;
            ctx.drawImage(bus, spriteX, spriteY, 116, 54, x, y, 100, 54);
            x += 2;
        } else {
             x = 0;
        }
  
        window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);

const cab = new Image();
cab.src = "./statics/media/img/caballor.png";

function caballo(){

    if(x > 0){
        ctx.drawImage(fondo, 500,192, canvas.clientWidth, canvas.height);

        y = 192;
        ctx.drawImage(cab, spriteX, spriteY, 63, 54, x, y, 100, 54);
        x += 2;
    } else{
        x = -1;
    }

    window.requestAnimationFrame(caballo);

}

window.requestAnimationFrame(caballo);

const car = new Image();
car.src = "./statics/media/img/spriteCarro.png";

function carro(){

    if(x <= 500){
        ctx.drawImage(fondo, 500,250, canvas.clientWidth, canvas.height);

        y = 250;
        ctx.drawImage(car, spriteX, spriteY, 110, 54, x, y, 100, 54);
        x+= 2;
    } else{
        x = 0;
    }

    window.requestAnimationFrame(carro);

}

window.requestAnimationFrame(carro);


const police = new Image();
police.src = "./statics/media/img/spritePatrulla.png";

function policy(){

    if(x > 0){
        ctx.drawImage(fondo, 500,315, canvas.clientWidth, canvas.height);

        y = 315;
        ctx.drawImage(police, spriteX, spriteY, 110, 54, x, y, 100, 54);
        x += 2;
    } else{
        x = -1;
    }

    window.requestAnimationFrame(policy);

}

window.requestAnimationFrame(policy);
