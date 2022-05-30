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

const bus = new Image();
bus.src = "./statics/media/img/spriteBus.png";

const car = new Image();
car.src = "./statics/media/img/spriteCarro.png";

function dibujar() {
        
        if(x1 <= canvas.width){ 
            ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

            y = 134;
            ctx.drawImage(bus, spriteX1, spriteY1, 116, 54, x1, y, 100, 54);
            x1 += 1;
        } else {
            x1 = 0;
        }

        if(x3 <= canvas.width){
            y = 250;
            ctx.drawImage(car, spriteX3, spriteY3, 110, 54, x3, y, 100, 54)
            x3+= 1;
        } else{
            x3 = 0;
        }

        window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);

const cab = new Image();
cab.src = "./statics/media/img/caballor.png";

const police = new Image();
police.src = "./statics/media/img/patrullar.png";

function dibujarin(){


    if(x2 <= canvas.width){
        y = 192;
        ctx.drawImage(cab, spriteX2, spriteY2, 63, 54, x2, y, 100, 54);
        x2 += 5;
    } else{
        x2 = 0;
    }

    if(x4 <= canvas.width){
        y = 315;
        ctx.drawImage(police, spriteX4, spriteY4, 110, 54, x4, y, 100, 54);
        x4 += 5;
    } else{
        x4 = 0;
    }

    window.requestAnimationFrame(dibujarin);
}

window.requestAnimationFrame(dibujarin);


/*let keys = [];

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[48]){
        frogger
    }
})*/

// class enemigo{
//     constructor(x, y, dx, dy, swidth, sheight, dwidth, dheight, ruta){
//         this.x = x;
//         this.y = y;
//         this.dy = dy;
//         this.dx = dx;
//         this.spriteX = 0;
//         this.spriteY = 0;
//         this.swidth = swidth;
//         this.sheight = sheight;
//         this.dwidth = dwidth;
//         this.dheight = dheight;
//         const imagen = new Image();
//         imagen.src = ruta;
//         this.img = imagen;
//     };

//     // mover(){
//     //     this.x += this.dx;
//     //     this.y += this.dy;

//     //     if(this.x <= 0 || this.x >= canvas.width - tamX){
//     //         this.dy = -this.dy;
//     //         this.spriteX += this.tamX;
//     //     }   
//     //     else if(this.x <= 0 || this.x >= canvas.heigth - tamY)
//     //     {
//     //         this.dx = -this.dx;
//     //         this.spriteX += this.tamX;   
//     //     }

//     //     if(this.spriteX>192){
//     //         this.spriteX = 0;
//     //     }
//     // }

//     dibujar() {
//         if(this.x <= canvas.width){ 
//             //ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
//             ctx.drawImage(this.img, this.spriteX, this.spriteY1, this.swidth, this.sheight, this.x, this.y, this.dwidth0, this.dheight);
//             this.x += 1;
//         } else {
//             this.x = 0;
//         }
//     }

// }

// const bus = new enemigo(0, 134, 0, 134, 116, 54, 16, 54, "./statics/media/img/spriteBus.png");
// const cab = new enemigo(500, 134, 3, 2, ,  , "../statics/img/dvd.png");
// const car = new enemigo(0, 0, 3, 2, "../statics/img/dvd.png");
// const police = new enemigo(50, 100, 3, 2, "../statics/img/dvd.png");

//bus.dibujar();

const kirbyi = new Image();
kirbyi.src = "./statics/media/img/kirby1.png";

function moverKirby(){
    x=0;
    y=0;
    let movimiento = document.addEventListener("keydown", (event)=> {
        switch(event.key){
            case 'ArrowUp':
                y+=1;
                console.log("up<3");
                break;
            case 'ArrowDown':
                y-=1;
                console.log("down<3");
                break;
            case 'ArrowLeft':
                x-=1;
                console.log("left <3");
                break;
            case 'ArrowRight':
                x+=1;
                console.log("right <3");
                break;
            case 'Enter':
                console.log("enter <3");
                break;
            default:
                console.log("no sirve <3");
                break;
        }
    });
}

function dibujark(){
    //ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
    x=250;
    y=370;
    //ctx.drawImage(police, spriteX4, spriteY4, 110, 54, x4, y, 100, 54);
    ctx.drawImage(kirbyi, 0, 0, 181, 178, x, y, 55, 54 )
    window.requestAnimationFrame(dibujark);
   
    
} 

window.requestAnimationFrame(dibujark);

moverKirby(kirbyi);
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