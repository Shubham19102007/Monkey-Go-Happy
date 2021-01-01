
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var Score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
 
}



function setup() {
  Monkey=createSprite(30,165,20,20)
 Monkey.addAnimation("running",monkey_running)
  Monkey.scale=0.1


ground=createSprite(129,198,900,10);
ground.shapeColour=("black")
  ground.velocityX=-4
  ground.x=ground.width/2
 }
FoodGroup=new Group();
obstaclesGroup=new Group();
 



function draw() {
  background("White")
  if(ground.x<0) {
    ground.x=ground.width/2;
  } 
   text(mouseX + ","+ mouseY,mouseX,mouseY,)
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+Score,500,50)
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100+500)
  
  
  
  
  
    
  
  if(keyDown("space")){
    Monkey.velocityY=-12
    Monkey.VelocityY=Monkey.velocityY+0.8
  }

  drawSprites();
}








