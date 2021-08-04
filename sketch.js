var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){

  
  createCanvas(400,400);
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  

  rabbit.x = World.mouseX;

  spawnApple();

  drawSprites();
}


function spawnApple(){
if (frameCount%50==0){
   apple = createSprite(200,50,100,130);
   apple.addImage(appleImg);
   apple.velocityY = 5 ;
   apple.x = Math.round(random(400,100));
   apple.scale = 0.1;
 }
 
}
   
