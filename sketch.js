
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var left, middle, right;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, height-40, width, 20);

	paper = new Paper(700, height-60, 15);

	left = new Dustbin(950, height-100, 20, 100);
        right = new Dustbin(800, height-100, 20, 100);
	middle = new Dustbin(880, height-60,  150, 20);
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();

  paper.display();

  left.display();
  middle.display();
  right.display();
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:25, y: -25})
   }


}

