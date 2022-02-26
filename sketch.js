const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var monsters;
var world;
var engine;
var canvas;
var backgroundImg;
var personaje1, mounstruo1;
var pared1, pared2, pared3;
var gameState;
var corazones;

function preload(){
}


function setup(){
canvas = createCanvas(1200,1600);
engine = Engine.create();
world = engine.world;

pared1 = new Paredh(50,1500,100,20);
pared2 = new Paredh(200,1400,100,20);
pared3 = new Paredh(350,1540,100,20);
// mounstruo1 = new Monster(50,1200);
personaje1 = new Personaje(50,1400);
//  monsters[mounstruo1];
}


function draw(){
background("white");
ataque();
// movimientoDelMounstruo();
pared1.display();
pared2.display();
pared3.display(); 
personaje1.display();
// mounstruo1.display();
// Matter.SAT.collides(personaje1,pared1);
// Matter.Collision.collides(personaje1,pared1);
drawSprites();
}
 function movimientoDelMounstruo(){
if(personaje1.body.position.x - mounstruo1.body.position.x < mounstruo1.width + personaje1.width){
    mounstruo1.body.position.x = personaje1.body.position.x -30;
    }
    if(mounstruo1.body.position.x - personaje1.body.position.x < mounstruo1.width + personaje1.width){
        mounstruo1.body.position.x = personaje1.body.position.x +30;
        }
        if(personaje1.body.position.y - mounstruo1.body.position.y < mounstruo1.heighy + personaje1.height){
            mounstruo1.body.position.y = personaje1.body.position.y -30;
            }
            if(mounstruo1.body.position.y - personaje1.body.position.y < mounstruo1.height + personaje1.height){
               mounstruo1.body.position.y.speed = 4;
                }
}

 function ataque(){
    if(keyDown(81)&& personaje1.collide(mounstruo1)){
        push();
        translate(personaje1.body.position.x,personaje1.body.position.y);
        imageMode(CENTER);
        image(personaje1.ImageEspada,0,0, personaje1.width, personaje1.height);
        pop();   
    personaje1.damage = 6;
    mounstruo1.life = mounstruo1.life-6;
    }
}

