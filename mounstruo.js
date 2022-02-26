class Monster {
    constructor(x,y) {
    this.life = 12;
    this.width = 40;
    this.height = 40;
    this.damage = 0;
    this.body = Bodies.rectangle(x,y,width,height);
    this.ImageIzquierda = loadImage("imagenes/villano fase 1.png");
    this.ImageDerecha = loadImage("imagenes/villano fase 1.png");
    this.ImageAbajo = loadImage("imagenes/villano fase 1.png");
    this.ImageArriba = loadImage("imagenes/villano fase 1.png");
    World.add(world, this.body);

    
    }
    display(){
        /*if(keyIsDown(83)){
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
}

    
    
    ataque(){
        if(this.body.collide(Personaje)){
            this.damage = 6;
            Personaje.life = Personaje.life-6;
            this.body.position.x = this.body.position.x+4; 
    }
    }


}

