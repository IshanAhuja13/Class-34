const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world, ground1, block1, block2, block3, block4, block5, ball1;

function preload(){
    
}

function setup(){
    createCanvas(1500, 1000);    
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500, 950, 2000, 20);
    block1 = new Block(1300, 800, 50, 50);
    block2 = new Block(1300, 750, 50, 50);
    block3 = new Block(1300, 700, 50, 50);
    block4 = new Block(1300, 650, 50, 50);
    block5 = new Block(1300, 600, 50, 50);
    ball1 = new Ball(800, 200, 20);
}

function draw(){
    background("blue");
    Engine.update(engine);
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    ball1.display();

}