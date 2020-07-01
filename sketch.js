var mario,marioimg,cloudimg,enemyimg,turtleimg
var edges
var PLAY=1
var END=0
var gameState=PLAY;
var enemyGroup
function preload()
{
  marioimg=loadAnimation("mm1.png","mm2.png","mm4.png")
  cloudimg=loadImage("sprite_clouds0.png")
  enemyimg=loadAnimation("e1.png","e2.png")
  turtleimg=loadAnimation("e5.png","e6.png","e7.png","e8.png")

}

function setup()
{
  createCanvas(600,200);
  mario=createSprite(50,190,10,10)
  mario.addAnimation("l1",marioimg)
  edges=createEdgeSprites()
    enemyGroup=createGroup()
}

function draw()
{
  
  background('black');
  
  drawSprites();
  if (gameState===PLAY)
  {
  
    if(keyDown("space"))
    {
      mario.velocityY=-10
    }
    mario.velocityY=mario.velocityY+0.6
  
  mario.collide(edges)
  spawnClouds()
  spawnGoombas()
    if (mario.isTouching(enemyGroup))
    {
      gameState=END
    }
  }
  else if(gameState===END)
  {
  mario.velocityX=0
  }
}

    function spawnClouds()
    
{
  if(frameCount%80===0)
  {
    var clouds=createSprite(600,100,10,10)
  clouds.velocityX=-3
  clouds.addImage("lu",cloudimg)
  clouds.y=random(70,100)
  clouds.scale=0.1
  clouds.lifetime=205
  }
 
}

    function spawnGoombas()
{
  var t2=Math.round(random(30,70))
  if(frameCount%t2===0)
  {
  enemy=createSprite(600,190,10,10)
  enemy.lifetime=205
    
  var t1=Math.round(random(1,2))
  switch(t1)
  {
    case 1:enemy.addAnimation("pe",turtleimg)
      enemy.velocityX=-5
      break
      case 2:enemy.addAnimation("ba",enemyimg)
      enemy.velocityX=-7
      break
      default:break
  }
enemyGroup.add(enemy)
      
    
  }
  }