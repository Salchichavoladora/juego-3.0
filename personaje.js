class Personaje {
    constructor(x,y) {
    this.life = 12;
    this.width = 40;
    this.height = 40;
    this.damage = 0;
    this.body = Bodies.rectangle(x,y,40,40);
    this.ImageIzquierda = loadImage("imagenes/llama/izquierda/llama1i.png");
    this.ImageDerecha = loadImage("imagenes/llama/derecha/llama1d.png");
    this.ImageAbajo = loadImage("imagenes/llama/abajo/llama1ab.png");
    this.ImageArriba = loadImage("imagenes/llama/arriba/llama1ar.png");
    this.ImageEspada = loadImage("imagenes/llama/llamadconespada.png");
    World.add(world, this.body);

    
    }
    display(){
   /*     if(keyIsDown(83)){
            push();
            translate(this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.ImageAbajo,0,0, this.width, this.height);
            this.body.position.y = this.body.position.y +4;
            pop();  
            }
    
        else if(keyDown(87)){
            push();
            translate(this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.ImageArriba,0,0, this.width, this.height);
            this.body.position.y = this.body.position.y -4;
            pop();  
        }    
        else if(keyDown(65)){
            push();
            translate(this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.ImageIzquierda,0,0, this.width, this.height);
            this.body.position.x = this.body.position.x -4;
            pop();  
        }
        else if(keyDown(68)){
            push();
            translate(this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.ImageDerecha,0,0, this.width, this.height);
            this.body.position.x = this.body.position.x +4;
            pop(); 
            
        }else{*/
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.ImageDerecha,0,0, this.width, this.height);
        pop();   
    // }
}






    }
