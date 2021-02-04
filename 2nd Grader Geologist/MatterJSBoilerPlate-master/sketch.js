const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var rock;
var rubberball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Sutti(400,700,50,50)

rock = new Stone(400,550,50,50)

ground = new Ground(800,698,3000,20)

rubberball = new Rubber(400,750,3)
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("cyan");
  
  hammer.display();
  ground.display();
  rock.display();
  rubberball.display();
  drawSprites();
 
}



