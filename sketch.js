var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Event;
var Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;

var score =0;
var engine,world;



function setup() {
  createCanvas(800, 1000);
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 70; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,235));
    }

    for (var j = 45; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,335));
    }

     for (var j = 45; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,535));
    }

     for (var j = 70; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,435));
    }

    

    
}
 


function draw() {
  background("pink");
  
  textSize(30);
  fill ("darkblue");
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(100, 700), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}