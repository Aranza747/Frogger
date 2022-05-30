// const canvas = document.getElementById("canvasf");
// const ctx = canvas.getContext("2d");

// const fondo = new Image();
// fondo.src = "./statics/media/img/froggypro.png";

// fondo.addEventListener('load', ()=>{
//     ctx.drawImage(fondo,0,0);
// });

// let x1 = 0;
// let x2 = 0;
// let x3 = 0;
// let x4 = 0;

// let y = 0;
// let spriteX1 = 0;
// let spriteX2 = 0;
// let spriteX3 = 0;
// let spriteX4 = 0;
// let spriteY1 = 0;
// let spriteY2 = 0;
// let spriteY3 = 0;
// let spriteY4 = 0;
// let rebota;

// const bus = new Image();
// bus.src = "./statics/media/img/spriteBus.png";

// const car = new Image();
// car.src = "./statics/media/img/spriteCarro.png";

// function dibujar() {
        
//         if(x1 <= canvas.width){ 
//             ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

//             y = 134;
//             ctx.drawImage(bus, spriteX1, spriteY1, 116, 54, x1, y, 100, 54);
//             x1 += 1;
//         } else {
//             x1 = 0;
//         }

//         if(x3 <= canvas.width){
//             y = 250;
//             ctx.drawImage(car, spriteX3, spriteY3, 110, 54, x3, y, 100, 54)
//             x3+= 1;
//         } else{
//             x3 = 0;
//         }

//         window.requestAnimationFrame(dibujar);
// }

// window.requestAnimationFrame(dibujar);

// const cab = new Image();
// cab.src = "./statics/media/img/caballor.png";

// const police = new Image();
// police.src = "./statics/media/img/patrullar.png";

// function dibujarin(){


//     if(x2 <= canvas.width){
//         y = 192;
//         ctx.drawImage(cab, spriteX2, spriteY2, 63, 54, x2, y, 100, 54);
//         x2 += 5;
//     } else{
//         x2 = 0;
//     }

//     if(x4 <= canvas.width){
//         y = 315;
//         ctx.drawImage(police, spriteX4, spriteY4, 110, 54, x4, y, 100, 54);
//         x4 += 5;
//     } else{
//         x4 = 0;
//     }

//     window.requestAnimationFrame(dibujarin);
// }

// window.requestAnimationFrame(dibujarin);


/*let keys = [];

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[48]){
        frogger
    }
})*/

const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

class bus{
    constructor(x, y, dx, dy){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.spriteX = 0;
        this.spriteY = 0;
        const imagen = new Image();
        imagen.src = ruta;
        this.img = imagen;
    };


// let x = 0;
// let y = 0;
// let dx = 3;
// let dy = 1;
// let spriteX = 0;
// let spriteY = 0;
// const imagen = new Image();
// imagen.src ="../statics/img/dvd.png";

    // const dvd = new objetito(0, 0, 3, 2, "../statics/img/dvd.png");
    // const dvd2 = new objetito(50, 100, 3, 2, "../statics/img/dvd.png");

    mover(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x <= 0 || this.x >= canvas.width - tamX){
            this.dy = -this.dy;
            this.spriteX += this.tamX;
        }   
        else if(this.x <= 0 || this.x >= canvas.heigth - tamY)
        {
            this.dx = -this.dx;
            this.spriteX += this.tamX;   
        }

        if(this.spriteX>192){
            this.spriteX = 0;
        }
    }

    // caminarArriba(){

    // }

    dibujar(){
        ctx.drawImage (this.img, this.spriteX);
    }

}


function dibujar(){
    // ctx.fillStyle = "#ff0000";
    // ctx.fillRect(0, 0, 32, 16);
    ctx.fillStyle = "#4040aa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //ctx.drawImage(imagen, spriteX, spriteY, 32, 16, x, y, 32, 16);

}





// ctx.fillText("Hola", canvas.width /2, canvas.height / 2);
// ctx.fillStyle = "#000000";