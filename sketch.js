
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	paper = new Paper()
	dustbinObj = new dustbin(1200,650);
	
	Engine.run(engine);
    console.log(paper.y, dustbinObj.y)
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paper.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed()	{
	if(keyCode === UP_ARROW)	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});

	}
}

