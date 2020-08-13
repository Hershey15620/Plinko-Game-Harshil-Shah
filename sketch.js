const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,division;
var divisionHeight=300;

var particles= [];
var plinkos= [];
var divisions=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground= new Ground(200,800,800,20);
  side= new Ground(500,400,10,800);


  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j= 40; j<= width; j=j+60){
    plinkos.push(new Plinko(j,75));
  }
  for (var j= 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j= 40; j<= width; j=j+60){
    plinkos.push(new Plinko(j,275));
  }
  for (var j= 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  
  
  
 
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();
  side.display();
  

  for (var k=0; k <divisions.length; k++){
    divisions[k].display();
  }
  for (var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  for (var j=0; j< particles.length; j++){
    particles[j].display();
  }
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }

  drawSprites();
}





