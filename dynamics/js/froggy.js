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
let spriteX1 = 0;
let spriteX2 = 0;
let spriteX3 = 0;
let spriteX4 = 0;
let spriteY1 = 0;
let spriteY2 = 0;
let spriteY3 = 0;
let spriteY4 = 0;
let rebota;

class enemigo{
    constructor(x, y, dx, dy, swidth, sheight, dwidth, dheight, ruta){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.spriteX = 0;
        this.spriteY = 0;
        this.swidth = swidth;
        this.sheight = sheight;
        this.dwidth = dwidth;
        this.dheight = dheight;
        const imagen = new Image();
        imagen.src = ruta;
        this.img = imagen;
    };


    dibujar() {
        if(this.x <= canvas.width){ 
            ctx.drawImage(this.img, this.spriteX, this.spriteY, this.swidth, this.sheight, this.x, this.y, this.dwidth, this.dheight);
            this.x += this.dx;
        } else {
            this.x = -100;
        }
    }

}

const bus = new enemigo(0, 134, 7, 0, 116, 54, 100, 54, "./statics/media/img/spriteBus.png");
const bus2 = new enemigo(250, 192, 4, 0, 116, 54, 100, 54, "./statics/media/img/spriteBus.png");
const cab = new enemigo(0, 192, 4, 0, 65,  54, 100, 54, "./statics/media/img/spriteCaballo.png");
const cab2 = new enemigo(350, 250, 3, 0, 65,  54, 100, 54, "./statics/media/img/spriteCaballo.png");
const car = new enemigo(0, 250, 3, 0, 110, 54, 100, 54, "./statics/media/img/spriteCarro.png");
const car2 = new enemigo(250, 315, 2, 0, 110, 54, 100, 54, "./statics/media/img/spriteCarro.png");
const police = new enemigo(0, 315, 2, 0, 110, 54, 100, 54, "./statics/media/img/spritePatrulla.png");
const police2 = new enemigo(350, 134, 7, 0, 110, 54, 100, 54, "./statics/media/img/spritePatrulla.png");

function dibujar() {
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
    bus.dibujar();
    bus2.dibujar();
    cab.dibujar();
    cab2.dibujar();
    car.dibujar();
    car2.dibujar();
    police.dibujar();
    police2.dibujar();
    dibujark();

        window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);

const kirbyi = new Image();
kirbyi.src = "./statics/media/img/kirby1.png";
    x=250;
    y=370;
    let movimiento = document.addEventListener("keydown", (event)=> {
        switch(event.key){
            case 'ArrowUp':
                y-=10;
                break;
            case 'ArrowDown':
                y+=10;
                break;
            case 'ArrowLeft':
                x-=10;
                break;
            case 'ArrowRight':
                x+=10;
                break;
            case 'Enter':
                console.log("enter <3");
                break;
            default:
                console.log("no sirve <3");
                break;
        }
    });


function dibujark(){
    ctx.drawImage(kirbyi, 0, 0, 181, 178, x, y, 55, 54 )
} 

// class personaje{

//     constructor(x, y, ruta){
//         this.x = x;
//         this.y=y;
//         // const imagen = new Image();
//         // this.ruta = imagen.src;
//         // imagen.src = "./statics/media/img/kirby1.png";
//         // this.img = imagen;
//     }

//     dibujar(){
//         ctx.drawImage(kirbyi, this.x, this.y);
//     }
// }

// const kirby = new personaje(250,370, "./statics/media/img/kirby1.png");

// kirby.dibujar();