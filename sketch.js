const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //creating drops
  
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
       
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
   

    drawSprites();
}   

