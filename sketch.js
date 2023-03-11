
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Bodies.circle(50,height - 100, 20, ball_options)
World.add(world, ball)
ground = Bodies.rectangle(width/2,height - 30, width,10, {isStatic:true})
World.add(world, ground)
l1 = Bodies.rectangle(width - 100,height - 70, 10,70, {isStatic:true})
World.add(world, l1)
l2 = Bodies.rectangle(width - 250,height - 70,10,70, {isStatic:true})
World.add(world, l2)
 var ball_options={
	isStatic:false,
	restitution : 0.3,
	friction : 0,
	density : 1.2
}

	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
ellipseMode(RADIUS)
ellipse (ball.position.x, ball.position.y,20,20)
drawSprites();
 rect(ground.position.x, ground.position.y,width,10)
 rect(l1.position.x, l1.position.y,10,70) 
 rect(l2.position.x, l2.position.y,10,70)
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:-0.06})
	}
}



