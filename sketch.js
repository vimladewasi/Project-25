var paper, dustbin, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	
	world = engine.world;

	paper = new Paper(100,100,50,50);
	ground = new Ground(800,690,2400,20);
	dustbin= new Dustbin(800,500);

	Engine.run(engine);
	
}


function draw() {
  
  background("white");

  paper.display();
  ground.display();
  Engine.update(engine);

 drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-155});
	}
}

