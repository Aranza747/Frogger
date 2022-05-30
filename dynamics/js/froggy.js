const canvas = document.getElementById("canvasf");
const ctx = canvas.getContext("2d");

document.cookie="cookie=0";

const fondo = new Image();
fondo.src = "./statics/media/img/froggypro.png";

fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo,0,0);
});

let vidas = 3;
let ganar = 0;



class personaje{
    constructor(x,y){
        this.x=x;
        this.y=y;
        const kirby = new Image();
        kirby.src = "./statics/media/img/kirby1.png";
        this.image= kirby;
    }

    dibujark(){
        ctx.drawImage(this.image, 0, 0, 181, 178, this.x, this.y, 55, 54 );
    }

    validar(enemigo){
        console.log(enemigo);
        console.log(kirby);
        if(this.x == enemigo.x && this.y == enemigo.y){
            console.log(this.x);
            console.log("colision");
            vidas-= 1;
            console.log(vidas);
        }
        if(vidas == 0){
            console.log("entre");
            this.x = 250;
            this.y = 370;
        } else{
            ganar === 1;
        }
        if(ganar==1){
            console.log("Ganaste!");
            victoria();
        }
    }
    victoria(){
        ctx.fillRect(0,0,500,500);
        ctx.fillStyle("#ffffff");
        ctx.fillText("Ganaste!", 0, 0); 
    }
    
}

const kirby = new personaje(250,370);


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

//coordenadas de los obstaculos, si las de kirby son mayores o iguales hay colision

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
    kirby.dibujark();

    window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);

    x=250;
    y=370;

    let movimiento = document.addEventListener("keydown", (event)=> {
        
        switch(event.key){
            case 'ArrowUp':
                kirby.y -= 10;
                kirby.validar(bus);
                break;
            case 'ArrowDown':
                kirby.y+=10;
                kirby.validar(bus);

                break;
            case 'ArrowLeft':
                kirby.x-=10;
                kirby.validar(bus);

                break;
            case 'ArrowRight':
                kirby.x+=10;
                kirby.validar(bus);

                break;
            case 'Enter':
                console.log("enter <3");

                break;
            default:
                console.log("no sirve <3");
                break;
                
            
        }

    });



// class colisiones {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }

//     validar(kirbyi){
//         if(kirbyi.x == this.x || kirbyi.y == this.y){
//             console.log(kirbyi.x);
//             console.log("colision");
//             vidas--;
//         }
//         if(vidas == 0){
//             kirbyi.x = 250;
//             kirbyi.y = 370;
//         } else{
//             ganar === 1;
//         }
//         if(ganar==1){
//             console.log("Ganaste!");
//             victoria();
//         }
//     }
// }

// console.log(kirbyi);
//  validar(kirbyi);


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