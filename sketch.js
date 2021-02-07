const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,40,40);
    ground = new Ground(200,400,810,20);
    box2 = new Box(150,100,80,20);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
}