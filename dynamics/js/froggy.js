const canvas = document.getElementById("canvasf");
const ctx = canvas.getContext("2d");

const fondo = new Image();
fondo.src = "./statics/media/img/froggypro.png";

fondo.addEventListener('load', ()=>{
    ctx.drawImage(fondo,0,0);
});


let x = 0;
let y = 0;
let rebota;

// const bus = new Image();
// bus.src = "./statics/media/img/spriteBus.png";

class enemigo{

    constructor(x, y /*imagen dx, , dy*/){
        this.x = x;
        this.y = y;
        // this.dy = dy;
        // this.dx = dx;
        // this.spriteX = 0;
        // this.spriteY = 0;
        const imagen = new Image();
        imagen.src = "./statics/media/img/spriteBus.png";
        this.img = imagen;
    };

     

    dibujar() {
        
            //Para evitar que se salga de la pantalla y rebote
            if(x < canvas.width && y < canvas.height && rebota !== 1){
                x += 1;
                y += 2;
            }

            if(y + 54 >= canvas.height || x + 117 >= canvas.width){
                rebota += 1;
            }

            if (rebota === 1){
                console.log('reboto');
                x -= 1;
                y -= 2;
            }


            window.requestAnimationFrame(dibujar);
    }

    // mover(){
    //     this.x += this.dx;
    //     this.y += this.dy;

    //     if(this.x <= 0 || this.x >= canvas.width - tamX){
    //         this.dy = -this.dy;
    //         this.spriteX += this.tamX;
    //     }   
    //     else if(this.x <= 0 || this.x >= canvas.heigth - tamY)
    //     {
    //         this.dx = -this.dx;
    //         this.spriteX += this.tamX;   
    //     }

    //     if(this.spriteX>192){
    //         this.spriteX = 0;
    //     }
    // }

    // dibujar(){
    //     ctx.drawImage (this.img, this.spriteX);
    // }
}
const bus = new enemigo( 0, 134);
bus.dibujar;

    // const caballo = new enemigo( ,  ,  ,  , "./statics/media/img/caballo.png");
    // const carro =  new enemigo( ,  ,  ,  , "./statics/media/img/carro.png");
    // const patrulla = new enemigo( ,  ,  ,  , "./statics/media/img/patrulla.png");