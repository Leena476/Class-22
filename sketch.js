const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundOption = {isStatic : true}

  ground = Bodies.rectangle(200,375,400,30,groundOption)
  World.add(world,ground);

  var ballOption = {restitution : 1}
  
  ball = Bodies.circle(200,100,30,ballOption);
  World.add(world,ball);

  console.log(ball);

}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30);
  
}