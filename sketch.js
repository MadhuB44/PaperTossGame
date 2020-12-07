
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
  binImg = loadImage("dustt.png");
  backI=loadImage("bg.png")
}
function setup() {
	createCanvas(1000, 600);


  background(backI); 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(300, 400, 13);

  ground = new Ground(500, 590, 1000, 20);
  bar1=new Bar(380,750,180,20)
  leftSide = new Dustbin(780, 490, 20, 180);
  bottom = new Dustbin(810, 421, 100, 20);
  rightSide = new Dustbin(860, 490, 20, 180);

  wall1 = new Dustbin(1000, 300, 10, 1000);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  

  background(backI);  
  Engine.update(engine);

  paper.display();

  ground.display();

  Dustbin = createSprite(820,487,20,20);
    Dustbin.addImage(binImg);
    Dustbin.scale = 0.58

  leftSide.display();
  bottom.display();
  rightSide.display();

  bar1.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y: -35})
  }
}
